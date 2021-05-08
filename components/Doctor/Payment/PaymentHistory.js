import {Container,Form, Row, Col, Card, CardBody, Button} from 'react-bootstrap';
import style from './PaymentHistory.module.css';
import React from "react";

function PaymentHistory() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col md={6}>
                               <h4 className={style.wkHeadingTop}>Medical Payment History</h4>
                            </Col>
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="mobile_number">
                                        <Form.Control className={"wk-select-input "} type="date" value={"20/06/2020"} id="example-date-input"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <div>
                            <Card className={style.wkCardName}>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Col sm={6}>
                                                <p className={style.wkTextHistory}><strong>Date:</strong> 10.02.2020 <br></br> 7:30am</p>
                                            </Col>
                                            <Col>
                                                <p className={style.wkTextHistory}><strong>Patient Name:</strong> Bori Jonson <br></br> Mob: 01320121127</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                            <Col sm={6}>
                                                <p className={style.wkTextHistory}><strong>Payment Type:</strong> bKash <br></br> Trn id: #234512</p>
                                            </Col>
                                            <Col>
                                                <p className={style.wkTextHistory}><strong>Paid Amount:</strong> 5000 Tk <br></br> Status : <span className={style.wkUnpaid}>Unpaid</span></p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className={style.wkCardName}>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Col sm={6} className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Date:</strong> 10.02.2020 <br></br> 7:30am</p>
                                            </Col>
                                            <Col className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Patient Name:</strong> Bori Jonson <br></br> Mob: 01320121127</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                            <Col sm={6} className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Payment Type:</strong> bKash <br></br> Trn id: #234512</p>
                                            </Col>
                                            <Col className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Paid Amount:</strong> 5000 Tk <br></br> Status : <span className={style.wkUnpaid}>Unaid</span></p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className={style.wkCardName}>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Col sm={6} className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Date:</strong> 10.02.2020 <br></br> 7:30am</p>
                                            </Col>
                                            <Col className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Patient Name:</strong> Bori Jonson <br></br> Mob: 01320121127</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                            <Col sm={6} className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Payment Type:</strong> bKash <br></br> Trn id: #234512</p>
                                            </Col>
                                            <Col className="mb-2">
                                                <p className={style.wkTextHistory}><strong>Paid Amount:</strong> 5000 Tk <br></br> Status : <span className={style.wkStatusPaid}>Unaid</span></p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </div>

                    </Col>
                    <Col lg={1}></Col>
                </div>
            </div>

        </div>);
}

export default PaymentHistory;