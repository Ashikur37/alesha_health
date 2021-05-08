import React from "react";
import {Col,Row,Form,Button,Container} from 'react-bootstrap';
import style from './SingleDoctor.module.css';

export default function (props) {
    return(
        <div className={style.SingleDoctor}>
            <div className="row justify-content-center">
                <div className={"card " + style.DoctorCard} style={{width:"100%"}}>
                    <div className={style.DoctorCardImgSection}>
                        <img className={"card-img-top " + style.DoctorCardImg} src={props.dImage} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h6 className={"card-title " + style.DoctorCardTitle}>{props.dName}</h6>
                        <p className={"card-text " + style.DoctorCardText}>{props.dDesignation}</p>
                        <a href="#" className={"btn float-center " + style.DoctorCardButton}>এপয়েন্টমেন্ট নিন </a>
                    </div>
                </div>
            </div>
        </div>
    );
}