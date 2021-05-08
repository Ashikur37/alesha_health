import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './SignupComponent.module.css';

function SignupComponent(props) {

    return(

        <div className={style.signup}>
            <div className={style.wkLoginContent}>
                <div className='text-center mb-3'>
                <h2><span></span>নতুন একাউন্ট তৈরি করুন</h2>
                </div>
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Label><span></span>নাম  </Form.Label>
                        <Form.Control type="email" placeholder="আপনার নাম টাইপ করুন" className={style.wkFromInput}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><span></span> মোবাইল নাম্বার </Form.Label>
                        <Form.Control type="email" placeholder="০১৭xxxxxxxx " className={style.wkFromInput}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>পাসওয়ার্ড</Form.Label>
                        <Form.Control type="password" placeholder="পাসওয়ার্ড" className={style.wkFromInput}/>
                    </Form.Group>

                    <Button type="submit" className='form-control wk-general-button my-3'>
                        সেভ করুন
                    </Button>
                </Form>
            </div>
        </div>

    )
}
export default SignupComponent;