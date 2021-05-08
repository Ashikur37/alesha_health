import DoctorAuth from "../../../middleware/DoctorAuth";
import AppointmentDescriptionList from "../../../components/Doctor/Appointment/AppoinmentDescriptionList";
import AppointmentMenuTabContent from "../../../components/Doctor/Appointment/AppointmentMenuTabContent";
import AppointmentsSettingComponent from "../../../components/Doctor/Appointment/AppointmentsSettingComponent";
import {useRef, useState} from "react";
const index =  function (props) {
    //state
    const [edit,setEdit] = useState(false);

    //ref
    const appointmentDescRef = useRef();

    const sent = (data)=>{
        appointmentDescRef.current.changed(data);
    };
    return (
        <>
            <AppointmentMenuTabContent page={'AppointmentSetting'}/>
            <AppointmentsSettingComponent  edit={edit} setEdit={(id)=>setEdit(id)} sent={sent}/>
            <AppointmentDescriptionList setEdit={(id)=>setEdit(id)} edit={edit}  generateRef={appointmentDescRef}/>
        </>

    )
};
export default DoctorAuth(index);