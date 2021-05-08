import {Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';
import style from './Appointments.module.css';
import AppointmentsPlaceholders from "./AppointmentsPlaceholders";
import Appointment from "./Appointment";
import { useState, useEffect } from "react";
import userServer from "../../../userServer";

function Appointments() {
    const [appointmentsAll,setAppointmentsAll] = useState(false);
    const [appointments,setAppointments] = useState(false);
    useEffect(()=>{
        loadSchedules();
    },[]);
    const loadSchedules = ()=>{
        userServer.get('/doctor-schedules/list').then((res)=>{
            setAppointmentsAll(res.data.doctor_schedules);
            setAppointments(res.data.doctor_schedules);
        })
    };
    const filterChange = (e)=>{
        const value = parseInt(e.target.value);
        let appointmentsList = appointmentsAll;
        if(value>=0){
            appointmentsList = appointmentsAll.filter(appointment=>appointment.status === value);
        }
        setAppointments(appointmentsList);
    };
    return (
        <div>
            <div className="container">
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div className={style.wkTileAppointentList}>
                            <h2 className="my-5">Appointment List</h2>
                        </div>

                        { !appointments && <AppointmentsPlaceholders /> }
                        <Row>
                            <Col md={6}>
                                {
                                    appointments && (
                                        <select onChange={filterChange} className={style.wkSelectInput}>
                                            <option value="" className={style.wkOption}>&nbsp; All</option>
                                            <option value="1">&nbsp; Pending</option>
                                            <option value="2">&nbsp; Completed</option>
                                            <option value="0">&nbsp; Canceled</option>
                                        </select>
                                    )
                                }
                            </Col>
                            <Col md={6}>
                                <div className={style.wkAppSrarc}>
                                    <Form inline className={style.wkSearchFormArea}>
                                        <InputGroup>
                                            <InputGroup.Prepend className={"wk-select-input "}>
                                                <InputGroup.Text id="basic-addon1" className={"wk-select-input " + style.wkSearchIconArea}>
                                                    <span className="material-icons wk-material-icon">search</span>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="Doctor Name"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                className={"wk-select-input"}
                                                style={{borderRadiusRight:"4pt"}}
                                            />
                                        </InputGroup>
                                    </Form>
                                </div>
                            </Col>
                        </Row>

                        { appointments && appointments.map((appointment,index)=><Appointment key={'appointment_'+appointment.id} index={index} appointment={appointment} />)}
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div>
        </div>
    );
}

export default Appointments;