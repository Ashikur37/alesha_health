import React, {useContext, useState} from "react";
import {Accordion, Card, Form, Row, Col, Button} from 'react-bootstrap';
import get from "../../../functions/get";
import doctorServer from "../../../doctorServer";
import {useEffect} from 'react';
import AppointmentSchedulesTab from "./AppointmentSchedulesTab";
import Spinner from "../../UI/Spinner/Spinner";
import {DoctorSchedulesContext} from "../../../context/DoctorSchedulesContext";
import ErrorHandler from "../../../functions/ErrorHandler";

export default function (){
    const {scheduleState, setScheduleState} = useContext(DoctorSchedulesContext);
    const [appointments, setAppointments] = useState(false);
    const [appointmentSchedules, setAppointmentSchedules] = useState(false);
    const [shifts, setShifts] = useState(false);
    let isMounted = true;

    //use effect for component did mount
    useEffect(()=>{
        getAppointments();
        getAppointmentSchedules();
        getAppointmentShift();
        return () =>{
            isMounted =  false;
        }
    },[]);


    const getAppointments  = ()=>{
        get({axios:doctorServer, url:'doctor/appointments'}, (res)=> { isMounted && setAppointments(res.data.appointments)});
    };
    const getAppointmentSchedules  = ()=>{
        get({axios:doctorServer, url:'doctor/appointment-schedules'}, (res)=> { isMounted && setScheduleState(prev=>({...prev,schedules:res.data.appointmentSchedules}))});
    };
    const getAppointmentShift  = ()=>{
        get({axios:doctorServer, url:'doctor/appointment-schedules/shifts'}, (res)=> { isMounted && setShifts(res.data.shifts)});
    };

    const appointmentStatusChanged = (id,status)=>{
        setAppointments(prev=>{
            return prev.map(ele=>{
                if(ele.id == id){
                    ele.status = status;
                }
                return ele;
            })
        })
    };
    return(
      <div>
          <div className="container">
              <Accordion defaultActiveKey="appointment_0">
                  { appointments === false && <Spinner />}
                  {appointments && appointments.length === 0 && (
                      <h3 class={'text-center'}>
                          Appointments not found.
                      </h3>
                  )}
                  { appointments && appointments.map((ele,index)=> (<AppointmentSchedulesTab appointmentStatusChanged={appointmentStatusChanged} shifts={shifts} appointmentSchedules={appointmentSchedules} data={ele} eventKey={'appointment_'+index} key={'appointment_'+index} />)) }
              </Accordion>
          </div>
      </div>
    );
}
