import React,{useState} from "react";
import TimeSection from "./AppointmentSections/TimeSection";
import PrescriptionSection from "./AppointmentSections/PrescriptionSection";
import PaymentSection from "./AppointmentSections/PaymentSection";
import style from './SingleAppointmentTabSection.module.css';
import classNames from 'classnames';

export default function ({tabChanged}) {
    const [activeTab, setActiveTab] = useState('time');
    const changeTab  = (tabName) =>{
        setActiveTab(tabName);
        tabChanged(tabName);
    };
    return(
        <div className={style.singleAppointmentTabSection}>
            <div className={"container"}>

                <div className={"row no-gutters"}>
                    <div className={"col-md-6"}>
                        <button className={classNames({[style.wkPatientTabbuttonActive]:activeTab==='time',[style.wkPatientTabbutton]:activeTab !=='time',})} onClick={()=>changeTab('time')}>
                            Call
                        </button>
                    </div>
                    <div className={"col-md-6"}>
                        <button className={classNames({[style.wkPatientTabbuttonActive]:activeTab==='prescription',[style.wkPatientTabbutton]:activeTab !=='prescription',})}  onClick={()=>changeTab('prescription')}>
                            Prescription
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}