import {useState} from "react";
import Head from "next/head";
import DoctorAuth from "../../../../middleware/DoctorAuth";
import TodayAppointment from "../../../../components/Doctor/Appointment/Today/TodayAppointment";

const index =  function (props) {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <TodayAppointment />
        </>

    )
};
export default DoctorAuth(index);