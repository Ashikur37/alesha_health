import React, {useContext, useEffect, useRef, useState} from "react";
import {Form, Button} from 'react-bootstrap';
import style from "../DoctorRegistration.module.css";
import commonValidations from "../../../../validations/commonValidations";
import ErrorHandler from "../../../../functions/ErrorHandler";
import Msg from "../../../Msg";
import doctorServer from "../../../../doctorServer";
import {ProfileCompletionContext} from "../../../../context/ProfileCompletionContext";
import Date2String from "../../../../functions/Date2String";
export default function({goNextStep ,  msgRef}) {
    let isMounted = true;

    // context
    const {context, setContext}=useContext(ProfileCompletionContext);

    // states
    const [formState,setFormState] = useState({
        names:{en:'', bn:''},
        dob:'',
        image:'',
        video:'',
        present_address:'',
        permanent_address:'',
        email:'',
        nid:'',
        nid_image_front:'',
        nid_image_back:'',
    });
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);


    useEffect(()=>{
        /*const names = {en:'', bn:''};
        if(context.personalInfo.names){
            for(let nameData of context.personalInfo.names){
                names[nameData.code] = nameData.name;
            }
        }*/
        let dob = "";
        if(context.personalInfo.dob){
             dob = Date2String(new Date(context.personalInfo.dob));
        }
        setFormState(prev=>{
            return { ...prev, ...context.personalInfo, dob, nid_image_front:'', nid_image_back:'',image:'', }
        });
        return () =>{
            isMounted =  false;
        }
    },[context.personalInfo]);

    //on change input
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return {...prev,[field]:value}
        })
    };
    //on change input name
    const onChangeInputName = (e)=>{
        const field = (e.target.name).split('.');
        const value = e.target.value;
        setFormState(prev=>{
            return {...prev,[field[0]]:{...prev[field[0]],[field[1]]:value}}
        })
    };

    //on change input name
    const onChangeImage = (e)=>{
        const field = e.target.name;
        const value = e.target.files[0];
        setFormState(prev=>{
            return {...prev,[field]:value}
        })
    };


    // submit
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        let nid_image_front = 'mimes:jpeg,png,gif,webp';
        if(!context.personalInfo.nid_image_front){
            nid_image_front = 'required|'+nid_image_front
        }
        let image = 'mimes:jpeg,png,gif,webp';
        if(!context.personalInfo.image){
            image = 'required|'+image
        }

        let nid_image_back = 'mimes:jpeg,png,gif,webp';
        if(!context.personalInfo.nid_image_back){
            nid_image_back = 'required|'+nid_image_back
        }

        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            'names.en':'required',
            'names.bn':'required',
            'dob':'required',
            'present_address':'required',
            'permanent_address':'required',
            'email':'required',
            'nid':'required',
            'nid_image_front':nid_image_front,
            'nid_image_back': nid_image_back,
            'image': image,
        });
        if(isValid){
            msgRef.current.hide();
            const data = new FormData();
            for(let i of Object.keys(formState)){
                let value = formState[i];
                if(i === 'names'){
                    value = JSON.stringify(value);
                }
                data.append(i, value)
            }
            //data.append('nid_image_front', formState.nid_image_front);
            //data.append('nid_image_back', formState.nid_image_back);
            return doctorServer.post('/doctor/profile-completion/personal-info',data).then((res)=>{
                if(isMounted){
                    if(res.data.status){
                        msgRef.current.show({type:'success', text:res.data.message});
                        setContext(prev=>{
                            const personalInfo = {...prev.personalInfo,...formState};
                            personalInfo.image = context.personalInfo.image;
                            personalInfo.nid_image_front = context.personalInfo.nid_image_front;
                            personalInfo.nid_image_back = context.personalInfo.nid_image_back;
                            if(res.data.result.nid_image_front){
                                personalInfo.nid_image_front = res.data.result.nid_image_front+'?v='+Math.random();
                            }
                            if(res.data.result.image){
                                personalInfo.image = res.data.result.image+'?v='+Math.random();
                            }
                            if(res.data.result.nid_image_back){
                                personalInfo.nid_image_back = res.data.result.nid_image_back+'?v='+Math.random();
                            }
                            return { ...prev,personalInfo: personalInfo}
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
                <h3 className="pt-4 mb-4 text-center">Personal Information</h3>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Name</label>
                        <Form.Control
                            type="text"
                            className="wk-select-input"
                            id="formGroupExampleInput"
                            placeholder="Adam Smith"
                            name='names.en'
                            value={formState.names.en}
                            onChange={onChangeInputName}
                            isInvalid={errors.names && !!errors.names.en}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.names && errors.names.en}</Form.Control.Feedback>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="col-form-label-sm">নাম</label>
                        <Form.Control
                            type="text"
                            className="wk-select-input"
                            id="formGroupExampleInput"
                            placeholder="নাম লিখুন"
                            name='names.bn'
                            value={formState.names.bn}
                            onChange={onChangeInputName}
                            isInvalid={errors.names && !!errors.names.bn}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.names && errors.names.bn}</Form.Control.Feedback>
                    </div>
                    <div className="form-group mt-3 mb-3">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Date Of Birth</label>
                            <Form.Control className="wk-select-input" type="date" id="example-date-input"
                                   name='dob'
                                   value={formState.dob}
                                   onChange={onChangeInput}
                                   isInvalid={!!errors.dob}
                                   />
                        <Form.Control.Feedback type='invalid'>{errors.dob}</Form.Control.Feedback>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Present Address</label>
                        <Form.Control
                            type="text"
                            className="wk-select-input"
                            id="formPresentAddress"
                            placeholder="27/1 Kakrail Dhaka 1201"
                            name='present_address'
                            value={formState.present_address}
                            onChange={onChangeInput}
                            isInvalid={!!errors.present_address}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.present_address}</Form.Control.Feedback>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formPermanentAddress" className="col-form-label-sm">Permanent Address</label>
                        <Form.Control
                            type="text"
                            className="wk-select-input"
                            id="formPermanentAddress"
                            placeholder="27/1 Kakrail Dhaka 1201"
                            name='permanent_address'
                            value={formState.permanent_address}
                            onChange={onChangeInput}
                            isInvalid={!!errors.permanent_address}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.permanent_address}</Form.Control.Feedback>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEmail" className="col-form-label-sm">Email</label>
                        <Form.Control
                            type="text"
                            className="wk-select-input"
                            id="formEmail"
                            placeholder="adams@gmail.com"
                            name='email'
                            value={formState.email}
                            onChange={onChangeInput}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formNIDNumber" className="col-form-label-sm">NID</label>
                        <Form.Control
                            type="text"
                            className="wk-select-input"
                            id="formNIDNumber"
                            placeholder="1234567891101132*"
                            name='nid'
                            value={formState.nid}
                            onChange={onChangeInput}
                            isInvalid={!!errors.nid}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.nid}</Form.Control.Feedback>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formVideoUrl" className="col-form-label-sm">Youtube Video Url</label>
                        <Form.Control
                            type="text"
                            className="wk-select-input"
                            id="formVideoUrl"
                            placeholder="https://youtu.be/GTJKeWic_zs"
                            name='video'
                            value={formState.video}
                            onChange={onChangeInput}
                            isInvalid={!!errors.video}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.video}</Form.Control.Feedback>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formNIDNumber" className="col-form-label-sm">Profile Picture*(jpg,pdf,png)</label>
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group col-form-label-lg">
                                            <div className="custom-file1">
                                                <Form.Control
                                                    type="file"
                                                    className="custom-file-input"

                                                    id="customFile1"
                                                    name='image'
                                                    onChange={onChangeImage}
                                                    isInvalid={!!errors.image}
                                                />
                                                <label className="custom-file-label" htmlFor="customFile1">Chose a image</label>
                                                <Form.Control.Feedback type='invalid'>{errors.image}</Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {formState.image && <img src={URL.createObjectURL(formState.image)} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                        {!formState.image && context.personalInfo.image && <img src={process.env.SERVER_URL+'/public/doctors/profile_pic/'+context.personalInfo.image} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formNIDNumber" className="col-form-label-sm">NID Attatchment*(jpg,pdf,png)</label>
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group col-form-label-lg">
                                            <div className="custom-file1">
                                                <Form.Control
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="customFile1"
                                                    name='nid_image_front'
                                                    onChange={onChangeImage}
                                                    isInvalid={!!errors.nid_image_front}
                                                />
                                                <label className="custom-file-label" htmlFor="customFile1">Front Side</label>
                                                <Form.Control.Feedback type='invalid'>{errors.nid_image_front}</Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {formState.nid_image_front && <img src={URL.createObjectURL(formState.nid_image_front)} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                        {!formState.nid_image_front && context.personalInfo.nid_image_front && <img src={process.env.SERVER_URL+'/doctor-files/'+context.personalInfo.doctor_id+'/nid/'+context.personalInfo.nid_image_front} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group col-form-label-lg">
                                            <div className="custom-file2">
                                                <Form.Control
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="customFile2"
                                                    name='nid_image_back'
                                                    onChange={onChangeImage}
                                                    isInvalid={!!errors.nid_image_back}
                                                />
                                                <label className="custom-file-label" htmlFor="customFile">Back Side</label>
                                                <Form.Control.Feedback type='invalid'>{errors.nid_image_back}</Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {formState.nid_image_back && <img src={URL.createObjectURL(formState.nid_image_back)} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                        {!formState.nid_image_back && context.personalInfo.nid_image_back && <img src={process.env.SERVER_URL+'/doctor-files/'+context.personalInfo.doctor_id+'/nid/'+context.personalInfo.nid_image_back} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                    </div>
                                </div>
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