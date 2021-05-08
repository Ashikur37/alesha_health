import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './SignupComponent.module.css';
import {useRef, useState} from "react";
import commonValidations from "../../../../validations/commonValidations";
import server from "../../../../server";
import Msg from "../../../Msg";
import ErrorHandler from "../../../../functions/ErrorHandler";
import doctorServer from "../../../../doctorServer";

function SignupComponent({signUpDone}) {

    // states
    const [formState,setFormState] = useState({name:'',phone:'',password:''});
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
            name: 'required',
            phone: 'required',
            password: 'required',
        });

        if(isValid){
            msgRef.current.hide();
            return doctorServer.post('/doctor/signup',formState).then((res)=>{
                if(res.data.status){
                    signUpDone({phone:formState.phone, password: formState.password, verification_id: res.data.verification_id,})
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
        <div className={style.signup}>
            <div className={style.wkLoginContent}>
                <div className='text-center mb-3'>
                <h4>Create new account</h4>
                </div>
                <hr/>
                <Msg generateRef={msgRef} />
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group controlId="formName">
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className="material-icons">
                                        people
                                    </i>
                                </Col>
                                <Col className={[style.textLeft, style.wkLabelTextName]}> &nbsp;Name</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Type your full name"
                            className={style.wkFromInput}
                            value={formState.name}
                            onChange={onChangeInput}
                            name='name'
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className="material-icons mt-1">
                                        stay_current_portrait
                                    </i>
                                </Col>
                                <Col className={[style.textLeft, style.wkLabelText]}> Mobile Number </Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            className={style.wkFromInput}
                            value={formState.phone}
                            onChange={onChangeInput}
                            name='phone'
                            placeholder="017 - - - - - - - "
                            isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className="material-icons">
                                        vpn_key
                                    </i>
                                </Col>
                                <Col className={[style.textLeft, style.wkLabelText]}> Password</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="********"
                            className={style.wkFromInput}
                            value={formState.password}
                            onChange={onChangeInput}
                            name='password'
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" disabled={formSubmitting} className='form-control wk-general-button my-3'>
                        সেভ করুন
                    </Button>
                </Form>
            </div>
        </div>

    )
}
export default SignupComponent;