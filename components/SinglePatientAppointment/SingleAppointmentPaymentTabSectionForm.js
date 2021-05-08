import React, {useEffect, useRef, useState} from "react";
import {Form, Row, Col} from "react-bootstrap";
import style from './SingleAppointmentPaymentTabSection.module.css';
import Msg from "../Msg";
import userServer from "../../userServer";
import {useRouter} from "next/router";
import ErrorHandler from "../../functions/ErrorHandler";
import commonValidations from "../../validations/commonValidations";


export default function () {
    const router = useRouter();
    const {id} = router.query;

    let isMounted = true;
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);

    const [formState,setFormState] = useState({
        bkash_from: '',
        amount: '',
    });

    //ref
    const msgRef = useRef();


    //on change input
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return  {...prev,[field]:value};
        })
    };


    // submit
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            'bkash_from':'required',
            'amount':'required',

        });

        if(isValid){
            msgRef.current.hide();
             userServer.post('/appointment-schedules/'+id+'/bkash-payment',formState).then((res)=>{
                if(isMounted){
                    msgRef.current.show({type:'success', text:res.data.message});
                    setFormState({bkash_from: '', amount: '',});
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
    return(
        <>
            <Msg generateRef={msgRef} />
            <p className={style.wkPaymentConfromText}>পেমেন্ট ভ্যারিফাইড করুন </p>
            <Row>
                <Col lg={8}>
                    <Form  onSubmit={onSubmitHandler}>
                        <Row className="no-gutters">
                            <Col sm={5} className="mr-1">
                                <Form.Group as={Col} controlId="bkash_from">
                                    <Form.Control
                                        placeholder="bKash Number"
                                        className="wk-select-input my-2"
                                        value={formState.bkash_from}
                                        onChange={onChangeInput}
                                        name='bkash_from'
                                        isInvalid={ !!errors.bkash_from }
                                    />
                                    <Form.Control.Feedback type='invalid'>{errors.bkash_from }</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={4} className="mr-1">
                                <Form.Group as={Col} controlId="amount">
                                    <Form.Control
                                        placeholder="amount"
                                        className="wk-select-input my-2"
                                        value={formState.amount}
                                        onChange={onChangeInput}
                                        name='amount'
                                        isInvalid={ !!errors.amount }
                                    />
                                    <Form.Control.Feedback type='invalid'>{errors.amount }</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <button  disabled={formSubmitting} className={"wk-general-button my-2"}>কনফার্ম </button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </>
    )
}