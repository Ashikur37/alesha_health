import React from "react";
import {} from 'react-bootstrap'
import style from './ConsultingOrComplaining.module.css';

export default function () {
    return(
        <div>
            <h3 className={"text-center mt-5"}>পরামর্শ অথবা অভিযোগ পাঠাতে</h3>
            <div className={"mt-5 row " + style.consultingComplaining}>
                <div className={"col-md-6 " + style.consultingComplainingLeft} >
                    <img src="../../static/img/home/doctors/consultandcomplaining.jpg" alt="" className={style.leftImage}/>
                </div>
                <div className={"col-md-6 " + style.consultingComplainingRight}>
                    <div className={style.RightForm}>
                        <div className="form-group">
                            <input type="email" className="form-control wk-select-input mt-3"
                                    placeholder="নাম"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control wk-select-input mt-4 "
                                    placeholder="মোবাইল নাম্বার"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control wk-select-input mt-4" aria-label="With textarea" rows="6" placeholder="আপনার মতামত"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className={"wk-general-button form-control mt-4 " + style.rightFormButton}>পাঠিয়ে দিন </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}