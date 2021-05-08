import {Container, Accordion } from 'react-bootstrap';
import style from './PatientAppointmentDescriptionComponent.module.css';
import React, {useContext, useEffect, useRef, useState} from "react";
import PatientAppointmentFormComponent from "./PatientAppointmentFormComponent";
import PatientAppointmentScheduleComponent from "./PatientAppointmentScheduleComponent";
import Msg from "../Msg";
import PatientAppointmentSelectionTabComponentPlaceholder from "./PatientAppointmentSelectionTabComponentPlaceholder";
import {SchedulesBookingContext} from "../../context/SchedulesBookingContext";


function PatientAppointmentHDescriptionComponent({ doctorData, appointmentType, appointmentDate }) {
    //ref
    const msgRef = useRef();

    const { scheduleBookingState } = useContext(SchedulesBookingContext);

    const [appointments, setAppointments] = useState([]);
    useEffect(()=>{
        setAppointments([]);
        let appointmentsList = doctorData.appointments;
        if(appointmentType){
            appointmentsList = appointmentsList.filter(appointment=>appointment.appointment_type_id == appointmentType)
        }

        setAppointments(appointmentsList)
    },[appointmentType])
    return(
        <div>
               <Container className="my-4">
                   <div className={style.wkPADMainArea}>
                       <div>
                           <div className="my-4">
                               <Msg generateRef={msgRef} />
                               <Accordion defaultActiveKey={0}>
                                   {!scheduleBookingState._loaded && <PatientAppointmentSelectionTabComponentPlaceholder/>}
                                   { scheduleBookingState._loaded &&  appointments.map((appointment,index)=> <PatientAppointmentScheduleComponent msgRef={msgRef} key={'appointment_'+index} doctor_id={doctorData.id} appointmentType={appointmentType} appointmentDate={appointmentDate} index={index} appointment={appointment} />) }
                               </Accordion>
                           </div>
                       </div>
                   </div>
               </Container>
       </div>);

}

export default PatientAppointmentHDescriptionComponent;