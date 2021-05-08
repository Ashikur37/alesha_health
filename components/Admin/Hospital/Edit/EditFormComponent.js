import style from "./EditFormComponent.module.css";
import React, {useEffect, useRef, useState} from "react";
import {Button, Form} from "react-bootstrap";
import commonValidations from "../../../../validations/commonValidations";
import Msg from "../../../Msg";
import ErrorHandler from "../../../../functions/ErrorHandler";
import adminServer from "../../../../adminServer";
import {useRouter} from "next/router";

const EditFormComponent = ({data})=>{
    let isMounted = true;
    const router = useRouter();
    let { id } = router.query;
    /*const defaultForm = { //fake
        type:'1',
        is_gov:'1',
        order:'',
        names:{en:'name.', bn:'name.....'},
        address:{en:'address.', bn:'address...'},
        contact_email:'shamim258038@gmail.com',
        contact_number:'01303127725',
        latitude:'23.810331',
        longitude:'90.412521',
        logo:'',
        banner:'',
    };*/
    const defaultForm = {
        type:'',
        is_gov:'',
        names:{en:'', bn:''},
        address:{en:'', bn:''},
        contact_email:'',
        contact_number:'',
        latitude:'',
        longitude:'',
        order:'',
        logo:'',
        banner:'',
    };

    // states
    const [formState,setFormState] = useState(defaultForm);
    const [hospitalMedia,setHospitalMedia] = useState({logo:'',banner:''});

    //Form errors state
    const [errors,setErrors] = useState({});

    //submitting state
    const [formSubmitting,setFormSubmitting] = useState(false);

    // ref
    const msgRef = useRef();

    useEffect(()=>{
        setFormState(prev=>({
            ...prev,
            type:data.type,
            is_gov:data.is_gov,
            names:{en:data.names.en, bn:data.names.bn},
            address:{en:data.address.en, bn:data.address.bn},
            contact_email:data.contact_email,
            contact_number:data.contact_number,
            latitude:data.latitude,
            longitude:data.longitude,
            order:data.order,
            logo:'',
            banner:'',
        }));
        setHospitalMedia(prev=>({
            logo:data.logo,
            banner:data.banner
        }));
        return () =>{
            isMounted =  false;
        }
    },[]);

    //on change input name
    const onChangeImage = (e)=>{
        const field = e.target.name;
        const value = e.target.files[0];
        setFormState(prev=>{
            return {...prev,[field]:value}
        })
    };

    //on change input muilti
    const onChangeInputSub = (e)=>{
        const field = (e.target.name).split('.');
        const value = e.target.value;
        setFormState(prev=>{
            return {...prev,[field[0]]:{...prev[field[0]],[field[1]]:value}}
        })
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
            'type': 'required',
            'is_gov': 'required',
            'names.en':'required',
            'names.bn':'required',
            'address.en':'required',
            'address.bn':'required',
            'contact_number':'required',
            'logo':'mimes:jpeg,png,gif,webp',
            'banner':'mimes:jpeg,png,gif,webp',
        });
        if(isValid){
            msgRef.current.hide();
            const data = new FormData();
            for(let i of Object.keys(formState)){
                let value = formState[i];
                if(i === 'names' || i === 'address'){
                    value = JSON.stringify(value);
                }
                data.append(i, value)
            }
            console.log("hey....");
            return adminServer.put('/admin/hospitals/'+id,data).then((res)=>{
                if(isMounted){
                    setFormSubmitting(false);
                    if(res.data.status){
                        msgRef.current.show({type:'success', text:res.data.message});
                        const logo = res.data.media.logo?res.data.media.logo: hospitalMedia.logo;
                        const banner = res.data.media.banner?res.data.media.banner: hospitalMedia.banner;
                        setHospitalMedia(prev=>({
                            logo: logo,
                            banner: banner
                        }));
                        setFormState(prev=>({
                            ...prev,
                            logo:'',
                            banner:'',
                        }));
                    }else{
                        msgRef.current.show({type:'danger', text:"Failed. Please try again!"});
                    }
                }
            }).catch((err)=>{
                if(isMounted){
                    setFormSubmitting(false);
                    ErrorHandler({
                        err,setErrors,msgRef
                    });
                }
            });
        }else{
            setErrors({...errors});
            setFormSubmitting(false);
        }
    };
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <Msg generateRef={msgRef} />
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Hospital Type</label>
                            <Form.Control
                                as="select"
                                className="browser-default wk-select-input"
                                value={formState.type}
                                onChange={onChangeInput}
                                name='type'
                                isInvalid={ !!errors.type }
                            >
                                <option value="">Select an option</option>
                                <option value="1">Hospital</option>
                                <option value="2">Clinic</option>
                                <option value="3">Chamber</option>
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>{errors.type}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Organization Type</label>
                            <Form.Control
                                as="select"
                                className="browser-default wk-select-input"
                                value={formState.is_gov}
                                onChange={onChangeInput}
                                name='is_gov'
                                isInvalid={ !!errors.is_gov }
                            >
                                <option value="">Select an option</option>
                                <option value="0">Private</option>
                                <option value="1">Govt.</option>
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>{errors.is_gov}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Name</label>
                            <Form.Control
                                type="text"
                                className="wk-select-input"
                                placeholder="Dhaka Hospital...."
                                name='names.en'
                                value={formState.names.en}
                                onChange={onChangeInputSub}
                                isInvalid={errors.names && !!errors.names.en}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.names && errors.names.en}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">নাম</label>
                            <Form.Control
                                type="text"
                                className="wk-select-input"
                                placeholder="ঢাকা হসপিটাল"
                                name='names.bn'
                                value={formState.names.bn}
                                onChange={onChangeInputSub}
                                isInvalid={errors.names && !!errors.names.bn}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.names && errors.names.bn}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">Address</label>
                            <Form.Control
                                as="textarea" rows="3"
                                className="wk-select-input"
                                id="formGroupExampleInput"
                                placeholder="Dhaka, Panthapath...."
                                name='address.en'
                                value={formState.address.en}
                                onChange={onChangeInputSub}
                                isInvalid={errors.address && !!errors.address.en}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.address && errors.address.en}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="col-form-label-sm">ঠিকানা</label>
                            <Form.Control
                                as="textarea" rows="3"
                                className="wk-select-input"
                                id="formGroupExampleInput"
                                placeholder="ঢাকা, পান্থপথ..."
                                name='address.bn'
                                value={formState.address.bn}
                                onChange={onChangeInputSub}
                                isInvalid={errors.address && !!errors.address.bn}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.address && errors.address.bn}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label className="col-form-label-sm">Number</label>
                            <Form.Control
                                type="text"
                                className="wk-select-input"
                                placeholder="0187XXXXXXX"
                                name='contact_number'
                                value={formState.contact_number}
                                onChange={onChangeInput}
                                isInvalid={!!errors.contact_number}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.contact_number}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formEmail" className="col-form-label-sm">Email</label>
                            <Form.Control
                                type="text"
                                className="wk-select-input"
                                placeholder="XXXX@mail.com"
                                name='contact_email'
                                value={formState.contact_email}
                                onChange={onChangeInput}
                                isInvalid={!!errors.contact_email}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.contact_email}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label className="col-form-label-sm">Latitude</label>
                            <Form.Control
                                type="text"
                                className="wk-select-input"
                                placeholder="12154.77979"
                                name='latitude'
                                value={formState.latitude}
                                onChange={onChangeInput}
                                isInvalid={!!errors.latitude}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.latitude}</Form.Control.Feedback>
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label-sm">Longitude</label>
                            <Form.Control
                                type="text"
                                className="wk-select-input"
                                placeholder="45454545.45475454"
                                name='longitude'
                                value={formState.longitude}
                                onChange={onChangeInput}
                                isInvalid={!!errors.longitude}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.longitude}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label className="col-form-label-sm">order</label>
                            <Form.Control
                                type="text"
                                className="wk-select-input"
                                placeholder="1"
                                name='order'
                                value={formState.order}
                                onChange={onChangeInput}
                                isInvalid={!!errors.order}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.order}</Form.Control.Feedback>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group col-form-label-lg">
                                <div className="custom-file1">
                                    <Form.Control
                                        type="file"
                                        className="custom-file-input"
                                        id="customFile1"
                                        name='logo'
                                        onChange={onChangeImage}
                                        isInvalid={!!errors.logo}
                                    />
                                    <label className="custom-file-label" htmlFor="customFile1">Choose a Logo</label>
                                    <Form.Control.Feedback type='invalid'>{errors.logo}</Form.Control.Feedback>
                                </div>
                            </div>
                            {formState.logo && <img src={URL.createObjectURL(formState.logo)} alt="..." className={"img-thumbnail "+style.inputImg} />}
                            {!formState.logo && hospitalMedia.logo && <img src={process.env.SERVER_URL+'/public/hospitals/'+hospitalMedia.logo} alt="..." className={"img-thumbnail "+style.inputImg} />}
                        </div>
                        <div className="col-md-6">
                            <div className="input-group col-form-label-lg">
                                <div className="custom-file2">
                                    <Form.Control
                                        type="file"
                                        className="custom-file-input"
                                        id="customFile2"
                                        name='banner'
                                        onChange={onChangeImage}
                                        isInvalid={!!errors.banner}
                                    />
                                    <label className="custom-file-label" htmlFor="customFile2">Choose a Banner</label>
                                    <Form.Control.Feedback type='invalid'>{errors.banner}</Form.Control.Feedback>
                                </div>
                            </div>
                            {formState.banner && <img src={URL.createObjectURL(formState.banner)} alt="..." className={"img-thumbnail "+style.inputImg} />}
                            {!formState.banner && hospitalMedia.banner && <img src={process.env.SERVER_URL+'/public/hospitals/'+hospitalMedia.banner} alt="..." className={"img-thumbnail "+style.inputImg} />}
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
        </>
    )
};

export default EditFormComponent;