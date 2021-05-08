import {Container, Button, Accordion, Card, Form, Row, Col} from 'react-bootstrap';
import style from './PatientAppointmentScheduleComponent.module.css';
import React, {useContext, useEffect, useState} from "react";
import fee_types from "../../enums/fee_types";
import TimeTo12 from "../../functions/TimeTo12";
import classNames from 'classnames';
import Link from 'next/link'
import TimeTo24 from "../../functions/TimeTo24";
import userServer from "../../userServer";
import {SchedulesBookingContext} from "../../context/SchedulesBookingContext";
import {GlobalContext} from "../../context/GlobalContext";


function PatientAppointmentScheduleComponent({doctor_id, msgRef, appointment, index, appointmentDate, appointmentType}) {
    const { globalState } = useContext(GlobalContext);
    const { scheduleBookingState, setScheduleBookingState } = useContext(SchedulesBookingContext);
    const [timeSchedule, setTimeSchedule] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [bookedSchedules, setBookedSchedules] = useState([]);
    const [schedulesSelect, setSchedulesSelect] = useState(0);
    const [scheduleBook, setScheduleBook] = useState(-1);
    const [scheduleBooking, setScheduleBooking] = useState(false);
    useEffect(()=>{
        const date = new Date(appointmentDate);
        let day = date.getDay();
        day = day===6?0:(day+1);
        const schedulesList = appointment.schedules.filter(schedule=>schedule.day === day);
        setSchedules(schedulesList)
        if(schedulesList.length>0){
            setSchedulesSelect(schedulesList[0].id);
            scheduleChanged(schedulesList[0]);
        }else{
            setTimeSchedule([]);
            setSchedulesSelect(0);
        }
        setScheduleBook(-1);
    },[appointmentDate, appointmentType]);
    useEffect(()=>{
        setBookedSchedules(scheduleBookingState.schedules[schedulesSelect]?scheduleBookingState.schedules[schedulesSelect]:[]);
    },[scheduleBookingState.schedules])
    const scheduleOnChange = (e, index)=>{
        e.preventDefault();
        const schedule = schedules[index];
        if(schedulesSelect !== schedule.id){
            setSchedulesSelect(schedule.id);
            scheduleChanged(schedule);
        }
        setScheduleBook(-1);
    }
    const scheduleChanged = (schedule)=>{
        const bookingScheduleList = scheduleBookingState.schedules[schedule.id];
        setBookedSchedules(bookingScheduleList?bookingScheduleList:[]);
        const start_time = new Date('07-08-2020 '+schedule.start_time);
        const end_time = new Date('07-08-2020 '+schedule.end_time);
        const per_schedule_time = Math.floor((end_time - start_time)/schedule.max_patient_can_see);
        const time_schedule = [];
        for(let i = 0;i<schedule.max_patient_can_see;i++){
            time_schedule.push(TimeTo12(start_time.toLocaleTimeString(),{second:false}));
            start_time.setMilliseconds(start_time.getMilliseconds()+per_schedule_time);
        }
        setTimeSchedule(time_schedule);
    }
    const scheduleBookingOnChange = (e)=>{
        const value = parseInt(e.target.value);
        setScheduleBook(value);
    }
    const onSubmit = ()=>{
        const serial = (scheduleBook);
        setScheduleBooking(true);
        msgRef.current.hide();
        const data =  {
            doctor_id: doctor_id,
            appointment_id: appointment.id,
            appointment_schedule_id: schedulesSelect,
            appointment_date: appointmentDate,
            time: TimeTo24(timeSchedule[scheduleBook]),
            serial: serial
        };
        userServer.post('/doctor-schedules',data).then(res=>{
            msgRef.current.show({type:'success', text:res.data.message});
            setTimeSchedule([]);
            setScheduleBookingState(prev=>{
                const prevSchedules = {...prev.schedules};
                if(!prevSchedules[schedulesSelect]){
                    prevSchedules[schedulesSelect] = []
                }
                prevSchedules[schedulesSelect].push(serial)
                console.log('prevSchedules',prevSchedules)
                return {...prev,schedules:prevSchedules}
            })
            setTimeSchedule([...timeSchedule]);
            setScheduleBook(-1);
            setScheduleBooking(false);
            
        }).catch((err)=>{
            setScheduleBooking(false);
            if(err.response.data.message){
                msgRef.current.show({type:'danger', text:err.response.data.message});
                alert(err.response.data.message);
            }else{
                msgRef.current.show({type:'danger', text:'Failed. Please try again!'});
                alert('Failed. Please try again!');
            }
        });


    };
    return(
        <div>
            <Card className={style.wkAccordianCard}>
                <Accordion.Toggle as={Card.Header} eventKey={index} className={style.wkTab}>
                    <span className="float-left">
                        <span className={style.wkCTextArea}>
                            <span className={'mr-3 '+style.wkCText}>{appointment.appointment_type_title}</span>
                            <span className={style.wkCIcon}>
                                <i className="material-icons"> error_outline </i>
                            </span>
                        </span>
                    </span>
                    <span className="float-right">
                      <span className={style.wkCTextAreaAlt}>
                          <span className={style.wkCIconAlt}>
                              {appointment.discount_for_new>0 &&  <del className={'mr-2'}>{appointment.new_fee}</del>}
                              { appointment.new_fee - appointment.discount_for_new } / {fee_types[appointment.fee_type].bn}
                            </span>

                        </span>
                       <i className="material-icons">expand_more</i>
                    </span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body className={style.wkCardBody}>
                        <div className={style.wkGeneralTextArea}>
                            <Row>
                                <Col md={8}>
                                    <p> <span className={style.wkBold}>হাসপাতাল/চেম্বার:</span>  {appointment.hospital_name}</p>
                                    <p> <span className={style.wkBold}>হাসপাতালের/চেম্বার ঠিকানা:</span>  {appointment.hospital_address}</p>
                                </Col>
                                <Col md={4}>
                                    <div> <span className={style.wkBold}>নতুন রোগীর ফি:</span> </div>
                                    <p className={style.wkGeneralParagraph}>
                                        {appointment.discount_for_new>0 &&  <del className={'mr-2'}>{appointment.new_fee}৳</del>}
                                        { appointment.new_fee - appointment.discount_for_new }৳ / {fee_types[appointment.fee_type].bn}
                                    </p>
                                    <div> <span className={style.wkBold}>পুরাতন রোগীর ফি:</span> </div>
                                    <p className={style.wkGeneralParagraph}>
                                        {appointment.discount_for_old>0 &&  <del className={'mr-2'}>{appointment.old_fee}৳</del>}
                                        { appointment.old_fee - appointment.discount_for_old }৳ / {fee_types[appointment.fee_type].bn}
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <p style={{display:"inline"}}>শিফট : </p>
                                {schedules.map((schedule,index)=>(
                                    <a href="" onClick={(e)=>scheduleOnChange(e,index)} key={'shift_'+index} className={classNames(style.wkshiftButton,{[style.wkShiftActive]:schedulesSelect===schedule.id})}>{schedule.name}</a>
                                ))}
                            </Col>
                        </Row>

                        <div className={style.WkAccordionBodyDataArea}>
                            <Form>
                                <Row>
                                    {
                                        timeSchedule.map((schedule,index)=>(
                                            <Col xs={3} key={'schedule_'+index}>
                                                <Form.Group controlId={'schedule_'+index}>
                                                    <Form.Check name="schedule"
                                                        type="radio"
                                                        disabled={bookedSchedules.findIndex(ele=>ele==index)>-1}
                                                        defaultValue={index}
                                                        onChange={scheduleBookingOnChange}
                                                        label={schedule}
                                                                className={style.wkTimeText}

                                                    />
                                                </Form.Group>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Form>
                            { !globalState.userAuth && (
                                    <Link href="/login">
                                        <a className={style.wkAppointmentConfirmButton} type="submit">কনফার্ম করতে লগইন করুন</a>
                                    </Link>
                                )
                            }
                            {globalState.userAuth && scheduleBook>-1 && <Button disabled={scheduleBooking} onClick={onSubmit} className={"wk-general-button " + style.wkAppointmentConfirmButton} type="submit">কনফার্ম করুন</Button>}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
       </div>);

}

export default PatientAppointmentScheduleComponent;