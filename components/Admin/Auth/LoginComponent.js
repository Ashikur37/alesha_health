import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './LoginComponent.module.css';
import {useRef, useState} from "react";
import commonValidations from '../../../validations/commonValidations'
import server from "../../../server";
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Msg from "../../Msg";
import {setAuthToken} from "../../../adminServer";

function LoginComponent() {
    const router = useRouter();
    const [formState,setFormState] = useState({phone:'01303127725',password:'123456'});
    const [errors,setErrors] = useState({});
    const [message,setMessage] = useState({
        type:'success',
        text:'test'
    });
    const [formSubmitting,setFormSubmitting] = useState(false);
    const msgRef = useRef();
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return {...prev,[field]:value}
        })
    };

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
            return server.post('/admin/login',{identifier:formState.phone, password    : formState.password}).then((res)=>{
                if(res.data.status){
                    Cookies.set('_adminJwtToken',res.data.token);
                    setAuthToken(res.data.token);
                    router.replace('/admin');
                }
            }).catch((err)=>{
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
            <div className={style.wkLoginContent}>
                <div className='text-center mb-3'>
                    <h4>Admin Login</h4>
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
                                <Col className={[style.textLeft, style.wkLabelText]}>মোবাইল</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={formState.phone}
                            onChange={onChangeInput}
                            name='phone'
                            placeholder="017 - - - - - - - "
                            className={"wk-select-input "}
                            isInvalid={!!errors.phone}
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
                                <Col className={[style.textLeft, style.wkLabelText]}>পাসওয়ার্ড</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control type="password"
                                      value={formState.password}
                                      onChange={onChangeInput}
                                      name='password'
                                      placeholder="********"
                                      className={"wk-select-input "}
                                      isInvalid={!!errors.password}/>
                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" disabled={formSubmitting} className='form-control wk-general-button my-3'>
                        Login
                    </Button>


                </Form>
                <div className='float-left my-4'>

                </div>
            </div>
        </div>
    )
}
export default LoginComponent;