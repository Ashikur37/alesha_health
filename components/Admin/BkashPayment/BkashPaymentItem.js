import style from "../../patient/persional/Appointments.module.css";
import Pagination from 'rc-pagination';
import Date2Human from "../../../functions/Date2Human";
import {useState} from "react";
import adminServer from "../../../adminServer";
export default function BkashPaymentItem({item}) {
    const [actionLoading, setActionLoading] = useState(false);
    const statusesLabel = ['Pending','Approved','Rejected'];
    const statusesColor = ['text-primary','text-success','text-danger'];
    const action  = (status)=>{
        setActionLoading(true);
        adminServer.put('/admin/bkash-payment/'+item.id+'/action',{
            status
        }).then(res=>{
            item.status = status;
            setActionLoading(false);
        }).catch(err=>{
            setActionLoading(false);
        })
    };
    return <tr>
        <th scope="row">
            {item.name} <br />
            {item.phone}
        </th>
        <td>
            Schedule ID: {item.schedule_id} | Serial: { item.serial } <br/>
            Time: {Date2Human(new Date(item.appointment_date+' '+item.time),{time:true})} <br/>
            Fee: { item.fee }
        </td>
        <td>
            bKash Number: {item.bkash_from} <br/>
            bKash amount: {item.amount}
        </td>
        <td>
            <span className={"clearfix "+statusesColor[item.status]}>Status: { statusesLabel[item.status] }</span>
            {item.status === 0 && <button disabled={actionLoading} onClick={()=>action('1')} className="clearfix wk-general-button wk-sm-btn mb-1">Approve</button>}<br/>
            {item.status === 0 && <button disabled={actionLoading} onClick={()=>action('2')} className="wk-danger-button  wk-sm-btn">Reject</button> }
        </td>
    </tr>
}