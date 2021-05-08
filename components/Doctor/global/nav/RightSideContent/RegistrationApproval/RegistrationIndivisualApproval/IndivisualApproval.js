import React, {useState} from "react";
import {Form,Col,Button} from 'react-bootstrap';
import style from './IndivisualApproval.module.css'
import adminServer from "../../../../../../../adminServer";
import Date2Human from "../../../../../../../functions/Date2Human";
import Link from 'next/link'

export default function ({doctor}) {
    const [status, setStatus] = useState(doctor.status);
    const [actionLoading, setActionLoading] = useState(false);
    const approve = ()=>{
        setActionLoading(true);
        adminServer.put('/admin/doctors/'+doctor.id+'/toggle-status',{
            status: 1
        }).then(res=>{
            setStatus(1);
            setActionLoading(false);
        }).catch(err=>{
            setActionLoading(false);
        })
    };
    return(
        <div className={"row " + style.indivisualApproval}>
            <div className={"col-md-8 "}>
                <div className={style.approvalContent}>
                    <p className={style.approvalText}>Reg. On: { Date2Human(new Date(doctor.created_at),{
                        time: true
                    }) }</p>
                    <a href="#"><span>{doctor.name}</span></a>
                    <p className={style.approvalText} >BMDC Reg. No: {doctor.bmdc_reg}</p>
                </div>
            </div>
            <div className={"col-md-4 "}>
                <div className={"row " + style.approveRight}>
                    <div className={"col"}>
                        <Link href={'/admin/doctors/'+doctor.id+'/profile'}>
                            <a>
                                <Button type="button" className={style.approveViewDetailBtn} >View Details</Button>
                            </a>
                        </Link>
                    </div>
                    <div className={"col"}>
                        { status === 3 && <Button type="button" onClick={approve} disabled={actionLoading} className={style.approveBtn} >Approve</Button>}
                        { status === 1 && <p>Approved</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}