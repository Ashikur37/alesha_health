import DoctorAuth from "../../../../middleware/DoctorAuth";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import io from "socket.io-client";
import Head from "next/head";
import {useRouter} from "next/router";
import userServer from "../../../../userServer";
import doctorServer from "../../../../doctorServer";
import SinglePatientAppointment from "../../../../components/Doctor/AppointmentDetails/SinglePatientAppointment";
import SinglePatientAppointmentPlaceholder
    from "../../../../components/Doctor/AppointmentDetails/SinglePatientAppointmentPlaceholder";
const index =  function () {
    const router = useRouter();
    const {id} = router.query;
    const [data,setData] = useState(false);
    const [ doctorSerial, setDoctorSerial ] = useState(false);
    const [ callingHistory, setCallingHistory ] = useState([]);
    //const [data,setData] = useState({"appointment_type_id":1,"shift_id":1,"id":27,"doctor_id":1,"appointment_id":1,"appointment_schedule_id":4,"user_id":1,"appointment_date":"2020-05-15","time":"20:12:00","serial":20,"schedule_type":1,"fee":380,"fee_type":1,"payment_status":0,"status":1,"created_at":"2020-05-10 13:05:27","updated_at":"2020-05-10 13:05:27","deleted_at":null,"user":{"id":1,"name":"Nurun Nobi Shamim"},"shift_name":"Morning","appointment_title":"Online"});
    //const [ doctorSerial, setDoctorSerial ] = useState(20);
    useEffect(()=>{
        dataLoad();
    },[]);

    const dataLoad = ()=>{
        doctorServer.get('/doctor/appointment-schedules/'+id).then(res=>{
            const serial = res.data.doctor_serial?res.data.doctor_serial.serial:false;
            setDoctorSerial(serial);
            setData(res.data.schedule);
            setCallingHistory(res.data.calling_history);
            //console.log('res',res.data)
        })
    };

    // let socket;
    // useEffect(()=>{
    //     const _doctorJwtToken = Cookies.get('_doctorJwtToken')
    //     const socketConnection = io('http://localhost:3002/doctors?type=callee&jwtToken='+_doctorJwtToken);
    //     socketConnection.on('connect', function(){
    //        console.log('connected',socketConnection.id)
    //     });
    // },[]);
    // async function callUser(socketId) {
    //     socket.emit("call-user", {
    //         offer,
    //         to: socketId
    //     });
    // }
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            {!data && <SinglePatientAppointmentPlaceholder/>}
            {data &&  <SinglePatientAppointment data={data} doctorSerial={doctorSerial}  callingHistory={callingHistory}  /> }
        </div>

    )
};
export default DoctorAuth(index);