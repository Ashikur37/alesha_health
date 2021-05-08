import React, {useContext} from "react";
import {ProfileCompletionContext} from "../../../../../context/ProfileCompletionContext";
import style from "../../../../Doctor/Registration/DoctorRegistration.module.css";

export default function({goNextStep ,  msgRef}) {

    // context
    const {context, setContext}=useContext(ProfileCompletionContext);

    return (
        <>
            {context.personalInfo.image && <img src={process.env.SERVER_URL+'/public/doctors/profile_pic/'+context.personalInfo.image} alt="..." className={"img-thumbnail "+style.inputImg} />}
           <p><i>Name:</i> { context.personalInfo.names && context.personalInfo.names.en }</p>
           <p><i>নাম:</i> { context.personalInfo.names && context.personalInfo.names.bn }</p>
           <p><i>Email:</i> { context.personalInfo.email }</p>
           <p><i>Present Address:</i> { context.personalInfo.present_address }</p>
           <p><i>Permanent Address:</i> { context.personalInfo.permanent_address }</p>
           <p><i>Youtube Video Url:</i> { context.personalInfo.video }</p>
           <p><i>NID:</i> { context.personalInfo.nid }</p>
            <figure className="figure mr-3">
                <figcaption className="figure-caption"><b><i>Front Side</i></b></figcaption>
                <img src={process.env.SERVER_URL+'/doctor-files/'+context.personalInfo.doctor_id+'/nid/'+context.personalInfo.nid_image_front+'?access=admin'} className={"figure-img img-fluid rounded "+style.inputImg}  alt="Not Found" />
            </figure>
            <figure className="figure">
                <figcaption className="figure-caption"><b><i>Back Side</i></b></figcaption>
                <img src={process.env.SERVER_URL+'/doctor-files/'+context.personalInfo.doctor_id+'/nid/'+context.personalInfo.nid_image_back+'?access=admin'} className={"figure-img img-fluid rounded "+style.inputImg}   alt="Not Found" />
            </figure>
        </>
    )
}