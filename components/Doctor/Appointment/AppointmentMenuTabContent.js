import React, {Component} from "react";
import style from "../Appointment/AppointmentMenuTabContent.module.css";
import {Button} from "react-bootstrap";
import className from 'classnames';
import Link from 'next/link'

const AppointmentMenuTabContent =({page})=> {
    return (
        <div className='container my-5'>
            <div className={style.wkAppoinmentDetalilsButton}>
                <Link href={'/doctor/appointments/today'}>
                    <a  className={className(style.WkButtonResponsive ,style.wkAppointmentGeneralButton,{[style.wkAppointmentActiveButton]:page==='TodayAppointment'})}>Today's Appointment</a>
                </Link>
                <Link href="/doctor/appointments">
                    <a  className={className(style.WkButtonResponsive ,style.wkAppointmentGeneralButton,{[style.wkAppointmentActiveButton]:page==='appointments'})}>Appointment Archive</a>
                </Link>
                <Link href='/doctor/schedules'>
                    <a  className={className(style.WkButtonResponsive ,style.wkAppointmentGeneralButton,{[style.wkAppointmentActiveButton]:page==='AppointmentSchedules'})}>Schedules</a>
                </Link>
                <Link href='/doctor/appointment-settings'>
                    <a  className={className(style.WkButtonResponsive ,style.wkAppointmentGeneralButton,{[style.wkAppointmentActiveButton]:page==='AppointmentSetting'})}>Appointment Setting</a>
                </Link>
            </div>

        </div>
    );
};


export default AppointmentMenuTabContent;