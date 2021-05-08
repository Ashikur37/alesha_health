import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import style from './footer.module.css';


 function AboutMedicalFooter() {
    return(
        <div>
           <Container>
               <div className={style.wkBannarTextOfFooterPages}>
                   <h2>মেডিকল  সম্পর্কে </h2>
               </div>
               <div className={style.wkFooterGeneralPageArea}>
                   <p>
                       Medicall Digital Health care ltd.(Medicall) is a digital service based platform from where any one can take health care service using telemedicine technology. Not onlythat Patients can search nearby doctor/nurse and send request for home visit. We also provide Live Doctor service from where Patients can get consultancy from anywhere any time. In rural area Patients are confused about which expert doctor should they visit. Suppose anyone has stomach problem but he goes to neuro specialist and the specialist says why you come here; you should visit a gastro-liver specialist. Both time and money are wasted. People also visit urban area for simple treatment that can be easily solved by using telemedicine technology. Medicall is working with these problems so that people can easily access the healthcare from anywhere any time
                   </p>
                   <h5 className={style.wkDoctorBenefits}>Patient’s Benefits</h5>
                   <ul className={style.wkUl}>

                       <li><span className={style.wkUlCircle}></span>Book appointment on your flexible time</li>
                       <li><span className={style.wkUlCircle}></span>Take online consultancy form expert doctors</li>
                       <li><span className={style.wkUlCircle}></span>Make your own digital medical history/health history so that you can track your health issues.</li>
                       <li><span className={style.wkUlCircle}></span>Download / view digital prescription from anywhere, mso you need not to wory about loosing prescription and many more advantages.</li>
                   </ul>
                   <h5 className={style.wkDoctorBenefits}>Doctor’s Benefits</h5>
                   <ul className={style.wkUl}>
                       <li><span className={style.wkUlCircle}></span>Setup appointment on your flexible time</li>
                       <li><span className={style.wkUlCircle}></span>Personalize visiting fees for new & old patients</li>
                       <li><span className={style.wkUlCircle}></span>Manage online & offline appointments, patients record.</li>
                       <li><span className={style.wkUlCircle}></span>Digital prescription & Digital payment setup.</li>
                   </ul>
               </div>
           </Container>
        </div>
    )
}
export default AboutMedicalFooter;