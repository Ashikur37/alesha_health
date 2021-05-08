import {useContext, useEffect, useRef, useState} from "react";
import {Form, Button, Col, Row, InputGroup, FormControl} from 'react-bootstrap'
import style from "./Appointments.module.css";
import Msg from "../../Msg";
import Date2String from "../../../functions/Date2String";
import userServer from "../../../userServer";
import doctorServer from "../../../doctorServer";
import Date2Human from "../../../functions/Date2Human";
import AppointmentsPlaceholders from "../../patient/persional/AppointmentsPlaceholders";
import Appointment from "./Appointment";
import AppointmentFilter from "./AppointmentFilter";
import axios from 'axios'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
let cancel;

export default function (){
    let isMounted = true;

    // ref
    const msgRef = useRef();


    //state
    const [filterDate, setFilterDate] = useState(Date2String());
    const [appointmentsAll, setAppointmentsAll] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [appointmentTypes, setAppointmentTypes] = useState([]);
    const [filter, setFilter] = useState({status: 1, type: "", shift: "",})

    useEffect(()=>{
        dataLoad();
        return () =>{
            isMounted =  false;
        }
    },[filterDate]);




    // data load
    const dataLoad = ()=>{
        setAppointmentsAll(false);
        setAppointments([]);
        const params = { date: filterDate };
        if(shifts.length===0){
            params.first_call = 'yes'
        }
        //source.cancel("Operation canceled by the user.");
        cancel && cancel();
        doctorServer.get('/doctor/schedules-list',{
            params,
            cancelToken: new CancelToken((c)=>{
                cancel = c
            })
        }).then((res)=>{
            if(res.data.shifts){
                setShifts(res.data.shifts);
                setAppointmentTypes(res.data.appointment_types);
            }
            setAppointmentsAll(res.data.schedules);
            filterDataUpdate();
            //setAppointments(res.data.schedules);
        }).catch(error => {
            //console.log('error',error);
        });
    };

    //on change appointment date
    const onChangeDate = (e)=>{
        const value = e.target.value;
        setFilterDate(value);
    };
    const filterDataUpdate = (data)=>{
        if(!data){
            data = filter;
        }
        let filterList = [];
        if(appointmentsAll !== false){
            filterList = appointmentsAll.filter(appointment=>{
                let returnStatus = true;
                if(data.status && appointment.status != data.status){
                    returnStatus = false;
                }
                if(data.type && appointment.appointment_type_id != data.type){
                    returnStatus = false;
                }
                if(data.shift && appointment.shift_id != data.shift){
                    returnStatus = false;
                }
                return returnStatus;
            });
        }
        setAppointments(filterList);
    }
    const filterChanged = (data)=>{
        setFilter(data);
        filterDataUpdate(data);

    }
    return (
        <div>
            <div className="container my-3">
                <Row>
                    <Col md={3}>
                        <p className={'float-right mt-2 '+style.wkPATakeText}>Appointments Filter Date:</p>
                    </Col>
                    <Col>
                        <Form.Control className={"wk-select-input "} type="date" value={ filterDate }  id="example-date-input"  onChange={onChangeDate} name='appointmentDate'>
                        </Form.Control>
                    </Col>
                </Row>
                <Msg generateRef={msgRef} />
                <div className={style.wkFeeSettingTableHeading}>
                    <Row>
                        <Col>Appointments Date: { Date2Human(new Date(filterDate)) }</Col>
                    </Row>
                </div>
                <Row className="mt-2">
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        { !appointmentsAll && <AppointmentsPlaceholders /> }
                        { appointmentsAll && <AppointmentFilter appointmentTypes={appointmentTypes} filterChanged={filterChanged} shifts={shifts} /> }
                        { appointments.map((appointment,index)=><Appointment key={'appointment_'+appointment.id} index={index} appointment={appointment} />)}
                    </Col>
                    <Col lg={1}></Col>
                </Row>


            </div>

        </div>
    );
}