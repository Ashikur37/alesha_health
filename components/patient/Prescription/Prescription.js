import React from "react";
import style from './Prescription.module.css';

export default function (props) {
    return(
        <div className={style.Prescription}>
            <div className={"row "}>
                <div className="col-md-1">
                    <p className={"mt-5 " + style.prescriptionNumber}>{props.dIndex + 1}</p>
                </div>
                <div className="col-md-7">
                    <div className="mt-3 mb-3 ml-2">
                        <p className={"mb-3 " + style.prescriptionTextDefault}>সময়: ০৩ মার্চ , 2020 | ৭.৩০</p>
                        <a href="" className={style.prescriptionDoctorName}><span>{props.dName}</span></a>
                        <p className={style.prescriptionTextDefault}>{props.dDesignation}</p>
                        <p className={style.prescriptionTextDefault}>এপয়েন্টমেন্ট ধরণ: {props.dAppointmentType}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={"clearfix ml-2 " + style.prescriptionOption}>
                        <div className={"float-left "}>
                            <a href="">
                                <span className={style.wkIconArea}>
                                    <span className={style.wkIcon}>
                                        <span className={"material-icons " + style.materialFontSize}>get_app</span>
                                    </span>
                                    <span className={style.prescriptionDownload}>ডাউনলোড</span>
                                </span>
                            </a>
                        </div>
                        <div className="float-right">
                            <a href="">
                                <span className={style.wkIconArea}>
                                    <span className={style.wkIcon}>
                                        <span className={"material-icons " + style.materialFontSize}>visibility</span>
                                    </span>
                                    <span className={style.prescriptionPreview}>প্রিভিউ</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}