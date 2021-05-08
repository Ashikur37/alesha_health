import {useState} from "react";
import Head from "next/head";
import DoctorAuth from "../../middleware/DoctorAuth";
import TodayAppointmentComponent from "../../components/Doctor/Appointment/Today/TodayAppointmentComponent";

const index =  function (props) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <TodayAppointmentComponent />
        </>

    )
};
export default DoctorAuth(index);