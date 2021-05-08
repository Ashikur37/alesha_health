import React from "react";
import {Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import style from './MentallyHealthService.module.css'

export default function () {
    return(
            <div className="mt-5">
                <div className={style.MentalHealthSection}>
                    <div className="text-center">
                        <h3>২৪/৭ লাইভ ডাক্তার সেবা</h3>
                        <span className={style.liveDoctorServiceHeaderSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ MBBS সির্টিফাইড ডাক্তার সেবা</span>
                    </div>
                    <div className="row">
                        <div className={"col-md-7 " + style.NurseSectionImageSection} >
                            <img src="../../../static/img/home/doctors/Live Doctor.png" alt="" className={style.NurseSectionImage}/>
                        </div>
                        <div className="col-md-5">
                            <div className={style.liveDoctorServicePanel}>
                                <h4>ডাক্তার সার্ভিস</h4>
                                <p className={style.wkliveDoctortext}>অভিজ্ঞ ডাক্তার আপনাকে ২৪ ঘন্টা সেবা দিতে প্রস্তুত.</p>
                                    <ul style={{listStyle:"none"}}>
                                        <li>
                                            <p className={style.wkLiveDoctorText}><span className={style.wkliveDoctorIcon}><i className="material-icons" style={{background:"#00695c", borderRadius: "50%",  padding: "3px", margin:"4px", color:"white", fontSize:"1rem"}}>done</i></span><span className={style.wkliveDoctortext}>বাসায় রোগীর সেবা যত্ন করার জন্য নার্স প্রয়োজন হয়। আমাদের প্লাটফর্মে আছেন অভিজ্ঞ ও পেশাদার নার্স।</span></p>
                                        </li>
                                        <li>
                                            <p className={style.wkLiveDoctorText}><span className={style.wkliveDoctorIcon}><i className="material-icons" style={{background:"#00695c", borderRadius: "50%",  padding: "3px", margin:"4px", color:"white", fontSize:"1rem" }}>done</i></span><span className={style.wkliveDoctortext}>ওয়েব অথবা মোবাইল অ্যাপলিকেশন ব্যবহার করে সহজে সার্ভিস রিকোয়েস্ট পাঠাতে পারেন।</span></p>
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