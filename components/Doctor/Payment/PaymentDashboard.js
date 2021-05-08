import {Container,Form, Row, Col, Card, CardBody, Button} from 'react-bootstrap';
import style from './PaymentDashboard.module.css';

function PaymentDashboard() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <Row>
                            <Col md={8}>
                                <div className={style.wkAmountArea}>
                                    <p className={style.wkAmountText}>Medical Amount</p>
                                    <p className={style.wkAmountNumber}>5000 Tk</p>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                               <h4 className={style.wkHeadingTop}>Medical Payment History</h4>
                            </Col>
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="Date">
                                        <Form.Control className={"wk-select-input "} type="date" value={"20/06/2020"} id="example-date-input"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <div>
                            <Card className={style.wkCardName}>
                                <span>
                                    <span className="float-left">
                                        <p className={style.wkTextHistory}><strong>Date:</strong> 10.02.2020 7:30am</p>
                                        <p className={style.wkTextHistory}>Payed by Bank Account</p>
                                    </span>
                                    <span className="float-right"> <span className={style.wkPay}>+  5000 Tk</span></span>
                                </span>
                            </Card>
                        </div>
                        <div>
                            <Card className={style.wkCardName}>
                                <span>
                                    <span className="float-left">
                                        <p className={style.wkTextHistory}>Date:10.02.2020 7:30am</p>
                                        <p className={style.wkTextHistory}>Payed by Bank Account</p>
                                    </span>
                                    <span className="float-right"><span className={style.wkDue}>+  5000 Tk</span></span>
                                </span>
                            </Card>
                        </div>
                        <div>
                            <Card className={style.wkCardName}>
                                <span>
                                    <span className="float-left">
                                        <p className={style.wkTextHistory}>Date:10.02.2020 7:30am</p>
                                        <p className={style.wkTextHistory}>Payed by Bank Account</p>
                                    </span>
                                    <span className="float-right"><span className={style.wkDue}>+  5000 Tk</span></span>
                                </span>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </div>
            </div>

        </div>);
}

export default PaymentDashboard;