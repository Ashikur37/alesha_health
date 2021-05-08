import React from "react";
import style from './Registration.module.css';

export default function () {
    return(
        <div>
            <div className={style.ConfirmRegistration}>
                <div className="text-center mt-5 mb-5">
                    <h3>মেডিকল রেজিস্ট্রেশন/ লগইন করুন </h3>
                    <span className={style.confirmRegistrationHeaderSpan}>আপনার একাউন্ট নির্বাচন করুন</span>
                </div>
                <div className={style.ConfirmRegistrationRowWidth}>
                    <div className="row ">
                        <div className="col-md-3 col-sm-3 mt-2">
                            <div className={style.confirmRegistrationImagePanel}>
                                <a href="/login">
                                    <img src="../../../static/img/home/doctors/registration_user.png" alt="ইউসার" className={style.confirmRegistrationImagePanelImg}/>
                                    <p className={"text-center mt-2 " + style.confirmRegistrationText}>ইউজার</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 mt-2">
                            <div className={style.confirmRegistrationImagePanel}>
                                <a href="/doctor/login">
                                    <img src="../../../static/img/home/doctors/registration_doctor.png" alt="ডাক্তার" className={style.confirmRegistrationImagePanelImg}/>
                                    <p className={"text-center mt-2 " + style.confirmRegistrationText}>ডাক্তার</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 mt-2">
                            <div className={style.confirmRegistrationImagePanel}>
                                <a href="/nerce/login">
                                    <img src="../../../static/img/home/doctors/registration_nurse.png" alt="নার্স" className={style.confirmRegistrationImagePanelImg}/>
                                    <p className={"text-center mt-2 " + style.confirmRegistrationText}>নার্স</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 mt-2">
                            <div className={"mr-4 " + style.confirmRegistrationImagePanel}>
                                <a href="/agent/login" >
                                    <img src="../../../static/img/home/doctors/registration_user.png" alt="এজেন্ট" className={style.confirmRegistrationImagePanelImg}/>
                                    <p className={"text-center mt-2 " + style.confirmRegistrationText}>এজেন্ট</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}