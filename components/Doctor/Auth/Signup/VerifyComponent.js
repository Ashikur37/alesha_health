import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './VerifyComponent.module.css';
import VerifyComponentOtp from "./VerifyComponentOtp";
import server from "../../../../server";
import {useRef, useState} from "react";
import Msg from "../../../Msg";
import ErrorHandler from "../../../../functions/ErrorHandler";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import doctorServer, {setAuthToken} from "../../../../doctorServer";

function VerifyComponent({resendCodeDone, phone, password, verificationId}) {
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
        return doctorServer.post('/doctor/account-validation-resend',{phone, id: verificationId}).then((res)=>{
            setFormSubmitting(false);
            if(res.data.status){
                resendCodeDone({
                    verification_id: res.data.id
                });
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
        return doctorServer.post('/doctor/account-validation',{phone,code, password}).then((res)=>{
            setSubmitting(false);
            if(res.data.status){
                const token = res.data.token;
                setAuthToken(token);
                Cookies.set('_doctorJwtToken',token);
                Cookies.set('_notCompleted',true);
                router.replace('/doctor/profile-completion');
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
            <div className={style.wkLoginContent}>
                <div className='text-center mb-4'>
                    <h4>অ্যাকাউন্ট সত্যায়িত করুন</h4>
                </div>
                <hr/>
                <Msg generateRef={msgRef} />
                <VerifyComponentOtp codeEnter={codeEnter} />
                <div className='my-4'>
                    <span className='float-left'><Button type="button" className='wk-general-button' disabled={submitting || code.length !== 6} onClick={codeConfirm}>সাবমিট </Button></span>
                    { !formSubmitting &&    <span className='float-right'><a href="" onClick={reSendCode} className={style.wkLoginLink} >পুনরায় কোড পাঠিয়ে দিন</a></span>}
                    { formSubmitting &&   <span className='float-right'><a href=""  className={style.wkLoginLink} >পাঠানো হচ্ছে......</a></span>}

                </div>


            </div>
        </div>

    )
}
export default VerifyComponent;