import React,{useState} from "react";
import Prescription from "./Prescription/Prescription";
import style from './PatientPrescriptionList.module.css';
import {Container,Button} from 'react-bootstrap';

const doctorList = [
    {
        dName:"মাসুদ পারভেজ",
        dDesignation:"এম বি বি এস , ডি এম সি",
        dAppointmentType:"হোম ভিসিট"
    },
    {
        dName:"জির ইসলাম",
        dDesignation:"এম বি বি এস , ডি এম সি",
        dAppointmentType:"চেম্বার ভিসিট"
    },
    {
        dName:"সিফাত হায়দার ",
        dDesignation:"এম বি বি এস , ডি এম সি",
        dAppointmentType:"চেম্বার ভিসিট"
    },
    {
        dName:"মাসুদ পারভেজ",
        dDesignation:"এম বি বি এস , ডি এম সি",
        dAppointmentType:"হোম ভিসিট"
    },

];
export default function () {
    const [dateInput,setDateInput] = useState({dateInput:new Date()});
    const getDateFromInput=()=>{
      setDateInput(dateInput);
    };
    return(
        <Container>
            <div className={"clearfix "+ style.patientPrescriptionHeader}>
                <h3 className="float-left">প্রেসক্রিপশন সমূহ </h3>
                <div className="float-right">
                    <div className={"input-group "}>
                        <div className={"input-group-prepend "}>
                            <div className={"input-group-text " + style.dateSearchInputIcon}><span className="material-icons">calendar_today</span></div>
                        </div>
                        <input className="form-control wk-search-input" type="date" value={dateInput} id="example-date-input" onChange={getDateFromInput}/>
                    </div>
                </div>
            </div>
            {
                doctorList.map((doctor,index)=>{
                    return(
                        <Prescription dIndex={index} dName={doctor.dName} dDesignation={doctor.dDesignation} dAppointmentType={doctor.dAppointmentType}/>
                    )
                })
            }
        </Container>
    )
}