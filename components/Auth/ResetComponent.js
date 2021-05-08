import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './ResetComponent.module.css';
import ResetComponentOtp from "./ResetComponentOtp";
import server from "../../server";
import {useRef, useState} from "react";
import Msg from "../Msg";

function ResetComponent({resetData,codeReSent,codeMatched}) {
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
        return server.post('/password/forgot',{identifier:resetData.phone, id:resetData.id, }).then((res)=>{
            msgRef.current.show({type:'success', text:'Resend success.'});
            setFormSubmitting(false);
            if(res.data.status){
                codeReSent({
                    id: res.data.id,
                    phone: resetData.phone
                })
            }
        }).catch((err)=>{
            setFormSubmitting(false);
            const msg = err.response && err.response.data?err.response.data.msg:'Failed. Please try again!';
            msgRef.current.show({type:'danger', text:msg});
        });
    };

    // submit form
    const codeConfirm = (e)=>{
        e.preventDefault();
        setSubmitting(true);

        msgRef.current.hide();
        return server.post('/password/code',{identifier:resetData.phone,id:resetData.id,code:code}).then((res)=>{
            setSubmitting(false);
            if(res.data.status){
                codeMatched({
                    code: code
                })
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
                    <h4>পাসওয়ার্ড রিকভার করুন </h4>
                </div>
                <hr/>
                <Msg generateRef={msgRef} />
                <ResetComponentOtp codeEnter={codeEnter} />
                <div className='my-4'>
                    <span className='float-left'><Button type="button" className='wk-general-button ' disabled={submitting || code.length !== 6} onClick={codeConfirm}>সাবমিট </Button></span>
                    { !formSubmitting &&    <span className='float-right'><a href="" onClick={reSendCode} className={style.wkLoginLink} >পুনরায় কোড পাঠিয়ে দিন</a></span>}
                    { formSubmitting &&   <span className='float-right'><a href=""  className={style.wkLoginLink} >পাঠানো হচ্ছে......</a></span>}

                </div>


            </div>
        </div>

    )
}
export default ResetComponent;