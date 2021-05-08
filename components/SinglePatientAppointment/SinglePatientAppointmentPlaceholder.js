import React, {useEffect, useState} from "react";
import style from './SinglePatientAppointment.module.css'
import SingleAppointmentTabSection from "./SingleAppointmentTabSection";
import SingleAppointmentTimeTabSection from "./SingleAppointmentTimeTabSection";
import SingleAppointmentPrescriptionTabSection from "./SingleAppointmentPrescriptionTabSection";
import SingleAppointmentPaymentTabSection from "./SingleAppointmentPaymentTabSection";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import io from "socket.io-client";
import {Col, Modal, Row} from "react-bootstrap";
import window from "global";

export default function () {

    return(
        <div className={"container"}>
            <div className={"row "}  style={{backgroundColor:'unset',border: 'unset'}}>
                <div className="col">
                    <div className="ph-item py-0" style={{backgroundColor:'unset',border: 'unset'}}>
                        <div className="ph-row">
                            <div className="ph-col-4 big empty"></div>
                            <div className="ph-col-4 big"></div>
                            <div className="ph-col-4 big empty"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ph-item ph-item-bg-none py-0" style={{backgroundColor:'unset',border: 'unset'}}>
                <div>
                    <div className={"row "  + style.singlePatientAppointment}>
                        <div className="col-md-6">
                            <div className="ph-row">
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-6 big empty"></div>
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-4 big mr-2"></div>
                                <div className="ph-col-4 big"></div>
                                <div className="ph-col-4 big mr-2"></div>
                                <div className="ph-col-4 big"></div>
                                <div className="ph-col-4 big mr-2"></div>
                                <div className="ph-col-4 big"></div>
                                <div className="ph-col-4 big mr-2"></div>
                                <div className="ph-col-4 big"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ph-row">
                                <div className="mt-3 ph-col-6 big ph-radius" style={{marginTop:'50px !important'}}></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="ph-row">
                                <div className="mt-1 ph-col-6 big"></div>
                                <div className="mt-1 ph-col-6 big"></div>
                            </div>
                            <div className="ph-row">
                                <div className="ph-col-4 big" style={{borderRight: '1px solid #fff'}}></div>
                                <div className="ph-col-4 big" style={{borderRight: '1px solid #fff'}}></div>
                                <div className="ph-col-4 big"></div>
                            </div>
                            <div className="ph-row">
                                <div className="mt-1 ph-col-6 big"></div>
                                <div className="mt-1 ph-col-6 big"></div>
                                <div className="mt-1 ph-col-6 big"></div>
                                <div className="mt-1 ph-col-6 big"></div>
                                <div className="mt-1 ph-col-6 big"></div>
                                <div className="mt-1 ph-col-6 big"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}