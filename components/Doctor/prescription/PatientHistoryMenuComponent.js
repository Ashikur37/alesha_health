import React, {Component} from "react";
import {Row, Col} from 'react-bootstrap';
import style from './PatientHistoryMenuComponent.module.css'
import PatientHistoryDataComponent from "./PatientHistoryDataComponent";

function PatientHistoryMenuComponent() {

        return(
            <div>
                <div className="container">
                    <div className={style.wkPatientHistryHeading}>

                        <Row>
                            <Col xs={1}>SL</Col>
                            <Col>Date</Col>
                            <Col>Prescription</Col>
                            <Col>Test</Col>
                        </Row>
                    </div>

                    <PatientHistoryDataComponent/>
                    <PatientHistoryDataComponent/>
                    <PatientHistoryDataComponent/>
                    <PatientHistoryDataComponent/>


                </div>
            </div>
        );

}

export default PatientHistoryMenuComponent;