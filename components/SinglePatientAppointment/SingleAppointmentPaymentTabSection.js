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
               <p>??????. ??????????????? ???????????? ????????????????????? ???????????? ????????????????????? ???????????????</p>
               <p>??????.??????????????????????????? ??????????????? : <span className={style.wkPaymentNumber}>?????????????????????????????????</span> </p>
               <p>??????. ??????????????????????????? ????????? ??????????????? ???????????????????????????????????? ??????????????? <span className={style.wkPaymentNumber}>??????????????????</span> ?????? ??????????????????</p>
               <p>??????. ???????????????????????? ?????? ??????????????? ???????????? </p>
               <p>??????. ????????????????????? ????????????????????? ??????????????? </p>
           </div>
            <div className={style.wkVarifiedInput}>
                { !paymentDataLoad && <AppointmentPrescriptionPlaceholders /> }
                { paymentDataLoad && !paymentData && <SingleAppointmentPaymentTabSectionForm /> }
                { paymentDataLoad && paymentData && (
                   <>
                        { paymentData.status === 0 && <p>??????????????? ????????????????????? ????????????????????? ???????????? ???????????? ???????????? ????????? ????????????????????? ???????????? </p> }
                       <p className={style.wkPaymentStatusText}>
                           ????????????????????? ????????????????????? :
                           { paymentData.status === 1 && <span className={style.wkConformTextColo}> ?????????????????????</span> }
                           { paymentData.status === 0 && <span className={style.wkPaymentIncompeteText}>?????????????????????</span> }
                       </p>
                   </>
                ) }
            </div>
            <div className={style.wkImportantNote}>
                <p className={style.wkNote}>????????? :</p>
                <p>??????. ??????????????????????????? ????????????????????? ????????? ?????? ????????????????????? ???????????? ??????????????????????????? ???????????? ????????? ???????????? ?????????????????? ????????? </p>
                <p>??????. ????????????????????? ???????????? ???????????? ?????????????????? ????????????????????? ???????????????????????? ????????????????????? ??????????????? </p>
            </div>
        </div>
    )
}