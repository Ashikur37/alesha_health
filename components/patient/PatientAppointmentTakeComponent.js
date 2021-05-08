import {Container, Button, Form, Row, Col} from 'react-bootstrap';
import style from './PatientAppointmentTakeComponent.module.css';
import {useEffect, useState} from "react";
import get from "../../functions/get";
import Date2String from "../../functions/Date2String";

const pickDate= new Date();
function PatientAppointmentTakeComponent({ appointmentsTypes, setAppointmentType, setAppointmentDate }) {
    let isMounted = true;

    //state
    //const [formState, setFormState] = useState({appointmentsType:'', appointmentDate:'',});

    //on change appointment type
    const onChangeType = (e)=>{
        const value = e.target.value;
        setAppointmentType(value);

    };
    //on change appointment date
    const onChangeDate = (e)=>{
        const value = e.target.value;
        setAppointmentDate(value);
    };


    return(
        <div>
           <Container className="text-left my-4">
               <Form>
                   <Row>
                       <Col md={3}>
                          <p className={style.wkPATakeText}>অ্যাপয়েন্টমেন্ট নিতে ক্লিক করুন :</p>
                       </Col>
                       {/*<Col>*/}
                       {/*    <Form.Control as="select" className={"wk-select-input "} onChange={onChangeType} name='appointmentsType'>*/}
                       {/*        <option value="">{appointmentsTypes.length?'এপয়েন্টমেন্ট এর ধরন':'লোড হচ্ছে ......'}</option>*/}
                       {/*        {*/}
                       {/*            appointmentsTypes.map(ele=>   <option key={'appointment_type_'+ele.id} value={ele.id}>{ele.title}</option>)*/}
                       {/*        }*/}
                       {/*    </Form.Control>*/}
                       {/*</Col>*/}
                       <Col>
                           <Form.Control className={"wk-select-input "} type="date" defaultValue={Date2String()} min={Date2String()} id="example-date-input"  onChange={onChangeDate} name='appointmentDate'>
                           </Form.Control>
                       </Col>
                   </Row>
               </Form>
           </Container>
       </div>);

}

export default PatientAppointmentTakeComponent;