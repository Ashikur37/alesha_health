import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './ResetComponent.module.css';
import ResetComponentOtp from "./ResetComponentOtp";
import server from "../../../server";
import {useRef, useState} from "react";
import Msg from "../../Msg";
import ErrorHandler from "../../../functions/ErrorHandler";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import Title from "../../../functions/Title";
import { setAuthToken } from "../../../userServer";

function ResetComponent({loginData, codeResent}) {
    // router
    const router = useRouter();


    // states
    const [formSubmitting,setFormSubmitting] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [code,setCode] = useState('');

    // ref
    const msgRef = useRef();

    // submit form
    const reSendCode = (e)=>{
        e.preventDefault();
        setFormSubmitting(true);
        msgRef.current.hide();
        return server.post('/account-validation-resend',{phone: loginData.phone, id: loginData.verificationId}).then((res)=>{
            setFormSubmitting(false);
            if(res.data.status){
                codeResent({verificationId: res.data.id});
                msgRef.current.show({type:'success', text:'Resend success.'});
            }
        }).catch((err)=>{
            setFormSubmitting(false);
            ErrorHandler({err,msgRef})
        });
    };

    // submit form
    const codeConfirm = (e)=>{
        e.preventDefault();
        setSubmitting(true);

        msgRef.current.hide();
        return server.post('/account-validation',{phone: loginData.phone, password: loginData.password, code}).then((res)=>{
            setSubmitting(false);
            if(res.data.status){
                Cookies.set('_jwtToken',res.data.token);
                setAuthToken(res.data.token);
                router.replace('/');
            }
        }).catch((err)=>{
            setSubmitting(false);
            const msg = err.response && err.response.data?err.response.data.msg:'Failed. Please try again!';
            msgRef.current.show({type:'danger', text:msg});
        });
    };

    //Code Enter
    const codeEnter = (code)=>{
        setCode(code);
    };
    return(
        <div className={style.rest}>
            <Title>Account verification</Title>
            <div className={style.wkLoginContent}>
                <div className='text-center mb-4'>
                    <h4>অ্যাকাউন্ট সত্যায়িত করুন</h4>
                </div>
                <hr/>
                <Msg generateRef={msgRef} />
                <ResetComponentOtp codeEnter={codeEnter} />
                <div className='my-4'>
                    <span className='float-left'><Button type="button" className='wk-general-button' disabled={submitting || code.length !== 6} onClick={codeConfirm}>সাবমিট </Button></span>
                    { !formSubmitting &&    <span className='float-right'><a href="" onClick={reSendCode} className={style.wkLoginLink} >পুনরায় কোড পাঠিয়ে দিন</a></span>}
                    { formSubmitting &&   <span className='float-right'><a href=""  className={style.wkLoginLink} >পাঠানো হচ্ছে......</a></span>}

                </div>


            </div>
        </div>

    )
}
export default ResetComponent;