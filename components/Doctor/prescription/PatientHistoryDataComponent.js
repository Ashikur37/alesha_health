import React, {Component} from "react";
import {Row, Col} from 'react-bootstrap'
import style from './PatientHistoryDataComponent.module.css'

function PatientHistoryDataComponent() {

        return(
            <div>
                <div className="container px-0">
                    <a href="#" className={style.wkHistoryPrescriptionLink}>
                        <div className={style.wkHistoryData}>
                            <Row>
                                <Col  xs={1}>01</Col>
                                <Col>21 July, 2020</Col>
                                <Col>Prescription: 1. cervix <br/> 2.Asparaginase Erwinia</Col>
                                <Col>Prescription: 1. Adrenocorticotropic Hormone<br/> 2.Biophysical Profile (BPP)</Col>
                            </Row>
                        </div>
                    </a>
                </div>
            </div>
        );

}

export default PatientHistoryDataComponent;