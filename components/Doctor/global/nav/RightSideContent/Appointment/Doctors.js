import React from "react";
import DoctorProgressBar from "./AppointmentProgressBar";
import DoctorSearch from "./AppointmentSearch";
import DoctorList from './AppointmentList';

export default function () {
    return(
        <div className={"container "}>
            <h3 className={"mt-2 ml-3"}>Doctors</h3>
            <DoctorProgressBar/>
            <DoctorSearch/>
            <DoctorList/>
        </div>
    )
}