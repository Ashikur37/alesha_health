import React from "react";
import MentalHealthService from "./MentallyHealthService";
import LiveDoctorService from "./LiveDoctorService";
import LiveDoctorQuestionSection from "./LiveDoctorQuestionSection";
export default function () {
    return(
        <div  className="container">
            <MentalHealthService/>
            <LiveDoctorService/>
            <LiveDoctorQuestionSection/>
        </div>
    )
}