import React,{useState,useEffect} from "react";
import {useRouter} from "next/router";
import IndivisualDoctor from "./SingleDoctor/IndivisualDoctor";
import style from './DoctorList.module.css';
import adminServer from "../../../../../../adminServer";
import {error} from "next/dist/build/output/log";
import classNames from 'classnames';
import BkashPaymentItem from "../../../../../Admin/BkashPayment/BkashPaymentItem";
import GlobalPlaceholders from "../../../../../Placeholders/GlobalPlaceholders";
import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
let cancel;
export default function () {
    let isMounted= true;
    const [doctors,setDoctors] = useState({
        _isLoading: false,
        data: []
    });
    const [doctorsType,setDoctorsType] = useState(1);
    useEffect(()=>{
        findDoctor(doctorsType);
        return()=>{
            isMounted = false
        }
    },[]);
    const findDoctor = (type)=>{
        cancel && cancel();
        setDoctors({_isLoading: true, data: []});
        adminServer.get('/admin/doctors?type='+type,{
            cancelToken: new CancelToken((c)=>{
                cancel = c
            })
        }).then(res=>{
            isMounted && setDoctors({_isLoading: false, data:res.data.doctors});
        }).catch(()=>{

        });
    };
    const doctorsTypeAction = (type)=>{
        if(doctors !== type){
            findDoctor(type);
            setDoctorsType(type)
        }
    };
    return(
        <div className={"container mt-3 " + style.doctorList}>
            <div className={style.serviceSelection}>
                <div className={"row mb-3"}>
                    <button className={classNames("wk-general-button",{[style.serviceBtnActive]:doctorsType === 1},{[style.serviceBtnInActive]:doctorsType === 0})} onClick={()=>doctorsTypeAction(1)}>
                        In Service
                    </button>
                    <button className={classNames("wk-general-button",{[style.serviceBtnActive]:doctorsType === 0},{[style.serviceBtnInActive]:doctorsType === 1})} onClick={()=>doctorsTypeAction(0)}>
                        Out Of Service
                    </button>
                </div>
            </div>
            <div className={style.doctorBanner}>
                <h5 className={style.doctorBannerText}>Doctor</h5>
            </div>
            { doctors._isLoading && <GlobalPlaceholders rows={10} /> }
            {
                !doctors._isLoading  && doctors.data.length > 0 && doctors.data.map((doctor,index)=>{
                    return(
                        <IndivisualDoctor key={index} doctor={doctor}/>
                    )
                })
            }
        </div>
    )
}