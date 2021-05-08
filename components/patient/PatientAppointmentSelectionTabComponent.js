import {Container, Row, Col, Button, Nav} from 'react-bootstrap';
import style from './PatientAppointmentSelectionTabComponent.module.css';
import React from "react";


function PatientAppointmentSelectionTabComponent() {
    return(
        <div>
           <Container>
               <Row>
                   <div className={"float-left "+style.wkSelectionButtonArea}>
                       <a href="#" className={"btn " + style.wkSelcetionButtonActive}>এপয়েন্টমেন্ট</a>
                       <a href="#" className={"btn "+style.wkSelcetionButton}>সার্ভিস সমূহ</a>
                   </div>
               </Row>
           </Container>
       </div>);

}

export default PatientAppointmentSelectionTabComponent;