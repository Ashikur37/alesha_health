import {Container,Button, Row, Col} from 'react-bootstrap';
import style from './PatientAppointmentVideoComponent.module.css';
import React from "react";
import ReactPlayer from 'react-player'



function PatientAppointmentVideoComponentPlaceholder({doctorData}) {
    return(
        <div>
            <Container className="my-3">
                <Row className="no-gutters">
                    {
                        doctorData.video && (
                            <Col md={6}>
                                <div className={[style.wkAppointmentVideoLeftArea]}>
                                    <div className={style.wkAppointmentVideo}>
                                        <ReactPlayer
                                            url={doctorData.video+'?origin=http://localhost:3000'}
                                            height={'100%'}
                                            width={'100%'}
                                        />
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                    <Col md={doctorData.video?6:12} className={[style.wkAppointmentVideoRightArea]}>
                        <div className={style.wkAppointmentVideoRightSubArea}>
                            <h5 style={{ fontWeight:'bold'}}>{doctorData.name} </h5>
                            <p>{doctorData.speciality}</p>
                            <p>{doctorData.detail_info}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>);

}

export default PatientAppointmentVideoComponentPlaceholder;