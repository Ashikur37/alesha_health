import React,{useState} from "react";
import {Form, Row, Col} from "react-bootstrap";
import TimeSection from "./AppointmentSections/TimeSection";
import PrescriptionSection from "./AppointmentSections/PrescriptionSection";
import PaymentSection from "./AppointmentSections/PaymentSection";
import style from './SingleAppointmentPaymentTabSection.module.css';


export default function () {
    return(

        <div className={style.Prescription}>
           <div className={style.wkPaymentRules}>
               <p>০১. বিকাশ থেকে পেমেন্ট অপসন সিলেক্ট করুন।</p>
               <p>০২.মার্চেন্ট নম্বর : <span className={style.wkPaymentNumber}>০১৭২০১২৩৩২৩</span> </p>
               <p>০৩. রেফারেন্স ঘরে আপনার এপয়েন্টমেন্ট নম্বর <span className={style.wkPaymentNumber}>০১২৩২৪</span> টি লিখুন।</p>
               <p>০৪. কাউন্টার ০১ বসিয়ে দিন। </p>
               <p>০৫. পেমেন্ট কনফার্ম করুন। </p>
           </div>
            <div className={style.wkVarifiedInput}>
                <p className={style.wkPaymentConfromText}>পেমেন্ট ভ্যারিফাইড করুন </p>
                <Row>
                    <Col lg={8}>
                        <Form>
                            <Row className="no-gutters">
                                <Col sm={8}>
                                    <Form.Control placeholder="TrxID" className="wk-select-input my-2" />
                                </Col>
                                <Col sm={4}>
                                    <button className={"wk-general-button my-2"}>কনফার্ম </button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={4}></Col>
                </Row>

                <p className={style.wkPaymentStatusText}>পেমেন্ট স্টেটাস : <span className={style.wkConformTextColo}> কমপ্লিট</span> <span className={style.wkPaymentIncompeteText}>ইনকমপ্লিট</span></p>
            </div>
            <div className={style.wkImportantNote}>
                <p className={style.wkNote}>নোট :</p>
                <p>০১. প্যামেন্ট কমপ্লিট করা না পর্যন্ত আপনি ডাক্তারের সাথে কথা বলতে পারবেন না। </p>
                <p>০২. কোনো কারণে ডাক্তারের সাথে কথা না হলে / পেমেন্ট করার পর পেমেন্ট ক্যানসেল হলে পেমেন্ট ফেরত দেওয়া  হবে না। </p>
                <p>০৩. পেমেন্ট ফেরত পেতে আমাদের সাপোর্ট সেন্টারে যোগাযোগ করুন। </p>
            </div>
        </div>
    )
}