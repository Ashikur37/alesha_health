import React from "react";
import {Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import style from './GeneralService.module.css'

export default function () {
    return(
            <div className="mt-5">
                <div className={style.GeneralHealthHealthSection}>
                    <div className="text-center">
                        <h3>সাধারণ স্বাস্থ সেবা</h3>
                        <span className={style.liveDoctorServiceHeaderSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ MBBS সির্টিফাইড ডাক্তার সেবা</span>
                    </div>
                    <div className="row">
                        <div className={"col-md-7 " + style.GeneralImageSection} >
                            <img src="../../../static/img/home/doctors/General Health.png" alt="" className={style.NurseSectionImage}/>
                        </div>
                        <div className="col-md-5">
                            <div className={style.liveDoctorServicePanel}>
                                <h4>সাধারণ সার্ভিস</h4>
                                <p className={style.wkliveDoctortext}>অভিজ্ঞ ডাক্তার আপনাকে ২৪ ঘন্টা সেবা দিতে প্রস্তুত.</p>
                                    <ul style={{listStyle:"none"}}>
                                        <li>
                                            <p className={style.wkLiveDoctorText}><span className={style.wkliveDoctorIcon}><i className="material-icons" style={{background:"#00695c", borderRadius: "50%",  padding: "3px", margin:"4px", color:"white", fontSize:"1rem"}}>done</i></span><span className={style.wkliveDoctortext}>মেডিকল মোবাইল ও ওয়েব অ্যাপলিকেশন ব্যবহার করে এপয়েন্টমেন্ট নিয়ে অডিও অথবা ভিডিও কলের মাধ্যমে অভিজ্ঞ ডাক্তারের কাছে থেকে বিপাক স্বাস্থ্য (ওজন কমানো,ফ্যাটি লিভার ডিজিজ,হাইপারটেনশন),হজম স্বাস্থ্য(অম্বল,ক্রোনস ডিজিজ,আলসারেটিভ কোলাইটিস,আইবিএস,কোষ্ঠকাঠিন্য) সহ, বাত সহ নানারকম স্বাস্থ্যসেবা পেতে পারেন।</span></p>
                                        </li>
                                    </ul>
                                {/*<div className="text-right">*/}
                                {/*    <Button className={style.MentalHealthSectionDoctors}>*/}
                                {/*        <a href="#" >ডাক্তার গণ</a>*/}
                                {/*    </Button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}