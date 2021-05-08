import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './ForgotComponent.module.css';
import {useRef, useState} from "react";
import commonValidations from "../../validations/commonValidations";
import server from "../../server";
import Cookies from "js-cookie";
import Msg from "../Msg";

function ForgotComponent({sentCode}) {
    // states
    const [formState,setFormState] = useState({phone:''});
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
            phone: 'required',
        });

        if(isValid){
            msgRef.current.hide();
            return server.post('/password/forgot',{identifier:formState.phone}).then((res)=>{
                if(res.data.status){
                    sentCode({
                        id: res.data.id,
                        phone: formState.phone
                    })
                }
            }).catch((err)=>{
                setFormSubmitting(false);
                const msg = err.response && err.response.data?err.response.data.msg:'Failed. Please try again!';
                msgRef.current.show({type:'danger', text:msg});
            });
        }else{
            setErrors({...errors});
            setFormSubmitting(false);
        }
    };

    // markup
    return(
        <div className={style.forgot}>
            <div className={style.wkLoginContent}>
                <div className='text-center mb-3'>
                    <h4>পাসওয়ার্ড রিকভার করুন</h4>
                </div>
                <hr/>
                <Msg generateRef={msgRef} />
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group controlId="formPhone" >
                        <Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <i className={"material-icons mt-1 " + style.forgotMaterialIcon}>
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
                            readOnly={formSubmitting}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" disabled={formSubmitting} className='form-control wk-general-button my-3'>
                        নিশ্চিত করুন
                    </Button>
                </Form>
                <ul className={style.wkList}>
                    <li><p><span className={style.wkLoginRightSymbol} style={{color:'#00695c'}}> <i className="material-icons">
                        done_all
                    </i></span> আপনার মোবাইল নাম্বারে একটি ভ্যারিফিকেশন কোড পাঠানো হবে। </p></li>
                    <li><p><span className={style.wkLoginRightSymbol} style={{color:'#00695c'}}> <i className="material-icons">
                        done_all
                    </i></span>  সাপোর্ট এ যোগ করুন। </p></li>
                </ul>


            </div>
        </div>
    )
}
export default ForgotComponent;