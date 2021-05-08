import PatientAppointmentHeadingComponent from "../../../components/patient/PatientAppointmentHeadingComponent";
import General from "../../../middleware/General";
import { useRouter } from 'next/router'
import Head from "next/head";
import React, {useContext, useEffect, useState} from "react";
import get from "../../../functions/get";
import DoctorProfileComponents from "../../../components/patient/DoctorProfileComponents";
import DoctorProfilePlaceholdersComponent from "../../../components/patient/DoctorProfilePlaceholdersComponent";
import {SchedulesBookingProvider} from "../../../context/SchedulesBookingContext";
import {GlobalContext} from "../../../context/GlobalContext";

const index =  function (props) {
    let isMounted = true;
    const {globalState} = useContext(GlobalContext)
    const router = useRouter()
    const {id} = router.query;
    const [doctorData,setDoctorData] =  useState({_isLoaded: false});

    useEffect(()=>{
        console.log('doctor',props,globalState)
        dataLoad(id);
        return () =>{
            isMounted =  false;
        }
    },[]);
    const dataLoad = (id)=>{
        get({ url:('doctors/'+id) }, (res)=> {isMounted && setDoctorData({_isLoaded: true,...res.data.doctor})});
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <PatientAppointmentHeadingComponent/>
            {/*<PatientAppointmentFilteringComponent/>*/}
            { !doctorData._isLoaded && <DoctorProfilePlaceholdersComponent /> }
            { doctorData._isLoaded &&
                <SchedulesBookingProvider>
                    <DoctorProfileComponents doctorData={doctorData} />
                </SchedulesBookingProvider>
            }
        </>

    )
};
export default General(index);