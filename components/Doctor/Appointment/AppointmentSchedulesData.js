import {Col, Row} from "react-bootstrap";
import style from "./AppointmentSchedulesTabContent.module.css";
import AppointmentScheduleComponent from "./AppointmentScheduleComponent";
import React, {useContext, useEffect} from "react";
import {DoctorSchedulesContext} from "../../../context/DoctorSchedulesContext";
import Spinner from "../../UI/Spinner/Spinner";

export default function AppointmentSchedulesData({edit, appointment_id, setEdit, msgRef}){
    const {scheduleState} = useContext(DoctorSchedulesContext);
    return(
        <div className={style.WkAccordionBodyDataArea}>
            <Row>
                <Col xs={2}>Date</Col>
                <Col xs={2}>Shift</Col>
                <Col xs={2}>Time(From)</Col>
                <Col xs={2}>Time(To)</Col>
                <Col xs={3} className="text-left">Number of Appoinment</Col>
                <Col sm={6}></Col>
            </Row>
            {!scheduleState.schedules && <Spinner/>}
            {scheduleState.schedules && scheduleState.schedules.map(ele=>(appointment_id == ele.appointment_id && <AppointmentScheduleComponent setEdit={(id)=>setEdit(id)} edit={edit} msgRef={msgRef} key={'AppointmentScheduleComponent'+ele.id} data={ele}/>))}

        </div>
    )
}