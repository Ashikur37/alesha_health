import {useState} from "react";
import AppointmentMenuTabContent from "../AppointmentMenuTabContent";
import TodayAppointmentList from "../../Appointments/TodayAppointmentList";

const TodayAppointmentComponent =  function (props) {

    return (
        <>
            <AppointmentMenuTabContent page={'TodayAppointment'}/>
            <TodayAppointmentList />
        </>

    )
};

export default TodayAppointmentComponent;