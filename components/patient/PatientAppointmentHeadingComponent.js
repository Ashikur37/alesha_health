import {Container,Button} from 'react-bootstrap';
import style from './PatientAppointmentHeadingComponent.module.css';
import React from "react";
import SearchedDoctor from "../Doctors/SearchedDoctor";


function PatientAppointmentHeadingComponent() {
    return(
        <div>
           <Container className="text-center my-4">
               {/*<div className="mb-5" align="center">*/}
               {/*    <h2 className="mb-4">ডাক্তার - নার্স খুঁজুন</h2>*/}
               {/*    <a className={style.searchDoctorHeaderSpan} href="/">*/}
               {/*        <span className={"material-icons " + style.headerMaterialIcon}>play_arrow</span>*/}
               {/*        <span className={"btn " + style.searchedDoctorAnchorTag }>যেভাবে এপয়েন্টমেন্ট নিবেন</span>*/}
               {/*    </a>*/}
               {/*</div>*/}
               <SearchedDoctor/>
           </Container>
       </div>);

}

export default PatientAppointmentHeadingComponent;