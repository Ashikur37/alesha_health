import React from "react";
import {Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import style from './MentallyHealthService.module.css'

export default function () {
    return(
            <div className="mt-5">
                <div className={style.MentalHealthSection}>
                    <div className="text-center">
                        <h3>মানসিক স্বাস্থ সেবা</h3>
                        <span className={style.liveDoctorServiceHeaderSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ MBBS সির্টিফাইড ডাক্তার সেবা</span>
                    </div>
                    <div className="row">
                        <div className={"col-md-7 " + style.MentalHealthImageSection}>
                            <img src="../../static/img/home/doctors/mental health.png" alt="" className={style.MentalHealthSectionImage}/>
                        </div>
                        <div className="col-md-5">
                            <div className={style.liveDoctorServicePanel}>
                                <h4>ডাক্তার সার্ভিস</h4>
                                <p className={style.wkliveDoctortext}>অভিজ্ঞ ডাক্তার আপনাকে ২৪ ঘন্টা সেবা দিতে প্রস্তুত.</p>
                                    <ul style={{listStyle:"none"}}>
                                        <li>
                                            <p className={style.wkLiveDoctorText}><span className={style.wkliveDoctorIcon}><i className="material-icons" style={{background:"#00695c", borderRadius: "50%",  padding: "3px", margin:"4px", color:"white", fontSize:"1rem"}}>done</i></span><span className={style.wkliveDoctortext}>বর্তমান জীবনে আমরা অনেকেই নানা রকম মানসিক অবসাদ, হতাশা ও জটিলতায় ভুগি যা খুবই স্বাভাবিক। কিন্তু মানসিক স্বাস্থ্যসেবা সম্পর্কে আমাদের মধ্যে রয়েছে নানা ভুল ধারনা।.</span></p>
                                        </li>
                                        <li>
                                            <p className={style.wkLiveDoctorText}><span className={style.wkliveDoctorIcon}><i className="material-icons" style={{background:"#00695c", borderRadius: "50%",  padding: "3px", margin:"4px", color:"white", fontSize:"1rem" }}>done</i></span><span className={style.wkliveDoctortext}>এছাড়াও মানসিক ডাক্তারের স্বল্পতার কারনে আমরা দিনের পর দিন , মানসিক সমস্যা নিয়ে চলি।</span></p>
                                        </li>
                                        <li>
                                            <p className={style.wkLiveDoctorText}><span className={style.wkliveDoctorIcon}><i className="material-icons" style={{background:"#00695c", borderRadius: "50%",  padding: "3px", margin:"4px", color:"white", fontSize:"1rem" }}>done</i></span><span className={style.wkliveDoctortext}>একসময় যার পরিণতি হয় আত্মহত্যা অথবা সংগঠিত হয় নানা রকম অপরাধ, যা আমাদের সুন্দর জীবনকে এলোমেলো করে। </span></p>
                                        </li>
                                        <li>
                                            <p className={style.wkLiveDoctorText}><span className={style.wkliveDoctorIcon}><i className="material-icons" style={{background:"#00695c", borderRadius: "50%",  padding: "3px", margin:"4px", color:"white", fontSize:"1rem" }}>done</i></span><span className={style.wkliveDoctortext}>মেডিকল ব্যবহার করে যেকোনো সময় অডিও অথবা ভিডিও কলের মাধ্যমে অভিজ্ঞ মানসিক ডাক্তারের সাথে কনসালটেন্সি ও অনলাইন কাউন্সিলিং সেশন করতে পারবেন</span></p>
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