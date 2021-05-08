import {Form, Button, ButtonGroup} from 'react-bootstrap'
import style from './ServicesFormComponent.module.css';
import {useEffect, useRef, useState} from "react";
import commonValidations from "../../../validations/commonValidations";
import server from "../../../server";
import ErrorHandler from "../../../functions/ErrorHandler";
import Msg from "../../Msg";
import doctorServer from "../../../doctorServer";
import Spinner from "../../UI/Spinner/Spinner";

function ServicesFormComponent({edit, setEdit, sent}) {
    //default State for
    const defaultState = {
        order:'1',
        services:{
            en:{service_title:'',service_detail:''},
            bn:{service_title:'',service_detail:''},
        },
    };
    //states
    const [editDataLoading,setEditDataLoading] =useState(false);
    const [formLang, setFormLang] = useState('en');
    const [errors,setErrors] = useState({});

    const [formState,setFormState] = useState(defaultState);
    const [placeHolder,setPlaceHolder] = useState({
        en:{service_title:'Title....',service_detail:'Details....'},
        bn:{service_title:'সংক্ষিপ্ত নাম....',service_detail:'সংক্ষিপ্ত বর্ণনা....'},
    });
    const [formSubmitting,setFormSubmitting] = useState(false);

    // ref
    const msgRef = useRef();

    //user effect
    useEffect(()=>{
        if(edit!==false){
            getService();
        }else{
            setEditDataLoading(false);
        }
    },[edit]);

    //on change input
    const getService = ()=>{
        setEditDataLoading(true);
        doctorServer.get('/doctor/services/'+edit+'/edit').then((res)=>{
            const formState = {
                order:'1',
                services:{
                    en:{service_title:'',service_detail:''},
                    bn:{service_title:'',service_detail:''},
                },
            };
            formState.order = res.data.doctorService.order;
            res.data.doctorServiceItems.map(item=>{
                formState.services[item.code].service_title = item.service_title;
                formState.services[item.code].service_detail = item.service_detail;
            });
            setFormState(formState);
            setEditDataLoading(false);
        }).catch((err)=>{

        });
    };

    //on change input
    const onChangeInputForm = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return  {...prev,services:{...prev.services,[formLang]:{...prev.services[formLang],[field]:value}}};
        })
    };
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return  {...prev,[field]:value};
        })
    };
    const cancelEdit = ()=>{
        setEdit(false);
        setFormState(defaultState);
    };

    // submit
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            'order':'required',
            'services.en.service_title':'required',
            'services.en.service_detail':'required',
            'services.bn.service_title':'required',
            'services.bn.service_detail':'required',

        });

        if(isValid){
            msgRef.current.hide();
            let server;
            if(edit){
                server = doctorServer.put('/doctor/services/'+edit,formState);
            }else{
                server = doctorServer.post('/doctor/services',formState);
            }
            return server.then((res)=>{
                const data = {...formState};
                if(res.data.status){
                    msgRef.current.show({type:'success', text:res.data.message});
                    setFormState(defaultState);
                    setFormLang('en');
                }
                setFormSubmitting(false);
                if(edit){
                    data.edit = true;
                    data.id = edit;
                    setEdit(false);
                }else{
                    data.id = res.data.id;
                }
                sent(data);
            }).catch((err)=>{
                setFormSubmitting(false);
                ErrorHandler({
                    err,setErrors,msgRef
                })
            });
        }else{
            setErrors({...errors});
            if(errors.services){
                setFormLang(Object.keys(errors.services)[0]);
            }
            setFormSubmitting(false);
        }
    };
    const form = (<Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
                type="text"
                className="wk-select-input"
                placeholder={placeHolder[formLang].service_title}
                value={formState.services[formLang].service_title}
                onChange={onChangeInputForm}
                name='service_title'
                isInvalid={errors.services && errors.services[formLang] && !!errors.services[formLang].service_title}
            />
            <Form.Control.Feedback type='invalid'>{errors.services && errors.services[formLang] && errors.services[formLang].service_title}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
                as="textarea"
                className="wk-select-input"
                rows="3"
                placeholder={placeHolder[formLang].service_detail}
                value={formState.services[formLang].service_detail}
                onChange={onChangeInputForm}
                name='service_detail'
                isInvalid={errors.services && errors.services[formLang] && !!errors.services[formLang].service_detail}
            />
            <Form.Control.Feedback type='invalid'>{errors.services && errors.services[formLang] && errors.services[formLang].service_detail}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
                type="text"
                className="wk-select-input"
                placeholder='Order No'
                value={formState.order}
                onChange={onChangeInput}
                name='order'
                isInvalid={!!errors.order}
            />
            <Form.Control.Feedback type='invalid'>{errors.order}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" disabled={formSubmitting} className="wk-general-button" type="submit">
            {edit?'Update':'Save'}
        </Button>
        {
            edit &&
            (
                <Button variant="primary" onClick={cancelEdit} className="wk-general-button" type="submit">
                    Cancel
                </Button>
            )
        }
    </Form>);
    return (
      <div>
          <div className="container">
              <div className={style.wkDoctorSercicesPost}>
                  <Msg generateRef={msgRef} />
                  <ButtonGroup className="mb-2">
                      <Button className={formLang==='en'?'wk-general-button':'wk-filter-active-button'} onClick={()=>setFormLang('en')}>English</Button>
                      <Button className={formLang==='bn'?'wk-general-button':'wk-filter-active-button'} onClick={()=>setFormLang('bn')}>বাংলা </Button>
                  </ButtonGroup>
                  {editDataLoading && <Spinner />}
                  {!editDataLoading && form}
              </div>

          </div>

      </div>
    );
}
export default ServicesFormComponent