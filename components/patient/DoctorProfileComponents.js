import PatientAppointmentVideoComponent from "./PatientAppointmentVideoComponent";
import {Container, Row} from "react-bootstrap";
import style from "./PatientAppointmentSelectionTabComponent.module.css";
import classNames from "classnames";
import Appointment from "./Appointment/Appointment";
import Services from "./Services/Services";
import React, {useEffect, useState} from "react";
import get from "../../functions/get";

function DoctorProfileComponents({doctorData}) {
    let isMounted = true;

    //state
    const [activeTab,setActiveTab] =  useState('appointment');
    const [appointmentsTypes, setAppointmentsTypes] = useState();

    const tabOnChange = (e,type)=>{
        e.preventDefault();
        setActiveTab(type);
    };
    useEffect(()=>{
        getAppointmentTypes();
        return () =>{
            isMounted =  false;
        }
    },[]);
    const getAppointmentTypes  = ()=>{
        get({url:'appointment-types'}, (res)=> {isMounted && setAppointmentsTypes(res.data.appointment_types)});
    };
    return(
        <>
            <PatientAppointmentVideoComponent doctorData={ doctorData } />
            <div>
                <Container>
                    <Row>
                        <div className={"float-left "+style.wkSelectionButtonArea}>
                            <a href="" onClick={(e)=>tabOnChange(e,'appointment')} className={classNames("btn",style.wkSelcetionButton, {[style.wkSelcetionButtonActive]:activeTab==='appointment'})}>এপয়েন্টমেন্ট</a>
                            <a href="" onClick={(e)=>tabOnChange(e,'services')} className={classNames('btn',style.wkSelcetionButton,  {[style.wkSelcetionButtonActive]:activeTab==='services'})}>সার্ভিস সমূহ</a>
                        </div>
                    </Row>
                </Container>
            </div>
            {activeTab==='appointment' && <Appointment appointmentsTypes={appointmentsTypes} doctorData={doctorData} /> }
            {activeTab==='services' && <Services services={ doctorData.services }/> }
        </>
    );

}

export default DoctorProfileComponents;