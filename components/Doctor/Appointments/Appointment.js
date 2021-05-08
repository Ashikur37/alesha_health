import {Row, Col} from 'react-bootstrap';
import style from './Appointments.module.css';
import Date2Human from "../../../functions/Date2Human";
import React, {useState} from "react";
import Link from "next/link";

function Appointment({ index,appointment }) {
    const [status,setStatus] = useState(appointment.status);
    const statusClass = ['wkCardAreaCanceled', 'wkCardArea', 'wkCardAreaSuccess',];

    return (
        <>
            <div className={style[statusClass[status]]}>
                <Row>
                    <Col md={1} className="my-auto">
                        {(index+1).toString().padStart(2,0)}
                    </Col>
                    <Col md={2} className="my-auto">
                        <div className="text-center">
                            {/*<img src={process.env.SERVER_URL+'/public/doctors/profile_pic/'+appointment.doctor_image} alt="Doctor Image" style={{width:"100px", height: "auto", padding:"10px"}}/>*/}
                            <figure className="figure">
                                <img src="../../../img/placeholder/125x125.svg" className="figure-img img-fluid" alt="A generic square placeholder image." />
                            </figure>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={style.wkDoctorDArea}>
                            <p className={style.wkDATime}>
                                <span className="mr-3">Time: {Date2Human(new Date(appointment.appointment_date+' '+appointment.time),{time:true})}</span>
                                <span>Serial: {appointment.serial}</span>
                            </p>

                            <a href="#" className={style.wkDoctorName}>Shamim</a>
                            <p className={style.wkDoctorDegrees}>{appointment.doctor_speciality}</p>
                            <p>Appointment Type: {appointment.appointment_type_title}</p>
                            <div>
                                { status === 2 && <button className={style.wkApCompleted}>Completed</button> }
                                { status === 0 && <button className={style.wkApCanceled}>Canceled</button> }
                                { status === 1 && <button className={style.wkApPending}>Pending</button> }
                                <Link href="/doctor/appointments/[id]" as={'/doctor/appointments/'+appointment.id}>
                                    <a className={style.wkApCompleted}>বিস্তারিত দেখুন</a>
                                </Link>

                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="my-auto">
                        <div>
                            <p className={style.wkAppFee}>Fee: {parseInt(appointment.fee).toFixed(2)}</p>
                            <p>
                                Payment Status:
                                { parseInt(appointment.payment_status) !== 2 && <span className={style.wkApStatusPending}> Pending</span> }
                                { parseInt(appointment.payment_status)  === 2&& <span className={style.wkApStatusSuccess}> Completed</span> }
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Appointment;