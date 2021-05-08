import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './NewPasswordComponent.module.css';
import {useRef, useState} from "react";
import server from "../../../server";
import commonValidations from "../../../validations/commonValidations";
import Msg from "../../Msg";
import {useRouter} from "next/router";

function ResetComponent({resetData,code}) {
    const router = useRouter();

    // states
    const [formState,setFormState] = useState({password:'',confirm_password:''});
    const [formSubmitting,setFormSubmitting] = useState(false);
    const [errors,setErrors] = useState({});

    // ref
    const msgRef = useRef();

    //input on change
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return {...prev,[field]:value}
        })
    };

    // submit form
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        setErrors({});
        const { errors, isValid } = commonValidations(formState,{
            password: 'required',
            confirm_password: 'required|confirm_password',
        });

        if(isValid){
            msgRef.current.hide();
            return server.post('/doctor/password/reset',{...formState,...{identifier:resetData.phone,id:resetData.id},code:code}).then((res)=>{
                if(res.data.status){
                    router.replace('/doctor/login');
                }
            }).catch((err)=>{
                setFormSubmitting(false);
                console.log('err',err.response);
                const msg = err.response && err.response.data?err.response.data.msg:'Failed. Please try again!';
                msgRef.current.show({type:'danger', text:msg});
            });
        }else{
            setErrors({...errors});
            setFormSubmitting(false);
        }
    };
    return(

        <div className={style.new_password}>
            <div className={style.wkLoginContent}>
                <div className='text-center mb-3'>
                    <h4>পাসওয়ার্ড রিকভার করুন</h4>
                </div>
                <hr/>
                <Msg generateRef={msgRef} />
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group controlId="formPassword">
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className="material-icons">
                                        vpn_key
                                    </i>
                                </Col>
                                <Col className={[style.textLeft, style.wkLabelText]}>নতুন  পাসওয়ার্ড</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="নতুন পাসওয়ার্ড"
                            className={style.wkFromInput}
                            value={formState.password}
                            onChange={onChangeInput}
                            isInvalid={!!errors.password}
                            readOnly={formSubmitting}
                            name='password'
                        />
                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className="material-icons">
                                        vpn_key
                                    </i>
                                </Col>
                                <Col className={[style.textLeft, style.wkLabelText]}>কনফার্ম পাসওয়ার্ড</Col>
                            </Row>
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="কনফার্ম পাসওয়ার্ড"
                            className={style.wkFromInput}
                            value={formState.confirm_password}
                            onChange={onChangeInput}
                            isInvalid={!!errors.confirm_password}
                            readOnly={formSubmitting}
                            name='confirm_password'
                        />
                        <Form.Control.Feedback type='invalid'>{errors.confirm_password}</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" disabled={formSubmitting} className='form-control wk-general-button my-3'>
                        লগইন
                    </Button>

                </Form>
            </div>
        </div>

    )
}
export default ResetComponent;
