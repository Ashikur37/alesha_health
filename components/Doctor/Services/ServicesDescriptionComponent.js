import style from './ServicesDescriptionComponent.module.css';
import {Button, ButtonGroup, Row, Col} from "react-bootstrap";
import doctorServer from "../../../doctorServer";
import {useState, useEffect, useRef} from "react";
import ServicesDescriptionSingleComponent from "./ServicesDescriptionSingleComponent";
import Spinner from "../../UI/Spinner/Spinner";
import Msg from "../../Msg";
import ErrorHandler from "../../../functions/ErrorHandler";
function ServicesDescriptionComponent({setEdit, edit, generateRef}) {
    const [lang, setLang] = useState('en');
    const [servicesLoading, setServicesLoading] = useState(true);
    const [services, setServices] = useState([]);
    const [actionLoading, setActionLoading] = useState({});

    useEffect(()=>{
        generateRef.current = {};
        generateRef.current.changed = changed;
        servicesLoad('en');
    },[]);

    // ref
    const msgRef = useRef();

    const changed = (data)=>{
        let language;
        setLang(prevState => {
            language = prevState;
            return prevState;
        });
        if(data.edit === true){
            setServices(prev=>{
                return prev.map(ele=>{
                    if(ele.id === data.id){
                        return  {
                            ...ele,
                            service_title: data.services[language].service_title,
                            service_detail: data.services[language].service_detail,
                        };
                    }
                    return ele;
                });
            });
        }else{
            const record = {
                id: data.id,
                order: data.order,
                status: data.status,
                service_title: data.services[language].service_title,
                service_detail: data.services[language].service_detail,
            };
            setServices(prev=>{
                return [...prev,record]
            });
        }
    };

    // service data load
    const servicesLoad = (lang_name)=>{
        setServicesLoading(true);
        doctorServer.get('/doctor/services',{
            params:{_lang:lang_name}
        }).then((res)=>{
            setServices(res.data.doctorServices);
            setServicesLoading(false)
        }).catch((err)=>{

        });
    };
    const onEdit = (id)=>{
        setEdit(id)
    };
    const changePublishStatus = (id,status)=>{
        setActionLoading(prevState =>{
            return {...prevState,[id]:true}
        } );
        doctorServer.put('/doctor/services/'+id+'/toggle-status',{
            status
        }).then((res)=>{
            if(res){

                if(res.data.status){
                    msgRef.current.show({type:'success', text:res.data.message});;
                    const servicesList = services.map(ele=>{
                        if(ele.id===id){
                            ele.status = status;
                        }
                        return ele;
                    });
                    setServices(servicesList)
                }else{
                    msgRef.current.show({type:'danger', text: res.data.message});
                }
                setActionLoading(prevState =>{
                    return {...prevState,[id]:false}
                } );
            }
        }).catch((err)=>{
            setActionLoading(prevState =>{
                return {...prevState,[id]:false}
            } );
            ErrorHandler({
                err,setErrors:false,msgRef
            })
        });
    };
    const langChange = (lang)=>{
        setLang(lang);
        servicesLoad(lang);
        setServices([]);
    };
    return (
      <div>
          <div className="container mt-5 mb-3">
              <div className={style.wkDoctorSercicesPost}>
                  <ButtonGroup className="mb-2">
                      <Button className={lang==='en'?'wk-general-button':'wk-filter-active-button'} onClick={()=>langChange('en')}>English</Button>
                      <Button className={lang==='bn'?'wk-general-button':'wk-filter-active-button'} onClick={()=>langChange('bn')}>বাংলা </Button>
                  </ButtonGroup>
                  <div className={style.wkDoctorServicesHeader}>
                      <p>Service List</p>
                  </div>
                  <div className={'mt-2'}><Msg generateRef={msgRef} /></div>
                  <div>
                      {!servicesLoading && services.map(ele=>{
                          return <ServicesDescriptionSingleComponent
                                    statusLoading={actionLoading[ele.id]}
                                    changePublishStatus={changePublishStatus}
                                    service={ele}
                                    lang={lang}
                                    edit={edit}
                                    key={'service_list_'+ele.id}
                                    onEdit={onEdit}
                                />})}

                      {!servicesLoading && services.length === 0 && (
                          <h3 class={'text-center'}>
                            Service not found.
                          </h3>
                      )}
                      {servicesLoading && <Spinner />}
                  </div>
              </div>
          </div>
      </div>
    );
}
export default ServicesDescriptionComponent