import React, {useEffect, useState} from "react";
import style from './SinglePatientAppointment.module.css'
import SingleAppointmentTabSection from "./SingleAppointmentTabSection";
import SingleAppointmentTimeTabSection from "./SingleAppointmentTimeTabSection";
import SingleAppointmentPrescriptionTabSection from "./SingleAppointmentPrescriptionTabSection";
import SingleAppointmentPaymentTabSection from "./SingleAppointmentPaymentTabSection";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import io from "socket.io-client";
import {Button, Modal} from "react-bootstrap";
import window from "global";
import TimeTo12 from "../../functions/TimeTo12";
import Date2Human from "../../functions/Date2Human";
const _jwtToken = Cookies.get('_jwtToken');
const socket = io(process.env.REALTIME_SERVER_URL +'/user?jwtToken='+_jwtToken);
export default function ({ data, doctorSerial, callingHistory }) {
    const router = useRouter();
    const {id} = router.query;
    const { RTCPeerConnection, RTCSessionDescription } = window;

    const [isActive, setIsActive] = useState(false);
    const [isCalling, setIsCalling] = useState(false);
    const [callingInfo, setCallingInfo] = useState({});
    const status_label = ['Cancelled', 'Pending', 'Completed'];
    const payment_status_label = ['Unpaid', 'Partially Paid', 'Full Paid'];
    const [activeTab, setActiveTab] = useState('time');
    const [doctorCurrentSerial, setDoctorCurrentSerial] = useState(doctorSerial);
    useEffect(()=>{
        socket.emit('join',{
            schedule_id: id,
            doctor_id: data.doctor_id
        });
        if(data.serial == doctorSerial){
            setIsActive(true);
        }
        socket.on("serial-update", async data => {
            updateSerialActive(data);
        });
        socket.on("serial-active", async data => {
        });
        socket.on("call-offer", async data => {
            console.log('call-offer',data);
            setIsCalling(true);
            setCallingInfo({
                id: data.socket_id,
                call_id: data.call_id,
                call_type: data.call_type,
            });
        });
        socket.on("call-canceled", data => {
            setIsCalling(false);
            setCallingInfo({});
        });
        socket.on("call-received", data => {
            setIsCalling(false);
            setCallingInfo({});
        });
    },[]);
    const updateSerialActive =  (data)=>{
        doctorSerial = data.serial;
        setDoctorCurrentSerial(data.serial)
    };
    const confirmCall = ()=>{
        setIsCalling(false);
        const callingInfoData = {...callingInfo};
        console.log('callingInfoData',callingInfoData);
        socket.emit("call-received",{
            schedule_id : id
        });
        const caller_id = callingInfoData.id.split('#')[1];
        const call_id = callingInfoData.call_id;
        const call_type = callingInfoData.call_type;
        const url = process.env.URL+'/appointments/'+id+'/call?type=callee&caller_id='+caller_id+'&call_id='+call_id+'&call_type='+call_type;
        window.open(url);
        setCallingInfo({});
        //popupNewWindow({url: 'http://localhost:3000/appointments/'+id+'/call?type=callee&caller_id='+caller_id+'&call_id='+call_id, title: 'xtf', w: 900, h: 500});
    };
    const popupNewWindow = ({url, title, w, h}) => {
        // Fixes dual-screen position                             Most browsers      Firefox
        const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft;
        const top = (height - h) / 2 / systemZoom + dualScreenTop;
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


    const callCancel = () => {
        setIsCalling(false);
        socket.emit('call-cancel',{
            schedule_id : id,
            call_id: callingInfo.call_id,
            peer_id: callingInfo.id,
        });
    };
    const tabChanged = (tabName)=>{
        setActiveTab(tabName);
    };
    return(
        <>
            <Modal show={isCalling} >
                <Modal.Header>
                    <Modal.Title>Calling...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={process.env.SERVER_URL+'/public/doctors/profile_pic/'+data.doctor.image}
                        alt="Doctor Image"
                        className="rounded-circle"
                        style={{width:"50px", height: "50px", padding:"10px"}}/>
                    "{data.doctor.name}" Calling to you.
                </Modal.Body>
                <Modal.Footer>
                    <Button className="wk-general-button" variant="primary" onClick={confirmCall}>Receive</Button>
                    <Button className="wk-danger-button" onClick={callCancel}>Cancel</Button>
                </Modal.Footer>
            </Modal>
            <div className={"container"}>
                <h3 className={"text-center mt-5 "}>ডাক্তারের সাথে কথা বলুন</h3>
                <div className={"row mt-5 "  + style.singlePatientAppointment}  >
                    <div className={"col-md-6"}>
                        <h5 className={style.wkDoctorName}> {data.doctor.name}</h5>
                        <p className={style.singleAppointmentText}> {data.doctor.short_info}</p>
                        <p className={style.singleAppointmentText}>এপয়েন্টমেন্টর ধরণ: {data.appointment_title}</p>
                        <p className={style.singleAppointmentText}><span className={style.wkboldText}>শিফট:</span>  <span className={style.singleAppointmentShiftText}>{data.shift_name}</span></p>
                        <p className={style.singleAppointmentText}><span className={style.wkboldText}> তারিখ:</span>  { Date2Human(new Date(data.appointment_date)) }</p>
                        <p className={style.singleAppointmentText}><span className={style.wkboldText}> সময়:</span>  { TimeTo12(data.time) }</p>
                        <p className={style.singleAppointmentText}><span className={style.wkboldText}> এপয়েন্টমেন্ট স্টেটাস: </span> { status_label[data.status] }</p>
                        <p>
                            <span className={style.singleAppointmentText}><span className={style.wkboldText}> পেমেন্ট :</span> { data.fee } টাকা</span>
                            <span className={style.singleAppointmentPaymentStatusText}>{payment_status_label[data.payment_status]}</span>
                        </p>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"row justify-content-center " + style.singleAppointmentButtonSection}>
                            {/*<button disabled={!isActive} className={"wk-general-button disable " + style.singleAppointmentButton}>*/}
                            {/*    Start Audio / Video Call*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
                <SingleAppointmentTabSection serial={data.serial} status={data.status} doctor_serial={doctorCurrentSerial} tabChanged={tabChanged}/>
                { activeTab === 'time' && <SingleAppointmentTimeTabSection callingHistory={callingHistory}/> }
                { activeTab === 'prescription' &&  <SingleAppointmentPrescriptionTabSection payment_status={data.payment_status}/> }
                { activeTab === 'payment' && <SingleAppointmentPaymentTabSection/> }
            </div>
        </>
    )
}