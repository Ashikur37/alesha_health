import React, {useContext, useEffect, useState} from "react";
import PatientAppointmentTakeComponent from "../PatientAppointmentTakeComponent";
import PatientAppointmentHDescriptionComponent from "../PatientAppointmentDescriptionComponent";
import Date2String from "../../../functions/Date2String";
import {SchedulesBookingContext} from "../../../context/SchedulesBookingContext";
import get from "../../../functions/get";
import userServer from "../../../userServer";

import axios from "axios";
import adminServer from "../../../adminServer";
import server from "../../../server";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
let cancel;
export default function ({doctorData, appointmentsTypes}) {
    let isMounted = true;

    const { setScheduleBookingState } = useContext(SchedulesBookingContext);
    const [appointmentType, setAppointmentType] = useState("");
    const [appointmentDate, setAppointmentDate] = useState(Date2String());
    useEffect(()=>{
        loadSchedule(appointmentDate);

        return () =>{
            isMounted =  false;
        }
    },[appointmentDate]);
    const loadSchedule = (appointmentDate)=>{
        cancel && cancel();
        setScheduleBookingState( {  _loaded: false, schedules:{ } } );

        const params = { doctor_id:doctorData.id, date: appointmentDate};
        server.get('/doctor-schedules',{
            params,
            cancelToken: new CancelToken((c)=>{
                cancel = c
            })
        }).then(res=>{
            isMounted &&
            setScheduleBookingState(prev=>{
                return { ...prev, _loaded: true,}
            });
            setScheduleBookingState(prev=>{
                return { ...prev, schedules:{...res.data.schedules} }
            })
        });

    };
    return(
        <div>
            <PatientAppointmentTakeComponent appointmentsTypes={appointmentsTypes} setAppointmentType={setAppointmentType} setAppointmentDate={setAppointmentDate} />
            <PatientAppointmentHDescriptionComponent doctorData={doctorData} appointmentType={appointmentType} appointmentDate={appointmentDate}/>
        </div>
    )
}