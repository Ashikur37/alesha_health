import React, {useEffect, useState} from "react";
import style from './SingleAppointmentTabSection.module.css';
import classNames from 'classnames';


export default function ({ serial, doctor_serial,  tabChanged, status }) {
    const [activeTab, setActiveTab] = useState('time');
    const changeTab  = (tabName) =>{
        setActiveTab(tabName);
        tabChanged(tabName);
    };
    useEffect(()=>{
        console.log('serial',serial,doctor_serial)
    },[]);
    return(
        <div className={style.singleAppointmentTabSection}>
            <div className={"container"}>
                {/*when time tab active the text will show and the text will be running */}
                {
                    status == 1 && (
                        <p  className={style.wkAlaringTimeText}>
                            {doctor_serial == serial && <span>Now {  parseInt(doctor_serial) + 1} on serial is going.</span>}
                            <span> Your serial is { parseInt(serial) + 1 }. Please make payment to enable appointment and wait for your serial</span>
                        </p>
                    )

                }

                <div className={"row no-gutters"}>
                    <div className={"col-md-4"}>
                        <button className={classNames({[style.wkPatientTabbuttonActive]:activeTab==='time',[style.wkPatientTabbutton]:activeTab !=='time',})} onClick={()=>changeTab('time')}>
                            সময়
                        </button>
                    </div>
                    <div className={"col-md-4"}>
                        <button className={classNames({[style.wkPatientTabbuttonActive]:activeTab==='prescription',[style.wkPatientTabbutton]:activeTab !=='prescription',})}  onClick={()=>changeTab('prescription')}>
                            প্রেসক্রিপশন
                        </button>
                    </div>
                    <div className={"col-md-4"}>
                        <button className={classNames({[style.wkPatientTabbuttonActive]:activeTab==='payment',[style.wkPatientTabbutton]:activeTab !=='payment',})}  onClick={()=>changeTab('payment')}>
                            পেমেন্ট
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}