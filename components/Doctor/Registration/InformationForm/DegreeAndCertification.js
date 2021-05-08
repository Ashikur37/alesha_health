import React, {useState, useEffect, useContext} from "react";
import { Row,Col,Form, Button } from 'react-bootstrap';
import style from "../DoctorRegistration.module.css";
import commonValidations from "../../../../validations/commonValidations";
import doctorServer from "../../../../doctorServer";
import ErrorHandler from "../../../../functions/ErrorHandler";
import {ProfileCompletionContext} from "../../../../context/ProfileCompletionContext";

export default function({goNextStep, msgRef}) {
    let isMounted = true;

    // context
    const {context, setContext}=useContext(ProfileCompletionContext);

    // states
    const [formState,setFormState] = useState({
        bmdc_reg:'',
        bmdc_reg_image:'',
        certificates:[{degree:'',uploadImage:''}],
    });
    const [errors,setErrors] = useState({});
    const [deletingCertificates, setDeletingCertificates] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);

    useEffect(()=>{
        setFormState(prev=>{
            const certificationInfo = {...context.certificationInfo};
            const certificatesDeleted = [...context.certificatesDeleted];
            const certificates = [];
            if(certificationInfo.certificates){
                for(const certificate of certificationInfo.certificates){
                    if(certificatesDeleted.findIndex(ele=>ele == certificate.id) === -1){
                        certificates.push(certificate);
                    }
                }
            }
            certificationInfo.certificates = certificates;
            return {...prev,...certificationInfo,bmdc_reg_image:'',bmdc_reg_image_old:context.certificationInfo.bmdc_reg_image}
        });
        return () =>{
            isMounted =  false;
        }

    },[context.certificationInfo]);

    const addMoreDegree = (e)=> {
        e.preventDefault();
        const totalDegree = formState.certificates.length
        setFormState((prev)=>{
            return {...prev,certificates:[...prev.certificates, {degree:'',uploadImage:''}]};
        })
    }
    const removeDegree = (e,index) => {
        e.preventDefault();
        const certificates = formState.certificates;
        const certificate =  certificates[index];
        if(certificate.id){
            const id = certificate.id;
            if(deletingCertificates[certificate.id] !== 'Loading......'){
                const deletingCertificateItems = {...deletingCertificates};
                deletingCertificateItems[certificate.id] = 'Loading......';
                setDeletingCertificates(deletingCertificateItems);

                doctorServer.delete('doctor/profile-completion/certification-info/'+(certificate.id)).then(res=>{
                    certificates.splice(index,1);
                    setFormState(prev=>{
                        return {...prev,certificates}
                    });

                    setContext(prev=>{
                        return {...prev,certificatesDeleted:[...prev.certificatesDeleted,id]}
                    })
                }).catch(()=>{
                    const deletingCertificateItems = {...deletingCertificates};
                    deletingCertificateItems[certificate.id] = 'Delete Failed, Try again!';
                    setDeletingCertificates(deletingCertificateItems);

                })
            }
        }else{
            certificates.splice(index,1)
            setFormState(prev=>{
                return {...prev,certificates}
            })
        }
    }
    const otherDegreeInput = (e)=>{
        const field = e.target.name.split('.');
        const value = e.target.value;
        setFormState(prev=>{
            const certificates =  prev.certificates;
            certificates[field[1]] = {...certificates[field[1]],degree:value};
            return {...prev };
        })
    }
    //on change Other Degree Image
    const onChangeOtherDegreeImage = (e)=>{
        const field = e.target.name.split('.');
        const value = e.target.files[0];
        setFormState(prev=>{
            const certificates =  prev.certificates;
            certificates[field[1]] = {...certificates[field[1]],uploadImage:value,isNew: true};
            return {...prev };
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

        setErrors({});
        let errorsList = {};
        let rules = {
            'bmdc_reg':'required',
            'bmdc_reg_image':'mimes:jpeg,png,gif,webp',
        };
        if(!formState.bmdc_reg_image_old){
            rules.bmdc_reg_image = 'required|'+rules.bmdc_reg_image
        }
        let { errors, isValid } = commonValidations(formState,rules);
        //errorsList = {...errors}
        const certificateErrors = {};
        for(let i = 0; i<formState.certificates.length; i++){
            const certificate = formState.certificates[i];
            let rules = {
                'degree':'required',
                'uploadImage':'mimes:jpeg,png,gif,webp',
            };
            if(!certificate.id){
                rules.uploadImage = 'required|'+rules.uploadImage
            }
            let { errors, isValid } = commonValidations(certificate,rules);
            if(!isValid){
                certificateErrors[i] = {...errors};
            }
        }
        if(Object.keys(certificateErrors).length>0){
            errors = {...errors,certificates:{...certificateErrors}}
        }
        if(Object.keys(errors).length>0){
            isValid = false;
        }
        if(isValid){
            msgRef.current.hide();
            const data = new FormData();
            data.append('bmdc_reg', formState.bmdc_reg)
            data.append('bmdc_reg_image', formState.bmdc_reg_image)
            const certificates = [];
            for(let i= 0; i<formState.certificates.length; i++){
                const certificate = formState.certificates[i];
                const imgName = 'certificate_'+i;
                const certificateData = {
                    degree: certificate.degree,
                    image: imgName,
                }
                if(certificate.id){
                    certificateData.id = certificate.id;
                }
                certificates.push(certificateData)
                data.append(imgName, certificate.uploadImage)
            }
            data.append('certificates', JSON.stringify(certificates));

            return doctorServer.post('/doctor/profile-completion/certification-info',data).then((res)=>{
                if(isMounted){
                    if(res.data.status){
                        msgRef.current.show({type:'success', text:res.data.message});
                        setContext(prev=>{
                            return {...prev,certificationInfo:res.data.certification_info}
                        });
                        goNextStep();
                    }else{
                        msgRef.current.show({type:'danger', text:"Failed. Please try again!"});
                    }
                    setFormSubmitting(true);
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
            <h3 className="pt-5 mb-5 text-center">Degree & Certification</h3>
            <Form  onSubmit={onSubmitHandler}>
                <Row className="no-gutters">
                    <Col lg={6}>
                        <Form.Group controlId="BDMC">
                            <Form.Label>BMDC Reg. no</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="34251"
                                className={style.wkdocCerIput}
                                name="bmdc_reg"
                                value={formState.bmdc_reg}
                                onChange={onChangeInput}
                                isInvalid={!!errors.bmdc_reg}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.bmdc_reg}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col ml={0} lg={6}>
                        <Form.Group controlId="BDMC_Attach">
                            <Form.Label>Attach File</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="Choose File"
                                name="bmdc_reg_image"
                                className={style.wkCustomFileInput}
                                onChange={onChangeImage}
                                isInvalid={!!errors.bmdc_reg_image}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.bmdc_reg_image}</Form.Control.Feedback>
                        </Form.Group>
                        {formState.bmdc_reg_image && <img src={URL.createObjectURL(formState.bmdc_reg_image)} alt="..." className={"img-thumbnail "+style.inputImg} />}
                        {!formState.bmdc_reg_image && formState.bmdc_reg_image_old && <img src={process.env.SERVER_URL+'/doctor-files/'+context.certificationInfo.doctor_id+'/bmdc/'+formState.bmdc_reg_image_old} alt="..." className={"img-thumbnail "+style.inputImg} />}
                    </Col>
                </Row>
                {
                    formState.certificates.map((ele,index)=>{
                        return (
                            <Row key={'other_degree'+index} className="no-gutters">
                                <Col lg={6}>
                                    <Form.Group controlId={'other_degree_'+index}>
                                        <Form.Label className={style.wkDOSalt}>Degree & Others Specialization</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Specialization"
                                            name={'other_degree.'+index}
                                            className={style.wkdocCerIput}
                                            value={formState.certificates[index].degree}
                                            onChange={otherDegreeInput}
                                            isInvalid={errors.certificates && errors.certificates[index] &&  !!errors.certificates[index].degree}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.certificates && errors.certificates[index] &&  errors.certificates[index].uploadImage}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col ml={0} lg={6}>
                                    <Form.Group controlId={'other_certification_'+index}>
                                        <Form.Label>Attach Certification</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Choose File"
                                            name={'other_certification.'+index}
                                            className={style.wkCustomFileInput}
                                            onChange={onChangeOtherDegreeImage}
                                            isInvalid={errors.certificates && errors.certificates[index] &&  !!errors.certificates[index].uploadImage}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.certificates && errors.certificates[index] &&  errors.certificates[index].uploadImage}</Form.Control.Feedback>
                                    </Form.Group>
                                    {ele.isNew && ele.uploadImage && <img src={URL.createObjectURL(ele.uploadImage)} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                    {!ele.isNew && ele.image && <img src={process.env.SERVER_URL+'/doctor-files/'+context.certificationInfo.doctor_id+'/certificate/'+ele.image} alt="..." className={"img-thumbnail "+style.inputImg} />}
                                    <a href="#" onClick={(e)=>removeDegree(e,index)}>{ (ele.id && deletingCertificates[ele.id])?deletingCertificates[ele.id]:'Remove Degree' }</a>
                                </Col>
                            </Row>
                        )
                    })
                }
                <Row>
                    <Col>
                        <a href="#" onClick={addMoreDegree}>Add More Degree</a>
                    </Col>
                </Row>
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <Button type="submit" disabled={formSubmitting} className={"wk-general-button float-right " + style.DoctorNextButton}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
};