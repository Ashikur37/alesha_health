import React from "react";
import style from './LiveDoctorQuestionSection.module.css';
import LiveDoctorQuestion from "./LiveDoctorQuestion/LiveDoctorQuestion";

export default function () {
    return(
        <div className={style.liveDoctorQuestionSection}>
            <div className="text-center mt-5 mb-5">
                <h3>সাধারণ জিজ্ঞাসা</h3>
                <span className={style.liveDoctorQuestionSectionSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ MBBS সির্টিফাইড ডাক্তার সেবা</span>
            </div>
            <LiveDoctorQuestion/>
            <LiveDoctorQuestion/>
            <LiveDoctorQuestion/>
        </div>
    )
}