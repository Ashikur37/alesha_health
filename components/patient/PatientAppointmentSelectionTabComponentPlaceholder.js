import {Container,Button, Row, Col} from 'react-bootstrap';
import style from './PatientAppointmentVideoComponent.module.css';
import React from "react";


function PatientAppointmentSelectionTabComponentPlaceholder() {
    return(
        <div>
            <Container className="my-3">
                <Row className="ph-item no-gutters" style={{background:'#f6f5f3',border: 'unset',padding:'10px'}}>
                    <Col md={12}>
                        <div className="ph-row">
                            <div className="ph-col-2 big mr-1"></div>
                            <div className="ph-col-2 big"></div>
                        </div>
                        <div className="ph-row">
                            <div className="ph-col-4 big mr-1"></div>
                            <div className="ph-col-6 big"></div>
                        </div>
                        <div className="ph-row">
                            <div className="ph-col-6 big" style={{height:'40px'}}></div>
                        </div>
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                            <div className="ph-col-6 big" style={{height:'40px'}}></div>
                        </div>
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                            <div className="ph-col-6 big" style={{height:'40px'}}></div>
                        </div>
                        <div className="ph-picture"></div>

                    </Col>
                </Row>
            </Container>
        </div>);

}

export default PatientAppointmentSelectionTabComponentPlaceholder;