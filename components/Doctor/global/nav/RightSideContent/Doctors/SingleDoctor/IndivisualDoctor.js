import React,{useState} from "react";
import {Form,Col,Button} from 'react-bootstrap';
import style from './IndivisualDoctor.module.css'
import Date2Human from "../../../../../../../functions/Date2Human";
import Link from "next/link";
import adminServer from "../../../../../../../adminServer";

export default function ({doctor}) {
    const [status, setStatus] = useState(doctor.status);
    const statusLabel = [{label:'In-Active',class:'text-danger'},{label:'Active',class:'text-success'}];
    const [actionLoading, setActionLoading] = useState(false);
    const statusOnChange = (type)=>{
        setActionLoading(true);
        adminServer.put('/admin/doctors/'+doctor.id+'/toggle-status',{
            status: type
        }).then(res=>{
            setStatus(type);
            setActionLoading(false);
        }).catch(err=>{
            setActionLoading(false);
        })
    };

    return(
        <div className={"row " + style.indivisualDoctor}>
            <div className={"col-md-6 "}>
                <div className={style.doctorContent}>
                    <p className={style.doctorText}>Reg. On: { Date2Human(new Date(doctor.created_at),{
                        time: true
                    }) }</p>
                    <a href={'/doctors/'+doctor.id+'/badhon-ahmed'}><span>{doctor.name}</span></a> <a href={'/admin/doctors/'+doctor.id+'/profile'}><span>View Details</span></a>
                </div>
            </div>
            <div className={"col-md-6 "}>
                <div className={"row " + style.doctorRight}>
                    <div className={"col"}>
                        Status: <p className={ statusLabel[status].class }>{ statusLabel[status].label }</p>
                    </div>
                    <div className={"col"}>
                        { status === 1 && <Button disabled={actionLoading} className={style.doctorDisableBtn} onClick={()=>statusOnChange(0)}>Disable</Button> }
                        { status === 0 && <Button disabled={actionLoading}  className={style.doctorEnableBtn} onClick={()=>statusOnChange(1)}>Enable</Button> }

                    </div>
                </div>
            </div>
        </div>
    )
}