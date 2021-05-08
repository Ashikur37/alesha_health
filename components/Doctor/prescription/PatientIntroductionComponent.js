import React, {Component} from "react";
import {Nav, Row, Col} from "react-bootstrap";
import style from './PatientIntroductionComponent.module.css';

function PatientIntroductionComponent(){
    return(
        <div>
            <div className="container">
                <div className={style.wkPatientIntroductionBox}>

                    <Row>
                        <Col md={6}>
                            <div className={style.wkPatinetIntroductonText}>
                                {/*<h5>Name: Nur Nobi Shamim <span><span className="badge badge-success">Online</span></span></h5>*/}
                                <h5>Name: Nur Nobi Shamim <span><span className="badge badge-danger">OffLine</span></span></h5>
                                <p>Id: 252545</p>
                                <p>Year: 25year</p>
                                <p>Gender: Mal</p>
                                <p>Address: Kakril Dhaka - 1200</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={style.wkPatinetConsultation}>

                                <button className={style.wkConsultationPlayButton} my={2}>
                                    <span className={style.wkPlayIcon}><i className="material-icons">
                                    play_arrow
                                    </i>
                                    </span><span className={style.wkPlayText}>Let's go to counselling</span>
                                </button>
                            </div>
                        </Col>
                    </Row>

                    <div className={style.wkParientNav}>
                        <Nav fill variant="tabs" defaultActiveKey="#">
                            <Nav.Item>
                                <Nav.Link href="#" className={[style.wkNavLink, style.wkNavLinkActive]}>Medical History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1"  className={style.wkNavLink}>Prescription</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"  className={style.wkNavLink}>Follow Up Appointment Setting</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-3"  className={style.wkNavLink}>Appointment Archive </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>


            </div>
        </div>
    );

}

export default PatientIntroductionComponent;