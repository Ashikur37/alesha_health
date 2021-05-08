import style from "./BkashPayment.module.css";
import AppointmentPrescriptionPlaceholders from "../../Doctor/AppointmentDetails/AppointmentPrescriptionPlaceholders";
import React, {useEffect, useState} from "react";
import GlobalPlaceholders from "../../Placeholders/GlobalPlaceholders";
import adminServer from "../../../adminServer";
import BkashPaymentItems from "./BkashPaymentItems";
import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
let cancel;
export default function BkashPayment () {
    const [paymentsData, setPaymentsData] = useState(false);
    const [filter,setFilter]= useState({
        status: "0"
    });
    //const [paymentsData, setPaymentsData] = useState({"total":2,"data":[{"id":3,"schedule_id":28,"user_id":1,"bkash_from":"01303127725","amount":400,"status":0,"created_at":"2020-05-19 20:21:55","updated_at":"2020-05-19 20:21:55","name":"Nurun Nobi Shamim","phone":"01303127725","appointment_date":"2020-05-10","time":"23:00:00","serial":4,"fee":380},{"id":2,"schedule_id":28,"user_id":1,"bkash_from":"01303127725","amount":500,"status":2,"created_at":"2020-05-19 04:17:20","updated_at":"2020-05-19 04:17:20","name":"Nurun Nobi Shamim","phone":"01303127725","appointment_date":"2020-05-10","time":"23:00:00","serial":4,"fee":380}],"current_page":1,"per_page":10});
    useEffect(()=>{
        loadPayments(filter,1);
    },[]);
    const loadPayments = (filter, page)=>{
        cancel && cancel();
        const params = {...filter, page};
        adminServer.get('/admin/bkash-payment',{
            params,
            cancelToken: new CancelToken((c)=>{
                cancel = c
            })
        }).then(res=>{
            setPaymentsData({...res.data.paymentsBkash,_isLoading: false});
        });
    };
    const pageChanged =  (current, pageSize)=>{
        setPaymentsData(prev=>{
            return {...prev,_isLoading: true}
        });
        loadPayments(filter,current);
    };
    const filterOnChange = (filters) =>{
        setPaymentsData(false);
        setFilter({...filters});
        loadPayments(filters, 1);
    };
    return(
        <div className={"container " + style.Container} >
            <BkashPaymentItems pageChanged={pageChanged} paymentsData={paymentsData} defaultFilter={filter} filterChanged={filterOnChange} />
        </div>
    )
}