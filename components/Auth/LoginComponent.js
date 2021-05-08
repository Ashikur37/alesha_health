import {Col,Row,Form,Button} from 'react-bootstrap'
import style from './LoginComponent.module.css';
import {useRef, useState} from "react";
import commonValidations from '../../validations/commonValidations'
import server from "../../server";
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Msg from "../Msg";
import Title from "../../functions/Title";
import {setAuthToken} from "../../userServer";

function LoginComponent({loginDone}) {
    // router
    const router = useRouter();

    // states
    const [formState,setFormState] = useState({phone:'01303127725',password:'123456'});
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);

    // ref
    const msgRef = useRef();

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
            phone: 'required',
            password: 'required',
        });

        if(isValid){
            msgRef.current.hide();
            return server.post('/login',{identifier:formState.phone, password: formState.password}).then((res)=>{
                if(res.data.status){
                    Cookies.set('_jwtToken',res.data.token);
                    setAuthToken(res.data.token);

                    router.replace('/');
                }else{
                    if(res.data.account_status === 0){
                        loginDone({...formState,verificationId: res.data.verification_id})
                    }
                }
            }).catch((err)=>{
                console.log('err',err);
                setFormSubmitting(false);
                const msg = err.response && err.response.data.errors?err.response.data.errors.global:'Failed. Please try again!'
                msgRef.current.show({type:'danger', text:msg});
            });
        }else{
            setErrors({...errors});
            setFormSubmitting(false);
        }
    };
    return(
        <div className={style.login}>
            <Title>Login</Title>
            <div className={style.wkLoginContent}>
                <div className='text-center mb-3'>
                    <h4>লগইন করুন</h4>
                </div>
                <hr/>
                <Msg generateRef={msgRef} />
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className={"material-icons mt-1 " + style.loginComponent}>
                                        stay_current_portrait
                                    </i>
                                </Col>
                                <Col className={[style.textLeft, style.wkLabelText]}>মোবাইল নাম্বার</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={formState.phone}
                            onChange={onChangeInput}
                            name='phone'
                            placeholder="017 - - - - - - - "
                            isInvalid={!!errors.phone}
                            className={"wk-select-input "}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className={"material-icons mt-1 " + style.loginComponent}>
                                        vpn_key
                                    </i>
                                </Col>
                                <Col className={[style.textLeft, style.wkLabelPasswordText]}>পাসওয়ার্ড</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="password"
                            value={formState.password}
                            onChange={onChangeInput}
                            name='password'
                            isInvalid={!!errors.password}
                            placeholder="********"
                            className={"wk-select-input "}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" disabled={formSubmitting} className='form-control wk-general-button my-3'>
                        লগইন
                    </Button>
                    <Form.Group controlId="formBasicCheckbox">
                        <span className='float-left'><a href="/password/forgot" className={style.wkLoginLink}>পাসওয়ার্ড রিকভার করুন</a></span>
                        <span className='float-right'>  <a href="/signup" className={[style.wkLoginLink]}>নতুন একাউন্ট তৈরি করুন </a></span>
                    </Form.Group>
                </Form>
                <div className='float-left my-4'>

                </div>
            </div>
        </div>
    )
}
export default LoginComponent;