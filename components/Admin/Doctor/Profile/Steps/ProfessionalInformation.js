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
        getDesignation();
        getSpeciality();
        return () =>{
            isMounted =  false;
        }
    },[context.professionalInfo]);

    const getDesignation = ()=>{
        if(context.designations.length === 0){
            get({ url:'designations', params:{ _lang:'en' } }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,designations:res.data.designations}
            })});
        }
    };
    const getSpeciality = ()=>{
        if(context.specialities.length === 0){
            get({ url:'specialities', params:{ _lang:'en' } }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,specialities:res.data.specialities}
            })});
        }
    };
    return (
        <>
            <p><i>Title/Designation: </i> { context.designations.length===0?'Loading......':context.designations.find(ele=>ele.id===context.professionalInfo.designation_id).title }</p>
            <p><i>Title/Speciality:</i> { context.specialities.length===0?'Loading......':context.specialities.find(ele=>ele.id===context.professionalInfo.speciality_id).name }</p>
            <p><i>Professional Statement (Short Info):</i> { context.professionalInfo.short_info && context.professionalInfo.short_info.en }</p>
            <p><i>পেশাগত বিবরণ (সংক্ষিপ্ত):</i> { context.professionalInfo.short_info && context.professionalInfo.short_info.bn }</p>
            <p><i>Professional Statement (Description):</i> { context.professionalInfo.detail_info && context.professionalInfo.detail_info.en }</p>
            <p><i>শাগত বিবরণ (বর্ণনা):</i> { context.professionalInfo.detail_info && context.professionalInfo.detail_info.bn }</p>
        </>
    )
}