import {Container, Button, Row, Col, Form, ButtonGroup, Dropdown} from 'react-bootstrap';
import style from './PatientAppointmentFilteringComponent.module.css';
import React from "react";


function PatientAppointmentFilteringComponent() {
    return(
           <Container>
               <div className={style.searchDoctorForm}>
                   <Form>
                       <Row className="no-gutters">
                           <Form.Group as={Col} md={6} controlId="formGridCity" >
                               <Form.Control as="select" className="wk-select-input">
                                   <option>ডিপার্টমেন্ট</option>
                                   <option>ডিপার্টমেন্ট</option>
                               </Form.Control>
                           </Form.Group>
                           <Form.Group as={Col} md={5} controlId="formGridState">
                               <Form.Control as="select" className="wk-select-input">
                                   <option>ডাক্তারের / নার্স নাম</option>
                                   <option>রীমন</option>
                               </Form.Control>
                           </Form.Group>
                           <Form.Group as={Col} md={1} controlId="formGridState">
                               <Button variant="primary" className={'wk-general-button mb-2 '+ style.searchSubmitBtn}>সার্চ করুন</Button>
                           </Form.Group>
                       </Row>
                   </Form>
               </div>
           </Container>
    );

}

export default PatientAppointmentFilteringComponent;