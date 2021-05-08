import React, {Component} from "react";
import style from './ServicesFeeSettingComponent.module.css'
import AppointmentSettingForm from "../Appointment/AppointmentSettingForm";

export default function ({edit,setEdit,sent}) {
    return(
        <>
            <div className="container">
                <div className="text-right my-3">
                    <span className={style.wkArrowSetting}>&nbsp;&nbsp;</span><a href="#" className={style.wkSettingLink}> How to setting  Appointment</a>
                </div>

                <div className={style.wkFeeSettingTableHeading}>
                    <p>
                        <span className='float-left mr-2'>Appointment Setting</span>
                        <i className="material-icons">
                            info
                        </i>
                    </p>
                </div>
            </div>
            <AppointmentSettingForm  edit={edit} setEdit={(id)=>setEdit(id)} sent={sent}/>
        </>
    );

}