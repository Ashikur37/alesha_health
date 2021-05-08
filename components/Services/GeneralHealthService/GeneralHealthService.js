import React from "react";
import GeneralService from "./GeneralService";
import LiveDoctorQuestionSection from "./LiveDoctorQuestionSection";
import LiveDoctorService from "./LiveDoctorService";

export default function () {
    return(
        <div className="container">
           <GeneralService/>
           <LiveDoctorService/>
           <LiveDoctorQuestionSection/>
        </div>
    )
}