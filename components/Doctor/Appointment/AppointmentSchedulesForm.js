import {Button, Col, Form, Row} from "react-bootstrap";
import style from "./AppointmentSchedulesTabContent.module.css";
import React, {useContext, useEffect, useRef, useState} from "react";
import days from "../../../enum/days";
import commonValidations from "../../../validations/commonValidations";
import doctorServer from "../../../doctorServer";
import ErrorHandler from "../../../functions/ErrorHandler";
import Msg from "../../Msg";
import {DoctorSchedulesContext} from "../../../context/DoctorSchedulesContext";

export default function AppointmentSchedulesForm({shifts,appointment_id, edit, setEdit, msgRef}){
    let isMounted = true;

    const {scheduleState, setScheduleState} = useContext(DoctorSchedulesContext);
    //default State for
    const defaultState = {
        appointment_id,
        day:1,
        shift_id:'',
        start_time:'',
        end_time:'',
        max_patient_can_see:"",
    };

    const [formState,setFormState] = useState(defaultState);
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);
    const [editDataLoading,setEditDataLoading] =useState(false);


    //use effect for edit change
    useEffect(()=>{
        if(edit!==false){
            const schedules = scheduleState.schedules.find(ele=>ele.id === edit);
            setFormState({
                appointment_id:schedules.appointment_id,
                day:schedules.day,
                shift_id:schedules.shift_id,
                start_time:schedules.start_time,
                end_time:schedules.end_time,
                max_patient_can_see:schedules.max_patient_can_see,
            });
        }
    },[edit]);


    //on change input
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return  {...prev,[field]:value};
        })
    };
    const updatedSchedules = (id,data)=>{
        const findShift = shifts.find(ele=>ele.id == data.shift_id);
        data.shift = findShift.shift;
        setScheduleState(prev=>{
            return {...prev,schedules:prev.schedules.map(ele=>{
                if(ele.id === id){
                    return {...ele,...data};
                }
                return ele;
            })}
        })
    };

    const storedSchedules = (data)=>{
        const findShift = shifts.find(ele=>ele.id == data.shift_id);
        data.shift = findShift.shift;
        setScheduleState(prev=>{
            return {...prev,schedules:[...prev.schedules,data]}
        })
    };



    // submit
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            'day':'required',
            'shift_id':'required',
            'start_time':'required',
            'end_time':'required',
            'max_patient_can_see':'required',

        });

        if(isValid){
            msgRef.current.hide();
            let server;
            const formStateData = {...formState};
            const id = edit;
            if(id){
                server = doctorServer.put('/doctor/appointment-schedules/'+id,formStateData);
            }else{
                server = doctorServer.post('/doctor/appointment-schedules',formStateData);
            }
            return server.then((res)=>{
                if(isMounted){
                    const data = {...formStateData};
                    if(res.data.status){
                        msgRef.current.show({type:'success', text:res.data.message});
                        setFormState(defaultState);
                        if(id){
                            data.edit = true;
                            setEdit(false);
                            updatedSchedules(id,data);
                        }else{
                            data.id = res.data.id;
                            storedSchedules(data);
                        }
                    }
                    setFormSubmitting(false);
                }
            }).catch((err)=>{
                console.log('err',err);
                if(isMounted){
                    setFormSubmitting(false);
                    ErrorHandler({
                        err,setErrors,msgRef
                    })
                }
            });
        }else{
            setErrors({...errors});
            setFormSubmitting(false);
        }
    };
    const cancelEdit = ()=>{
        setEdit(false);
        setFormState(defaultState);
    };
    return(
        <>
            <Form onSubmit={onSubmitHandler}>
                <Row>
                    <Col md={6}>
                        <Form.Group  controlId="day">
                            <Form.Control
                                as="select"
                                className={style.wkSelection}
                                value={formState.day}
                                onChange={onChangeInput}
                                name='day'
                                isInvalid={ !!errors.day }
                            >
                                {
                                    days.map((ele,index)=> <option value={index} key={'day_'+index}>{ele} </option>)
                                }
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>{errors.day }</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control
                                as="select"
                                className={style.wkSelection}
                                value={formState.shift_id}
                                onChange={onChangeInput}
                                name='shift_id'
                                isInvalid={ !!errors.shift_id }
                            >
                                <option value="">{shifts!==false?'Select Shift':'Loading......'}</option>
                                {
                                    shifts && shifts.map(ele=>   <option key={'shift_'+ele.id} value={ele.id}>{ele.shift}</option>)
                                }
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>{errors.shift_id }</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control
                                placeholder="Time(From)"
                                type="time"
                                className={style.wkSelection}
                                onChange={onChangeInput}
                                value={formState.start_time}
                                name='start_time'
                                isInvalid={ !!errors.start_time }
                            />
                            <Form.Control.Feedback type='invalid'>{errors.start_time }</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control
                                placeholder="Time(To)"
                                type="time"
                                className={style.wkSelection}
                                onChange={onChangeInput}
                                value={formState.end_time}
                                name='end_time'
                                isInvalid={ !!errors.end_time }
                            />
                            <Form.Control.Feedback type='invalid'>{errors.end_time }</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control
                                placeholder="Number of Appointment"
                                className={style.wkSelection}
                                onChange={onChangeInput}
                                value={formState.max_patient_can_see}
                                name='max_patient_can_see'
                                isInvalid={ !!errors.max_patient_can_see }
                            />
                            <Form.Control.Feedback type='invalid'>{errors.max_patient_can_see }</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='ml-auto'>
                        <Button variant="primary" disabled={formSubmitting}  className={['px-4 float-right',style.btn, style.wkSubmitAppointment]} type="submit">
                            {edit?'Update':'Save'}
                        </Button>
                        {
                            edit && (
                                <Button variant="primary" disabled={formSubmitting} onClick={cancelEdit} className={['px-4 mr-2  float-right',style.btn, style.wkSubmitAppointment]} type="button">
                                    Cancel
                                </Button>
                            )
                        }
                        {/*<Form.Group>
                            <Form.Control type="submit" disabled={formSubmitting} value="Submit" className={[style.btn, style.wkSubmitAppointment]}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="submit" disabled={formSubmitting} value="Submit" className={[style.btn, style.wkSubmitAppointment]}/>
                        </Form.Group>*/}
                    </Col>
                </Row>
            </Form>
        </>
    )
}