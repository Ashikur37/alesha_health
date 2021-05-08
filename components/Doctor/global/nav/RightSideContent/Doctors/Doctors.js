import React from "react";
import DoctorProgressBar from "./DoctorProgressBar";
import DoctorSearch from "./DoctorSearch";
import DoctorList from './DoctorList';

export default function () {
    return(
        <div className={"container "}>
            <h3 className={"mt-2 ml-3"}>Doctors</h3>
            {/*<DoctorProgressBar/>*/}
            {/*<DoctorSearch/>*/}
            <DoctorList/>
        </div>
    )
}