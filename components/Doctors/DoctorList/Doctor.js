import {Button, Col, Row} from 'react-bootstrap';
import style from './Doctor.module.css';
import Link from 'next/link'
import React from "react";

function Doctor({ doctor }) {
    return(
        <Row className={style.doctorItem}>
            <Col lg={4}  >
                <div className="row justify-content-center">
                    <img className={'rounded-circle mt-3 img-fluid text-center '+style.ProfileImage}
                         src={process.env.SERVER_URL+'/public/doctors/profile_pic/'+doctor.image}
                         alt="First slide"
                    />
                </div>
            </Col>
            <Col lg={8} >
                <div>

                    <h5 className="mt-3"><span className={style.wkDocHeadingName}>{doctor.name}</span></h5>
                    <h5 className=""><small><b>{doctor.speciality}</b></small></h5>
                    <p>{doctor.short_info}</p>
                    <div className="my-4">
                        <Link href="/doctors/[id]/[doctor_slug]" as={'/doctors/'+doctor.id+'/'+doctor.slug}>

                            <a className= {style.doctorAppointmentBtn}>এপয়েন্টমেন্ট</a>
                        </Link>
                    </div>
                </div>
            </Col>
            {/*<Col md={3}>*/}
            {/*    <div className="row justify-content-center">*/}
            {/*        */}
            {/*    </div>*/}
            {/*</Col>*/}
        </Row>
    )
}
export default Doctor;