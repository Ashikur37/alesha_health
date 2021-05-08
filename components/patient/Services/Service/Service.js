import React from "react";
import style from './Service.module.css'

export default function ({ service }) {
    return(
        <div className={style.serviceSection}>
            <p className={style.serviceHeader}>{ service.service_title }</p>
            <p className={style.serviceDescription}>{ service.service_detail }</p>
            <br/>
        </div>
    )
}