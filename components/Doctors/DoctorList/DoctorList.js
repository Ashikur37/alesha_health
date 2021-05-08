import Doctor from './Doctor'
import style from "./Doctor.module.css";
import {Button, Col, Row} from "react-bootstrap";
import DoctorPlaceholder from "./DoctorPlaceholder";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import get from "../../../functions/get";

function DoctorList() {
    let isMounted = true;

    const router = useRouter();
    const {speciality_id,doctor} = router.query;

    //state
    const [doctors,setDoctors] = useState([]);

    //useEffect
    useEffect(()=> {
        loadDoctors();
        return () => {
            isMounted = false;
        }
    },[]);

    //get doctors
    const loadDoctors = ()=>{
        get({ url:'search',params:{speciality_id, doctor_name:doctor} }, (res)=> {isMounted && setDoctors(res.data.doctors)});
    };

    return(
        <div>
            {
                doctors.length === 0 && (
                    <>
                        <DoctorPlaceholder />
                        <DoctorPlaceholder />
                        <DoctorPlaceholder />
                        <DoctorPlaceholder />
                        <DoctorPlaceholder />
                    </>
                )
            }

            {doctors.length > 0 && doctors.map(doctor=><Doctor key={'doctor_'+doctor.id} doctor={doctor} className="mb-2"/>)}

        </div>
    )
}

export default DoctorList;