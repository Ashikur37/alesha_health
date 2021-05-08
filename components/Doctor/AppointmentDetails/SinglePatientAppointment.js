import React, {useEffect, useState} from "react";
import style from './SinglePatientAppointment.module.css'
import SingleAppointmentTabSection from "./SingleAppointmentTabSection";
import SingleAppointmentTimeTabSection from "./SingleAppointmentTimeTabSection";
import SingleAppointmentPrescriptionTabSection from "./SingleAppointmentPrescriptionTabSection";
import SingleAppointmentPaymentTabSection from "./SingleAppointmentPaymentTabSection";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import io from "socket.io-client";
import window from "global";
import TimeTo12 from "../../../functions/TimeTo12";
import Date2Human from "../../../functions/Date2Human";
import SinglePatientAppointmentActions from './SinglePatientAppointmentActions';
import doctorServer from "../../../doctorServer";

const _doctorJwtToken = Cookies.get('_doctorJwtToken');
const socket = io(process.env.REALTIME_SERVER_URL+'/doctors?jwtToken='+_doctorJwtToken);
socket.on('connect', function(){
    console.log( 'connected', socket.id )
});
export default function ({ data, doctorSerial, callingHistory }) {
    const router = useRouter();
    const {id} = router.query;
    const { RTCPeerConnection, RTCSessionDescription } = window;

    const [isActive, setIsActive] = useState(false);
    const [isCalling, setIsCalling] = useState(false);
    const [completeActionLoading, setCompleteActionLoading] = useState(false);
    const [callerId, setCallerId] = useState('');
    const status_label = ['Cancelled', 'Pending', 'Completed'];
    const payment_status_label = ['Unpaid', 'Partially Paid', 'Full Paid'];
    const [activeTab, setActiveTab] = useState('time');
    useEffect(()=>{
        if(data.serial === doctorSerial){
            setIsActive(true);
        }

    },[]);
    const confirmCall = ()=>{
        const caller_id = callerId.split('#')[1];
        popupNewWindow({url: 'http://localhost:3000/doctor/appointments/'+id+'/call', title: 'xtf', w: 900, h: 500});
    };
    const callToUser = (type)=>{
        window.open(process.env.URL+'/doctor/appointments/'+id+'/call?call_type='+type);
        //popupNewWindow({url: 'http://localhost:3000/doctor/appointments/'+id+'/call', title: 'xtf', w: 900, h: 500});
    };
    const serialActive = ()=>{
        setIsActive(true);
        socket.emit("serial-update", {
            schedule_id: id,
            serial: data.serial,
            date: data.appointment_date,
            shift: data.shift_id,
        });
    };
    const tabChanged = (tabName)=>{
        setActiveTab(tabName);
    };
    const popupNewWindow = ({url, title, w, h}) => {
        // Fixes dual-screen position                             Most browsers      Firefox
        const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft
        const top = (height - h) / 2 / systemZoom + dualScreenTop
        const newWindow = window.open(url, title,
            `
              scrollbars=yes,
              width=${w / systemZoom}, 
              height=${h / systemZoom}, 
              top=${top}, 
              left=${left}
      `
        );

        if (window.focus) newWindow.focus();
    };
    const scheduleComplete = () =>{
        if(confirm("Are you sure?")){

            setCompleteActionLoading(true);
            doctorServer.put('/doctor/appointment-schedules/'+id+'/toggle-status',{
                status: 2
            }).then(res=>{
                data.status = 2;
                setCompleteActionLoading(false);
                alert("This schedules is completed.")
            }).catch(()=>{

            })

        }
    };
    return(
        <div className={"container"}>
            <h3 className={"text-center mt-5 "}>Appointment Details</h3>
            <div className={"row mt-5 "  + style.singlePatientAppointment}  >
                <div className={"col-md-6"}>
                    <h5 className={style.wkDoctorName}> {data.user.name}</h5>
                    <p className={style.singleAppointmentText}>Appointment Type: {data.appointment_title}</p>
                    <p className={style.singleAppointmentText}><span className={style.wkboldText}>Shift:</span>  <span className={style.singleAppointmentShiftText}>{data.shift_name}</span></p>
                    <p className={style.singleAppointmentText}><span className={style.wkboldText}> Date:</span>  { Date2Human(new Date(data.appointment_date)) }</p>
                    <p className={style.singleAppointmentText}><span className={style.wkboldText}> Time:</span>  { TimeTo12(data.time) }</p>
                    <p className={style.singleAppointmentText}><span className={style.wkboldText}> Serial:</span>  { parseInt(data.serial) + 1 }</p>
                    <p className={style.singleAppointmentText}><span className={style.wkboldText}> Appointment Status: </span> { status_label[data.status] }</p>
                    <p>
                        <span className={style.singleAppointmentText}><span className={style.wkboldText}> Payment :</span> { data.fee } Taka</span>
                        <span className={style.singleAppointmentPaymentStatusText}>{payment_status_label[data.payment_status]}</span>
                    </p>
                </div>
                <div className={"col-md-6"}>
                    {
                        data.status == 1 && <SinglePatientAppointmentActions
                            isActive={isActive}
                            serialActive={serialActive}
                            scheduleComplete={scheduleComplete}
                            completeActionLoading={completeActionLoading}
                            callToUser={callToUser}
                        />
                    }
                </div>
            </div>
            <SingleAppointmentTabSection serial={data.serial} doctor_serial={doctorSerial}  tabChanged={tabChanged}/>
            { activeTab === 'time' && <SingleAppointmentTimeTabSection callingHistory={callingHistory}/> }
            { activeTab === 'prescription' &&  <SingleAppointmentPrescriptionTabSection/> }
        </div>
    )
}