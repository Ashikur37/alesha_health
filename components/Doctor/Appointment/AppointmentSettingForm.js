import {Form, Button, Col} from 'react-bootstrap'
import style from './AppointmentSettingForm.module.css'
import {useEffect, useRef, useState} from "react";
import get from "../../../functions/get";
import doctorServer from "../../../doctorServer";
import fee_types from "../../../enum/fee_types";
import commonValidations from "../../../validations/commonValidations";
import ErrorHandler from "../../../functions/ErrorHandler";
import Msg from "../../Msg";
import Spinner from "../../UI/Spinner/Spinner";

export default function ({edit, setEdit, sent}) {
    let isMounted = true;
    //default State for
    const defaultState = {
        order:'1',
        appointment_type_id:'',
        hospital_id:'',
        fee_type:1,
        new_fee:'',
        old_fee:'',
        discount_for_new:'',
        discount_for_old:'',
    };

    //state
    const [appointmentsTypes, setAppointmentsTypes] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [formState,setFormState] = useState(defaultState);
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);
    const [editDataLoading,setEditDataLoading] =useState(false);

    //use effect for component did mount
    useEffect(()=>{
        getAppointmentTypes();
        getHospitals();
        return () =>{
            isMounted =  false;
        }
    },[]);

    //use effect for edit change
    useEffect(()=>{
        if(edit!==false){
            getAppointment();
        }else{
            setEditDataLoading(false);
        }
    },[edit]);
    const getAppointmentTypes  = ()=>{
        get({url:'appointment-types'}, (res)=> {isMounted && setAppointmentsTypes(res.data.appointment_types)});
    };
    const getHospitals  = ()=>{
        get({axios:doctorServer, url:'/doctor/hospitals', params :{_lang:'en',select:['hospitals.id','hospital_langs.name']}}, (res)=> {isMounted && setHospitals(res.data.doctor_hospitals)});
    };

    //ref
    const msgRef = useRef();


    //on change input
    const getAppointment = ()=>{
        setEditDataLoading(true);
        doctorServer.get('/doctor/appointments/'+edit+'/edit').then((res)=>{
            if(isMounted){
                setFormState(res.data.appointment);
                setEditDataLoading(false);
            }
        }).catch((err)=>{

        });
    };
    //on change input
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return  {...prev,[field]:value};
        })
    };

    const cancelEdit = ()=>{
        setEdit(false);
        setFormState(defaultState);
    };

    // submit
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            'order':'required',
            'appointment_type_id':'required',
            'hospital_id':'required',
            'fee_type':'required',
            'new_fee':'required',
            'old_fee':'required',

        });

        if(isValid){
            msgRef.current.hide();
            let server;
            const formStateData = {...formState};
            if(!formStateData.discount_for_new){
                formStateData.discount_for_new = 0;
            }
            if(!formStateData.discount_for_old){
                formStateData.discount_for_old = 0;
            }
            if(edit){
                server = doctorServer.put('/doctor/appointments/'+edit,formStateData);
            }else{
                server = doctorServer.post('/doctor/appointments',formStateData);
            }
            return server.then((res)=>{
                if(isMounted){
                    const data = {...formStateData};
                    if(res.data.status){
                        msgRef.current.show({type:'success', text:res.data.message});
                        setFormState(defaultState);
                        data.hospital_name = hospitals.find(ele=>ele.id == data.hospital_id).name;
                        data.appointment_type_title = appointmentsTypes.find(ele=>ele.id == data.appointment_type_id).title;
                        if(edit){
                            data.edit = true;
                            setEdit(false);
                        }else{
                            data.id = res.data.id;
                        }
                        sent(data);
                    }
                    setFormSubmitting(false);
                }
            }).catch((err)=>{
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
    const form = (
        <Form onSubmit={onSubmitHandler}>
            <Form.Row>
                <Form.Group as={Col}  controlId="AppointmentFeeSettingForm">
                    <Form.Label>Appointment Type</Form.Label>
                    <Form.Control
                        as="select"
                        className="wk-select-input"

                        value={formState.appointment_type_id}
                        onChange={onChangeInput}
                        name='appointment_type_id'
                        isInvalid={ !!errors.appointment_type_id }
                    >
                        <option value="">{appointmentsTypes.length?'Select Appointment Type':'Loading......'}</option>
                        {
                            appointmentsTypes.map(ele=>   <option key={'appointment_type_'+ele.id} value={ele.id}>{ele.title}</option>)
                        }
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>{errors.appointment_type_id }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="appointment_place">
                    <Form.Label>Chamber/Hospital  </Form.Label>
                    <Form.Control
                        as="select"
                        className="wk-select-input"
                        value={formState.hospital_id}
                        onChange={onChangeInput}
                        name='hospital_id'
                        isInvalid={ !!errors.hospital_id }
                    >
                        <option value="">{hospitals.length?'Select Chamber/Hospital':'Loading......'}</option>
                        {
                            hospitals.map(ele=>   <option key={'hospital_'+ele.id} value={ele.id}>{ele.name}</option>)
                        }
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>{errors.hospital_id }</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="fee_type">
                    <Form.Label>Fee Type</Form.Label>
                    <Form.Control
                        as="select"
                        className="wk-select-input"
                        value={formState.fee_type}
                        onChange={onChangeInput}
                        name='fee_type'
                        isInvalid={ !!errors.fee_type }
                    >
                        {
                            Object.keys(fee_types).map(ele=> <option value={ele} key={'fee_type_'+ele}>{fee_types[ele]} </option>)
                        }
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>{errors.fee_type }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="new_patient">
                    <Form.Label>New Patient Fee</Form.Label>
                    <Form.Control
                        className="wk-select-input"
                        value={formState.new_fee}
                        onChange={onChangeInput}
                        name='new_fee'
                        isInvalid={ !!errors.new_fee }
                    />
                    <Form.Control.Feedback type='invalid'>{errors.new_fee }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="old_patient">
                    <Form.Label>Old Patient Fee</Form.Label>
                    <Form.Control
                        className="wk-select-input"
                        value={formState.old_fee}
                        onChange={onChangeInput}
                        name='old_fee'
                        isInvalid={ !!errors.old_fee }
                    />
                    <Form.Control.Feedback type='invalid'>{errors.old_fee }</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="AppointmentFeeSettingForm">
                    <Form.Label>New Patient Discount</Form.Label>
                    <Form.Control
                        className="wk-select-input"
                        value={formState.discount_for_new}
                        onChange={onChangeInput}
                        name='discount_for_new'
                        isInvalid={ !!errors.discount_for_new }
                    />
                    <Form.Control.Feedback type='invalid'>{errors.discount_for_new }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="appointment_place">
                    <Form.Label>Old Patient Discount</Form.Label>
                    <Form.Control
                        className="wk-select-input"
                        value={formState.discount_for_old}
                        onChange={onChangeInput}
                        name='discount_for_old'
                        isInvalid={ !!errors.discount_for_old }
                    />
                    <Form.Control.Feedback type='invalid'>{errors.discount_for_old }</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                    type="text"
                    className="wk-select-input"
                    placeholder='Order No'
                    value={formState.order}
                    onChange={onChangeInput}
                    name='order'
                    isInvalid={!!errors.order}
                />
                <Form.Control.Feedback type='invalid'>{errors.order}</Form.Control.Feedback>
            </Form.Group>
            <div className="text-right">
                <Button variant="primary" disabled={formSubmitting} className="wk-general-button" type="submit">
                    {edit?'Update':'Save'}
                </Button>
                {
                    edit &&
                    (
                        <Button variant="primary" disabled={formSubmitting} onClick={cancelEdit} className="wk-general-button" type="submit">
                            Cancel
                        </Button>
                    )
                }

            </div>
        </Form>
    );
    return (
        <div className="container my-3">
            <div className={style.wkAppointmentFeeFrom}>

                <Msg generateRef={msgRef} />
                {editDataLoading && <Spinner />}
                {!editDataLoading && form}
            </div>
        </div>
    );

}