import DoctorAuth from "../../../middleware/DoctorAuth";
import AppoinmentList from "../../../components/Doctor/Appointments/AppoinmentList";
import AppointmentMenuTabContent from "../../../components/Doctor/Appointment/AppointmentMenuTabContent";
import AppointmentsSettingComponent from "../../../components/Doctor/Appointment/AppointmentsSettingComponent";
import {useRef, useState} from "react";
import Head from "next/head";
const index =  function (props) {
    //state
    const [edit,setEdit] = useState(false);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <AppointmentMenuTabContent page={'appointments'}/>
            <AppoinmentList />
        </>

    )
};
export default DoctorAuth(index);