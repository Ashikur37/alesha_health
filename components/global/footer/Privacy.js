import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import style from './footer.module.css';


 function Privacy() {
    return(
        <div>
           <Container>
               <div className={style.wkBannarTextOfFooterPages}>
                   <h2>গোপনীয়তা নীতিমালা</h2>
               </div>
               <div className={style.wkFooterGeneralPageArea}>
                   <p>This Data Protection and Privacy Statement relates solely to information supplied byyou on this Website. Medicall Digital Healthcare, the Data Controller (Medicall) respects the privacy of your personal information and will treat it confidentially and securely.</p>
                   <p>Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By accessing or using our Services, you accept the practices and policies outlined in this Privacy
                       Policy. You hereby consent that we will collect, use and disclose your Information as set forth in this Privacy Policy. If you are using our Services on behalf of an individual or legal entity other than yourself, you represent that you are authorized by such individual or legal entity to accept this Privacy Policy on such individual’s or legal entity’s behalf.</p>
                   <p>If you do not agree to thetermsof this Privacy Policy, please do not use the Services.</p>
                   <p>We shall use the information that you give to us, or that we otherwise collect about you, in a fair and consistent way and in ways that will enhance the Service you receive. We shall always comply with applicable law and regulations when using information about you. We take information security very seriously. Although no system can be 100% secure, we will do our best to keep your information safe.</p>
                   <p>We may collect and process the following types of information from you or third parties in connection with your use of our Services:</p>
                   <p>Personal User Information –this shall include, for example: (1) your name and contact data (such as your e-mail address, phone number, and billing and physical addresses); (2) your login and password; (3) demographic data (such as your gender, date of birth, location and family status); (4) your communications with your certified healthcare provider and/or with registered medical practitioners (“Providers” and/or “ Doctors”); (5) any information you provide when you contact or communicate with us, including health related data; (6) payment information; (7) insurance information; (8) Personal Health Information and (9) the location of your device through which you access our Services.</p>
                   <p>Non-Personal User Information -We may also gather non-personal user information about your computer or device and how you use our Services. This information is typically anonymous and the analytics that we share for this purpose will not identify you as an individual. The collection of this non-personal data is in order for us to learn more about your and our other users’ online behavior so that we can improve the Services and general marketing to provide a better experience of our brand and cater more to your and our other users’ needs. </p>
                   <p>For the purposes of this Privacy Policy, the Personal User Information, the Personal Health Information and the Non-Personal User Information, as defined above, shall together be regarded as your “Information”.</p>
                   <p>In connection with providing you with our Services, we and our affiliates and serviceproviders may use your Information for a number of purposes, including, but not limited to: </p>
                   <p>(a) verifying your identity, processing your payments and fulfilling your request/orders;</p>
                   <p>(b) communicating with you about our Services or your use of our Services, and sending you communications on behalf of your Providers;</p>
                   <p>(c) ensuring quality customer service by providing you with customer support, responding to your requests or concerns, ensuring that our Services functions properly for you and tailoring our Services to meet your needs;</p>
                   <p>(d) facilitating the provision of healthcare services to you by your Providers, and ensuring your Providers the services and support necessary for healthcare operations;</p>
               </div>
           </Container>
        </div>
    )
}
export default Privacy;