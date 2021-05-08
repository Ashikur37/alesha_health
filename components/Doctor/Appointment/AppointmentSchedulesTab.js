import React, {useRef, useContext, useEffect, useState} from "react";
import {Accordion, Card, Col, Row, useAccordionToggle} from 'react-bootstrap';
import style from './AppointmentSchedulesTabContent.module.css';
import AppointmentSchedulesForm from "./AppointmentSchedulesForm";
import AppointmentSchedulesData from "./AppointmentSchedulesData";
import Spinner from "../../UI/Spinner/Spinner";
import Msg from "../../Msg";
import {DoctorSchedulesContext} from "../../../context/DoctorSchedulesContext";
import AppointmentDescriptionList from "./AppoinmentDescriptionList";
import doctorServer from "../../../doctorServer";
import ErrorHandler from "../../../functions/ErrorHandler";
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey);

    return (
        <span onClick={decoratedOnClick} className='pointer'>
            {children}
        </span>
    );
}
export default function ({data, eventKey,shifts, appointmentStatusChanged}){
    let isMounted = true;
    const [edit,setEdit] = useState(false);
    const [statusChanging,setStatusChanging] = useState(false);
    //ref
    const msgRef = useRef();

    //use effect for component did mount
    useEffect(()=>{

        return () =>{
            isMounted =  false;
        }
    },[]);

    const appointmentStatusChange = (id,status)=>{
        let msg = 'You will go for active this appointment.';
        if(status === 0){
            msg = 'You will go for de-active this appointment.';
        }
        if(confirm(msg)){
            if(isMounted){
                setStatusChanging(true);
            }
            doctorServer.put('/doctor/appointment/'+id+'/toggle-status',{
                status
            }).then((res)=>{
                if(isMounted){
                    appointmentStatusChanged(id,status);
                }
            }).catch((err)=>{
                if(isMounted){
                    alert('Failed. Please try again!')
                }
            }).finally(()=>{
                console.log('statusChanging',statusChanging)
                if(isMounted){
                    setStatusChanging(false);
                }
            });
        }
    };

    let activeDeActiveAppointmentBtn =
        !statusChanging && data.status?(
                <>
                   <span className={style.wkCIconAlt}>
                       <button className={style.wkActiveInActive} onClick={()=>appointmentStatusChange(data.id,0)}>
                           <i className="material-icons" style={{color:"#fff"}}>fiber_smart_record</i>
                       </button>
                   </span>
                    <span className={style.wkCTextAlt}>Activated</span>
                </>
            )
            : (<>
                <span className={style.wkCIconAlt}>
                   <button className={style.wkActiveInActive}  onClick={()=>appointmentStatusChange(data.id,1)}>
                        <i className="material-icons" style={{color:"#dc3545"}}>fiber_smart_record</i>
                   </button>
                </span>
                    <span className={style.wkCTextAlt}>Deactivated</span>
                </>
            );

    if(statusChanging){
        activeDeActiveAppointmentBtn =
            <>
                <span className={style.wkCTextAlt}>Loading...</span>
            </>;
    }

    return(
        <Card className={style.wkAccordianCard}>
            <Card.Header className={style.wkTab}>
                <CustomToggle eventKey={eventKey}>
                  <span className="float-left">
                        <span className={style.wkCTextArea}>
                            <span className={style.wkCText}>{data.hospital_name+' ('+data.appointment_type_title})</span>
                            <span className={style.wkCIcon}>
                                <i className="material-icons"> error_outline </i>
                            </span>
                        </span>
                    </span>
                </CustomToggle>
                <span className="float-right">
                    <span className={style.wkCTextAreaAlt}>{ activeDeActiveAppointmentBtn }</span>
                    <CustomToggle eventKey={eventKey}>
                        <i className="material-icons">expand_more</i>
                    </CustomToggle>
                </span>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    <Row>
                        <Col><Msg generateRef={msgRef} /></Col>
                    </Row>
                    <AppointmentSchedulesForm msgRef={msgRef} setEdit={(id)=>setEdit(id)} edit={edit}  shifts={shifts} appointment_id={data.id} />
                    <AppointmentSchedulesData msgRef={msgRef} setEdit={(id)=>setEdit(id)} edit={edit} appointment_id={data.id}  />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}
