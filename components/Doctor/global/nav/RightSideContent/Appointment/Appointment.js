import React from "react";
import AppointmentProgressBar from "./AppointmentProgressBar";
import AppointmentSearch from "./AppointmentSearch";
import AppointmentList from './AppointmentList';

export default function () {
    return(
        <div className={"container "}>
            <h3 className={"mt-2 ml-3"}>Appointment</h3>
            <AppointmentProgressBar/>
            <AppointmentSearch/>
            <AppointmentList/>
        </div>
    )
}