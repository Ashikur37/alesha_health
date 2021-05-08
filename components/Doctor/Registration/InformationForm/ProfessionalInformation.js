import React, {useContext, useState, useRef, useEffect} from "react";
import {Button, Form} from 'react-bootstrap';
import style from "../DoctorRegistration.module.css";
import {ProfileCompletionContext} from "../../../../context/ProfileCompletionContext";
import get from "../../../../functions/get";
import commonValidations from "../../../../validations/commonValidations";
import doctorServer from "../../../../doctorServer";
import ErrorHandler from "../../../../functions/ErrorHandler";

export default function({goNextStep, msgRef}) {
    let isMounted = true;
    const {context, setContext}=useContext(ProfileCompletionContext);

    // states
    const [formState,setFormState] = useState({
        designation_id:'',
        speciality_id:'',
        short_info:{'en':'','bn':''},
        detail_info:{'en':'','bn':''},
    });
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);

    //use effect for edit change
    useEffect(()=>{
        getDesignation();
        getSpeciality();
        setFormState(prev=>{
            return { ...prev, ...context.professionalInfo}
        });
        return () =>{
            isMounted =  false;
        }
    },[context.professionalInfo]);
    const getDesignation = ()=>{
        if(context.designations.length === 0){
            get({ url:'designations', params:{ _lang:'en' } }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,designations:res.data.designations}
            })});
        }
    };
    const getSpeciality = ()=>{
        if(context.specialities.length === 0){
            get({ url:'specialities', params:{ _lang:'en' } }, (res)=> {isMounted && setContext(prev=>{
                return {...prev,specialities:res.data.specialities}
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

    //on change input
    const onChangeInput2d = (e)=>{
        const field = e.target.name.split('.');
        const value = e.target.value;
        setFormState(prev=>{
            return {...prev,[field[0]]:{...prev[field[0]],[field[1]]:value}}
        })
    };

    // submit
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            'designation_id': 'required',
            'speciality_id': 'required',
            'short_info.en':'required',
            'short_info.bn':'required',
            'detail_info.en':'required',
            'detail_info.bn':'required',
        });
        if(isValid){
            msgRef.current.hide();
            return doctorServer.post('/doctor/profile-completion/professional-info',formState).then((res)=>{
                if(isMounted){
                    if(res.data.status){
                        msgRef.current.show({type:'success', text:res.data.message});
                        setContext(prev=>{
                            return { ...prev,professionalInfo:{...formState}}
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
        <div>
            <div className={style.DoctorRegistrationPersonalForm}>
                <h3 className="pt-5 mb-5 text-center">Professional Information</h3>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group controlId="Name">
                        <Form.Label className="col-form-label-sm">Title/Designation</Form.Label>
                        <Form.Control
                            as="select"
                            className="wk-select-input"

                            value={formState.designation_id}
                            onChange={onChangeInput}
                            name='designation_id'
                            isInvalid={ !!errors.designation_id }
                        >
                            <option value="">{context.designations.length?'Select Title/Designation':'Loading......'}</option>
                            {
                                context.designations.map(ele=>   <option key={'designation_type_'+ele.id} value={ele.id}>{ele.title}</option>)
                            }
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>{errors.designation_id}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="selectSpeciality">
                        <Form.Label>Speciality</Form.Label>
                        <Form.Control
                            as="select"
                            className="wk-select-input"
                            value={formState.speciality_id}
                            onChange={onChangeInput}
                            name='speciality_id'
                            isInvalid={ !!errors.speciality_id }
                        >
                            <option value="">{context.specialities.length?'Select Speciality':'Loading......'}</option>
                            {
                                context.specialities.map(ele=>   <option key={'speciality_'+ele.id} value={ele.id}>{ele.name}</option>)
                            }
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>{errors.speciality_id}</Form.Control.Feedback>
                    </Form.Group>
                    {/*<Form.Group controlId="BdName">
                        <Form.Label className="col-form-label-sm">BMDC Reg No </Form.Label>
                        <Form.Control type="text" placeholder="" className="form-control-sm" />
                    </Form.Group>*/}
                    {/*<Form.Group controlId="PermanentAddress">
                        <Form.Label className="col-form-label-sm">Degree & Other Specification</Form.Label>
                        <Form.Control type="text" placeholder="" className="form-control-sm"/>
                    </Form.Group>*/}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="col-form-label-sm">Professional Statement (Short Info)</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="wk-select-input"
                            value={formState.short_info.en}
                            onChange={onChangeInput2d}
                            name='short_info.en'
                            isInvalid={errors.short_info &&  !!errors.short_info.en }
                        />
                        <Form.Control.Feedback type='invalid'>{errors.short_info && errors.short_info.en}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="col-form-label-sm">পেশাগত বিবরণ (সংক্ষিপ্ত)</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="wk-select-input"
                            value={formState.short_info.bn}
                            onChange={onChangeInput2d}
                            name='short_info.bn'
                            isInvalid={errors.short_info &&  !!errors.short_info.bn }
                        />
                        <Form.Control.Feedback type='invalid'>{errors.short_info && errors.short_info.bn}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="col-form-label-sm">Professional Statement (Description)</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="wk-select-input"
                            value={formState.detail_info.en}
                            onChange={onChangeInput2d}
                            name='detail_info.en'
                            isInvalid={errors.detail_info &&  !!errors.detail_info.en }
                        />
                        <Form.Control.Feedback type='invalid'>{errors.detail_info && errors.detail_info.bn}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="col-form-label-sm">পেশাগত বিবরণ (বর্ণনা)</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="wk-select-input"
                            value={formState.detail_info.bn}
                            onChange={onChangeInput2d}
                            name='detail_info.bn'
                            isInvalid={errors.detail_info &&  !!errors.detail_info.bn }
                        />
                        <Form.Control.Feedback type='invalid'>{errors.detail_info && errors.detail_info.bn}</Form.Control.Feedback>
                    </Form.Group>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <Button type="submit" disabled={formSubmitting} className={"wk-general-button float-right " + style.DoctorNextButton}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
};