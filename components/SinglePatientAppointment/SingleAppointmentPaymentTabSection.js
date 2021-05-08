import React, {useEffect, useRef, useState} from "react";
import {Form, Row, Col} from "react-bootstrap";
import style from './SingleAppointmentPaymentTabSection.module.css';
import Msg from "../Msg";
import userServer from "../../userServer";
import {useRouter} from "next/router";
import ErrorHandler from "../../functions/ErrorHandler";
import commonValidations from "../../validations/commonValidations";
import AppointmentPrescriptionPlaceholders from "../Doctor/AppointmentDetails/AppointmentPrescriptionPlaceholders";
import SingleAppointmentPaymentTabSectionForm from "./SingleAppointmentPaymentTabSectionForm";


export default function () {
    const router = useRouter();
    const {id} = router.query;

    let isMounted = true;
    const [errors,setErrors] = useState({});
    const [formSubmitting,setFormSubmitting] = useState(false);
    const [paymentDataLoad,setPaymentDataLoad] = useState(false);
    const [paymentData,setPaymentData] = useState(false);

    const [formState,setFormState] = useState({
        bkash_from: '',
        amount: '',
    });

    //ref
    const msgRef = useRef();

    useEffect(()=>{
        loadPaymentData();
    },[]);

    //on change input
    const onChangeInput = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setFormState(prev=>{
            return  {...prev,[field]:value};
        })
    };

    const loadPaymentData = ()=>{
        return userServer.get('/appointment-schedules/'+id+'/bkash-payment').then((res)=>{
            if(res.data.paymentInfo){
                setPaymentData(res.data.paymentInfo);
            }
            setPaymentDataLoad(true);
        }).catch((err)=>{

        });
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

        <div className={style.Prescription}>
           <div className={style.wkPaymentRules}>
               <p>০১. বিকাশ থেকে পেমেন্ট অপসন সিলেক্ট করুন।</p>
               <p>০২.মার্চেন্ট নম্বর : <span className={style.wkPaymentNumber}>০১৭২০১২৩৩২৩</span> </p>
               <p>০৩. রেফারেন্স ঘরে আপনার এপয়েন্টমেন্ট নম্বর <span className={style.wkPaymentNumber}>০১২৩২৪</span> টি লিখুন।</p>
               <p>০৪. কাউন্টার ০১ বসিয়ে দিন। </p>
               <p>০৫. পেমেন্ট কনফার্ম করুন। </p>
           </div>
            <div className={style.wkVarifiedInput}>
                { !paymentDataLoad && <AppointmentPrescriptionPlaceholders /> }
                { paymentDataLoad && !paymentData && <SingleAppointmentPaymentTabSectionForm /> }
                { paymentDataLoad && paymentData && (
                   <>
                        { paymentData.status === 0 && <p>প্লিজ পেমেন্ট কনফার্ম করার জন্য কিছু সময় অপেক্ষা করুন </p> }
                       <p className={style.wkPaymentStatusText}>
                           পেমেন্ট স্টেটাস :
                           { paymentData.status === 1 && <span className={style.wkConformTextColo}> কমপ্লিট</span> }
                           { paymentData.status === 0 && <span className={style.wkPaymentIncompeteText}>পেন্ডিং</span> }
                       </p>
                   </>
                ) }
            </div>
            <div className={style.wkImportantNote}>
                <p className={style.wkNote}>নোট :</p>
                <p>০১. প্যামেন্ট কমপ্লিট করা না পর্যন্ত আপনি ডাক্তারের সাথে কথা বলতে পারবেন না। </p>
                <p>০৩. পেমেন্ট ফেরত পেতে আমাদের সাপোর্ট সেন্টারে যোগাযোগ করুন। </p>
            </div>
        </div>
    )
}