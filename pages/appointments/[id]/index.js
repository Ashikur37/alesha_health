import SinglePatientAppointment from "../../../components/SinglePatientAppointment/SinglePatientAppointment";
import UserAuth from "../../../middleware/UserAuth";
import {useEffect, useState} from "react";
import userServer from "../../../userServer";
import {useRouter} from "next/router";
import SinglePatientAppointmentPlaceholder
    from "../../../components/SinglePatientAppointment/SinglePatientAppointmentPlaceholder";
import Head from "next/head";


const index =  function () {
    const router = useRouter();
    const {id} = router.query;
    const [data,setData] = useState(false);
    const [ doctorSerial, setDoctorSerial ] = useState(false);
    const [ callingHistory, setCallingHistory ] = useState([]);
    //const [ data, setData ] = useState({"appointment_type_id":1,"shift_id":1,"id":27,"doctor_id":1,"appointment_id":1,"appointment_schedule_id":4,"user_id":1,"appointment_date":"2020-05-15","time":"20:12:00","serial":20,"schedule_type":1,"fee":380,"fee_type":1,"payment_status":0,"status":1,"created_at":"2020-05-10 13:05:27","updated_at":"2020-05-10 13:05:27","deleted_at":null,"doctor":{"id":2,image: "1.jpg","name":"বাঁধন আহমেদ","short_info":"ই-স্বাস্থ্য একটি হেলথ মেম্বারশীপ প্যাকেজ, যার মাধ্যমে আপনি বিশেষজ্ঞ ডাক্তারের অ্যাপয়েন্টমেন্ট, ঘরে বসে প্যাথলজিকাল টেস্টের স্যাম্পল কালেকশন ও রিপোর্ট ডেলিভারি"},"shift_name":"সকাল","appointment_title":"অনলাইন কনসালটেন্সি"});
    //const [ doctorSerial, setDoctorSerial ] = useState(20);
    useEffect(()=>{
        dataLoad();
    },[]);
    const dataLoad = ()=>{
        userServer.get('/doctor-schedules/'+id).then(res=>{
            const serial = res.data.doctor_serial?res.data.doctor_serial.serial:false;
            setDoctorSerial(serial);
            setData(res.data.schedule);
            setCallingHistory(res.data.calling_history);
            //console.log('res',res.data)
        })
    };
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            {!data && <SinglePatientAppointmentPlaceholder/>}
            {data &&  <SinglePatientAppointment data={data} doctorSerial={doctorSerial} callingHistory={callingHistory} /> }
        </div>

    )
};
export default UserAuth(index);