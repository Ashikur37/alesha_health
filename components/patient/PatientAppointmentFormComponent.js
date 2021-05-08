import {Container,Button, Row, Col, Form} from 'react-bootstrap';
import style from './PatientAppointmentFormComponent.module.css';
import React from "react";


function PatientAppointmentFormComponent() {
    return(
        <div>
               <div className="my-4 mx-3">
                   <Form>
                       <Form.Row>
                           <Form.Group as={Col} controlId="AppointmentName">
                               <Form.Control type="text" placeholder="নাম"  className={"wk-select-input "}/>
                           </Form.Group>

                           <Form.Group as={Col} controlId="AppointmentMobile">
                               <Form.Control type="text" placeholder="মোবাইল" className={"wk-select-input "} />
                           </Form.Group>
                       </Form.Row>

                       {/*<Form.Row>*/}

                       {/*    <Form.Group as={Col} md={6} controlId="formGridState">*/}
                       {/*        <Form.Control as="select" value="মেডিকেল হিস্ট্রি" className={style.wkSelection}>*/}
                       {/*            <option>মেডিকেল হিস্ট্রি</option>*/}
                       {/*            <option>...</option>*/}
                       {/*        </Form.Control>*/}
                       {/*    </Form.Group>*/}

                       <Button className={"wk-general-button " + style.wkAppointmentConfirmButton} type="submit">
                           কনফার্ম করুন
                       </Button>
                   </Form>
               </div>
       </div>);

}

export default PatientAppointmentFormComponent;