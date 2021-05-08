import React, {useContext, useEffect} from "react";
import {ProfileCompletionContext} from "../../../../../context/ProfileCompletionContext";
import style from "../../../../Doctor/Registration/DoctorRegistration.module.css";
import get from "../../../../../functions/get";
import {Form} from "react-bootstrap";

export default function({goNextStep ,  msgRef}) {
    let isMounted = true;
    // context
    const {context, setContext}=useContext(ProfileCompletionContext);

    //use effect for edit change
    useEffect(()=>{
        getHospital();
        getDepartments();
        return () =>{
            isMounted =  false;
        }
    },[context.professionalInfo]);

    const getHospital = ()=>{
        if(context.hospitals.length === 0){
            get({ url:'hospitals' }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,hospitals:res.data.hospitals}
            })});
        }
    };
    const getDepartments = ()=>{
        if(context.departments.length === 0){
            get({ url:'departments' }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,departments:res.data.departments}
            })});
        }
    };
    return (
        <>
            <p><i>Your Hospital/Medical Name: </i> { context.hospitals.length===0?'Loading......':context.hospitals.find(ele=>ele.id===context.workplaceInfo.hospital_id).name }</p>
            <p><i>Department Name:</i> { context.departments.length===0?'Loading......':context.departments.find(ele=>ele.id===context.workplaceInfo.department_id).title }</p>
            <p><i>Room Number:</i> { context.workplaceInfo.room}</p>
        </>
    )
}