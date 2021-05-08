import React, {useContext, useEffect, useState} from "react";
import {Card, Container, Carousel,Row,Col,Form, Button} from 'react-bootstrap';
import style from "../DoctorRegistration.module.css";
import {ProfileCompletionContext} from "../../../../context/ProfileCompletionContext";
import get from "../../../../functions/get";
import commonValidations from "../../../../validations/commonValidations";
import doctorServer from "../../../../doctorServer";
import ErrorHandler from "../../../../functions/ErrorHandler";


export default function({goNextStep ,  msgRef}) {
    let isMounted = true;

    // context
    const {context, setContext}=useContext(ProfileCompletionContext);

    //state
    const [formState,setFormState] = useState({
        hospital_id:'',
        department_id:'',
        room:''
    });
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);

    //use effect for edit change
    useEffect((prev)=>{
        getHospital();
        getDepartments();
        setFormState(prev=>{
            return { ...prev, ...context.workplaceInfo}
        })
        return () =>{
            isMounted =  false;
        }
    },[context.workplaceInfo]);

    const getHospital = ()=>{
        if(context.hospitals.length === 0){
            get({ url:'hospitals' }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,hospitals:res.data.hospitals}
            })});
        }
    };
    const getDepartments = ()=>{
        if(context.departments.length === 0){
            get({ url:'departments' }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,departments:res.data.departments}
            })});
        }
    };

    //on change input
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return {...prev,[field]:value}
        })
    };
    // submit
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            'room': 'required',
            'department_id': 'required',
            'hospital_id':'required',
        });
        if(isValid){
            msgRef.current.hide();
            return doctorServer.post('/doctor/profile-completion/workplace-info',formState).then((res)=>{
                if(isMounted){
                    if(res.data.status){
                        msgRef.current.show({type:'success', text:res.data.message});
                        setContext(prev=>{
                            return { ...prev,workplaceInfo:{...formState}}
                        });
                        goNextStep();
                    }else{
                        msgRef.current.show({type:'danger', text:"Failed. Please try again!"});
                    }
                }
            }).catch((err)=>{
                setFormSubmitting(false);
                ErrorHandler({
                    err,setErrors,msgRef
                })
            });
        }else{
            setErrors({...errors});
            setFormSubmitting(false);
        }
    };
    return(
        <div className={style.DoctorRegistrationPersonalForm}>
            <h3 className="pt-5 mb-5 text-center">Workplace Setup</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Your Hospital/Medical Name*</label>
                    <Form.Control
                        as="select"
                        className="browser-default wk-select-input"
                        value={formState.hospital_id}
                        onChange={onChangeInput}
                        name='hospital_id'
                        isInvalid={ !!errors.hospital_id }
                    >
                        <option value="">{context.hospitals.length?'Choose Hospital/Medical':'Loading......'}</option>
                        {
                            context.hospitals.map(ele=>   <option key={'speciality_'+ele.id} value={ele.id}>{ele.name}</option>)
                        }
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>{errors.hospital_id}</Form.Control.Feedback>
                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Department Name*</label>
                            <Form.Control
                                as="select"
                                className="browser-default wk-select-input"
                                value={formState.department_id}
                                onChange={onChangeInput}
                                name='department_id'
                                isInvalid={ !!errors.department_id }
                            >
                                <option value="">{context.departments.length?'Choose Department':'Loading......'}</option>
                                {context.departments.map(ele=>   <option key={'speciality_'+ele.id} value={ele.id}>{ele.title}</option>)}
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>{errors.department_id}</Form.Control.Feedback>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Room Number</label>
                            <Form.Control
                                type="text"
                                className="form-control wk-select-input"
                                id="formGroupExampleInput"
                                placeholder="Ex: 701"
                                value={formState.room}
                                onChange={onChangeInput}
                                name='room'
                                isInvalid={ !!errors.room }
                            />
                            <Form.Control.Feedback type='invalid'>{errors.room}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <Button type="submit" disabled={formSubmitting} className={"wk-general-button float-right " + style.DoctorNextButton}>Submit</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};