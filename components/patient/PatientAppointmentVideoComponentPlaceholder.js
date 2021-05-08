import {Container,Button, Row, Col} from 'react-bootstrap';
import style from './PatientAppointmentVideoComponent.module.css';
import React from "react";


function PatientAppointmentVideoComponent() {
    return(
        <div>
            <Container className="my-3">
                <Row className="ph-item no-gutters" style={{backgroundColor: 'unset',border: 'unset',padding:'0px'}}>
                    <Col md={6}>
                        <div className={'ph-picture '+style.wkAppointmentVideoLeftArea} style={{height:'unset'}}>

                            <div className={style.wkAppointmentVideo}>
                                <div className={style.wkAppointmentVideoContent}>
                                   <span className={style.wkAppointmentVideoButtonArea}>
                                       <Button className={style.wkAppointmentVideoButton}>
                                           <span className={style.wkAppointmentVideoText}>
                                               <div className="ph-row mb-0">
                                                    <div className="ph-col-2  mb-1 big empty"></div>
                                                    <div className="ph-col-2  mb-1 big empty">
                                                        <i className="material-icons" style={{fontSize:"30px"}}>play_circle_outline</i>
                                                    </div>
                                                    <div className="ph-col-6 big mt-1 mb-1"></div>
                                               </div>
                                           </span>
                                       </Button>
                                   </span>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col md={6} className={[style.wkAppointmentVideoRightArea]} style={{height:'250px'}}>
                        <div className="ph-row" style={{padding:'30px'}}>
                            <div className="ph-col-6 big"></div>
                            <div className="ph-col-6 big empty"></div>
                            <div className="ph-col-8 big"></div>
                            <div className="ph-col-2 big empty"></div>
                            <div className="ph-col-8 big"></div>
                            <div className="ph-col-2 big"></div>
                            <div className="ph-col-2 big"></div>
                            <div className="ph-col-8 big"></div>
                            <div className="ph-col-2 big"></div>
                            <div className="ph-col-2 big"></div>
                            <div className="ph-col-8 big"></div>
                            <div className="ph-col-2 big"></div>
                            <div className="ph-col-2 big"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>);

}

export default PatientAppointmentVideoComponent;