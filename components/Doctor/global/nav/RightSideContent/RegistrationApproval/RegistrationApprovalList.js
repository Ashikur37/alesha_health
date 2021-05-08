import React,{useState,useEffect} from "react";
import style from './RegistrationApprovalList.module.css';
import IndivisualApproval from "./RegistrationIndivisualApproval/IndivisualApproval";
import adminServer from "../../../../../../adminServer";
import GlobalPlaceholders from "../../../../../Placeholders/GlobalPlaceholders";

export default function (props) {
    let isMounted = true;
    const [doctors,setDoctors] = useState(false);
    useEffect(()=>{
        adminServer.get('/admin/doctors/reg-approval',{
            params:{

            }
        }).
        then(res=>{
            console.log(res.data.doctors);
            isMounted && setDoctors(res.data.doctors);
        }).catch(err=>console.log(err));
        return()=>{
            isMounted = false
        }
    },[]);

    return(
        <div className={"container mt-3 " + style.registrationApprovalList}>
           <div className={style.registrationApprovalBanner}>
                <h5 className={style.registrationApprovalBannerText}>Doctor/Nurse</h5>
           </div>
            { !doctors && <GlobalPlaceholders rows={10} /> }
            {
                doctors && doctors.length > 0 && doctors.map((doctor,index)=>{
                    return(
                        <IndivisualApproval key={index} doctor={doctor}/>
                    )
                })
            }
            {
                doctors && doctors.length === 0 && <h2 className="text-center">Not found.</h2>
            }
        </div>
    )
}