import DoctorAuth from "../../middleware/DoctorAuth";

import {useContext, useRef, useState} from 'react';
import {GlobalContext} from "../../context/GlobalContext";
import ServicesButton from "../../components/Doctor/Services/ServicesButton";
import ServicesFormComponent from "../../components/Doctor/Services/ServicesFormComponent";
import ServicesDescriptionComponent from "../../components/Doctor/Services/ServicesDescriptionComponent";
const services =  function (props) {
    //state
    const [edit,setEdit] = useState(false);

    //ref
    const descRef = useRef();

    const sent = (data)=>{
        descRef.current.changed(data);
    };
    return (
        <>
            <ServicesFormComponent edit={edit} setEdit={(id)=>setEdit(id)}  sent={sent} />
            <ServicesDescriptionComponent setEdit={(id)=>setEdit(id)} edit={edit} generateRef={descRef}/>
        </>

    )
};
export default DoctorAuth(services);