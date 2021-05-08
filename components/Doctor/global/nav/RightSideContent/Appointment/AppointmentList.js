import React,{useState,useEffect} from "react";
import SingleAppointment from "./SingleAppointment/SingleAppointment";
import style from './AppointmentList.module.css';
import adminServer from "../../../../../../adminServer";
import {error} from "next/dist/build/output/log";

export default function () {
    return(
        <div className={"container mt-3 " + style.appointmentList}>
            <div className={style.serviceSelection}>
                <div className={"row mb-3"}>
                    <button className={"wk-general-button " + style.inServiceBtn}>
                        Today
                    </button>
                    <button className={"wk-general-button " + style.outOfServiceBtn}>
                        Appointment Archive
                    </button>
                </div>
            </div>
           <SingleAppointment/>
        </div>
    )
}