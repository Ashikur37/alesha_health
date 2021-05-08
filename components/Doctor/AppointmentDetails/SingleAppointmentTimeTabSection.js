import React,{useState} from "react";
import style from './SingleAppointmentTimeTabSection.module.css';
import SecondsToString from "../../../functions/SecondsToString";
import Date2Human from "../../../functions/Date2Human";


export default function ({callingHistory}) {
    return(
        <div className={style.singleAppointmentTimeTabSection}>
            <div className={"container"}>
                {
                    callingHistory.map(item=> (
                        <div key={'call_history'+item.id}>
                            <p>Last call was {SecondsToString(item.duration)} <small>at {Date2Human(new Date(item.end_timestamp),{time: true,second: true})}</small></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}