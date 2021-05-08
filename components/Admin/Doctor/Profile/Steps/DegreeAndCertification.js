import React, {useContext} from "react";
import {ProfileCompletionContext} from "../../../../../context/ProfileCompletionContext";
import style from "../../../../Doctor/Registration/DoctorRegistration.module.css";

export default function({goNextStep ,  msgRef}) {

    // context
    const {context, setContext}=useContext(ProfileCompletionContext);

    return (
        <>
            <figure className="figure mr-3">
                <figcaption className="figure-caption"><b><i>BMDC Reg. no: {context.certificationInfo.bmdc_reg}</i></b></figcaption>
                <img src={process.env.SERVER_URL+'/doctor-files/'+context.certificationInfo.doctor_id+'/bmdc/'+context.certificationInfo.bmdc_reg_image+'?access=admin'} className={"figure-img img-fluid rounded "+style.inputImg}  alt="Not Found" />
            </figure>
            {
                context.certificationInfo.certificates.map((ele,index)=>(
                    <figure className="figure mr-3">
                        <figcaption className="figure-caption"><b><i>{ele.degree}</i></b></figcaption>
                        <img src={process.env.SERVER_URL+'/doctor-files/'+context.certificationInfo.doctor_id+'/certificate/'+ele.image+'?access=admin'} className={"figure-img img-fluid rounded "+style.inputImg}  alt="Not Found" />
                    </figure>
                ))
            }


        </>
    )
}