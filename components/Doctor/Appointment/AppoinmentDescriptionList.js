import {useContext, useEffect, useRef, useState} from "react";
import {Form, Button, Col, Row} from 'react-bootstrap'
import style from "./AppointmentSettingForm.module.css";
import AppointmentFeeDataList from "./AppointmentList/AppointmentFeeDataList";
import doctorServer from "../../../doctorServer";
import ErrorHandler from "../../../functions/ErrorHandler";
import Spinner from "../../UI/Spinner/Spinner";
import Msg from "../../Msg";


export default function ({setEdit, edit, generateRef}){
    let isMounted = true;

    //state
    const [dataLoading, setDataLoading] = useState(true);
    const [dataList, setDataList] = useState([]);
    const [actionLoading, setActionLoading] = useState({});

    useEffect(()=>{
        generateRef.current = {};
        generateRef.current.changed = changed;
        dataLoad();
        return () =>{
            isMounted =  false;
        }
    },[]);

    const changed = (data)=>{
        if(data.edit === true){
            setDataList(prev=>{
                return prev.map(ele=>{
                    if(ele.id === data.id){
                        return  {...ele,...data};
                    }
                    return ele;
                });
                //return [...prev,data]
            });
        }else{
            setDataList(prev=>{
                return [...prev,data]
            });
        }
    };


    // ref
    const msgRef = useRef();

    // data load
    const dataLoad = ()=>{
        setDataLoading(true);
        doctorServer.get('/doctor/appointments').then((res)=>{
            if(isMounted){
                setDataList(res.data.appointments);
                setDataLoading(false);
            }
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
        doctorServer.put('/doctor/appointments/'+id+'/toggle-status',{
            status
        }).then((res)=>{
            if(isMounted){
                if(res.data.status){
                    msgRef.current.show({type:'success', text:res.data.message});;
                    const data = dataList.map(ele=>{
                        if(ele.id===id){
                            ele.status = status;
                        }
                        return ele;
                    });
                    setDataList(data)
                }else{
                    msgRef.current.show({type:'danger', text: res.data.message});
                }
                setActionLoading(prevState =>{
                    return {...prevState,[id]:false}
                } );
            }
        }).catch((err)=>{
            if(isMounted){
                setActionLoading(prevState =>{
                    return {...prevState,[id]:false}
                } );
                ErrorHandler({
                    err,setErrors:false,msgRef
                })
            }
        });
    };
    return (
        <div >
            <div className="container my-3">
                <Msg generateRef={msgRef} />
                <div className={style.wkFeeSettingTableHeading}>
                    <Row>
                        <Col>Appointment Type</Col>
                        <Col>Chamber/Hospital</Col>
                        <Col>New Patients</Col>
                        <Col>Old Patients</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                </div>
            </div>
            {!dataLoading && dataList.map(ele=>{
                return <AppointmentFeeDataList
                    statusLoading={actionLoading[ele.id]}
                    changePublishStatus={changePublishStatus}
                    data={ele}
                    edit={edit}
                    key={'data_list_'+ele.id}
                    onEdit={onEdit}
                />})}

            {!dataLoading && dataList.length === 0 && (
                <h3 class={'text-center'}>
                    Appointments setting not found.
                </h3>
            )}
            {dataLoading && <Spinner />}
        </div>
    );
}