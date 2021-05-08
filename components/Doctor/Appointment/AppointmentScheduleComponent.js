import {Button, Col, Row} from "react-bootstrap";
import style from "./AppointmentSchedulesTabContent.module.css";
import days from "../../../enum/days";
import TimeTo12 from "../../../functions/TimeTo12";
import React, {useEffect, useState, useContext} from "react";
import doctorServer from "../../../doctorServer";
import ErrorHandler from "../../../functions/ErrorHandler";
import {DoctorSchedulesContext} from "../../../context/DoctorSchedulesContext";

export default function AppointmentSchedulesData(props){
    const {scheduleState, setScheduleState} = useContext(DoctorSchedulesContext);
    let isMounted = true;
    const {data, setEdit,edit,msgRef} = props;

    useEffect(()=>{
        return () =>{
            isMounted =  false;
        }
    },[]);
    const  statusUpdated = (id,status)=>{
        const data = scheduleState.schedules.map(ele=>{
            if(ele.id===id){
                ele.status = status;
            }
            return ele;
        });
        setScheduleState(prev=>({...prev,schedules:data}))
    };
    const [actionLoading, setActionLoading] = useState(false);
    const changePublishStatus = (id,status)=>{
        setActionLoading(true );
        doctorServer.put('/doctor/appointment-schedules/'+id+'/toggle-status',{
            status
        }).then((res)=>{
            if(isMounted){
                if(res.data.status){
                    msgRef.current.show({type:'success', text:res.data.message});
                    statusUpdated(id,status)
                }else{
                    msgRef.current.show({type:'danger', text: res.data.message});
                }
                setActionLoading(false);
            }
        }).catch((err)=>{
            if(isMounted){
                setActionLoading(true );
                ErrorHandler({
                    err,setErrors:false,msgRef
                })
            }
        });
    };

    let statusButton = "";
    if(data.status){
        statusButton = (<button className={'float-right '+style.wkButtonPublish} disabled={actionLoading} onClick={()=>changePublishStatus(data.id,0)} type="submit">
            {actionLoading?'Loading...':'Published'}
        </button>)
    }else{
        statusButton = (<button  className={'float-right '+style.wkButtonUnpublish} disabled={actionLoading} onClick={()=>changePublishStatus(data.id,1)} type="submit">
            {actionLoading?'Loading...':'Unpublished'}
        </button>)
    }

    let editButton = "";
    if(edit !== data.id){
        editButton = (
            <a href="#" className="float-right" onClick={(e)=>{
                e.preventDefault();
                setEdit(data.id)
            }}><i className="material-icons" style={{fontSize:"16px", color:"#FFC53B"}}>edit</i></a>
        );
    }


    return(
        <>
            <div className={style.wkAccordionCardData}>
                <Row>
                    <Col>{days[data.day]} </Col>
                    <Col>{data.shift}</Col>
                    <Col>{TimeTo12(data.start_time,{second:false})}</Col>
                    <Col>{TimeTo12(data.end_time,{second:false})}</Col>
                    <Col className="text-right">{data.max_patient_can_see}</Col>
                    <Col xs={3} className={style.wkStatusButton}>
                        {statusButton}
                        {editButton}
                    </Col>
                </Row>
            </div>
        </>
    )
}