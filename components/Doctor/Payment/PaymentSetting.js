import {Container,Form, Row, Col, Button} from 'react-bootstrap';
import style from './PaymentSetting.module.css';

function PaymentSetting() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <Col lg={4}></Col>
                    <Col lg={4}>
                        <h4 className={style.wkHeading}>পেমেন্ট রিসিভ মাধ্যম </h4>
                        <Form>
                            <Row>
                                <Col>
                                    <div className="radio">

                                        <label>
                                            <input type="radio" value="option1" checked={true} />
                                            &nbsp; বিকাশ
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="option2" />
                                            &nbsp; রকেট
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="option3" />
                                            &nbsp; নগদ
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <Form.Group controlId="mobile_number">
                                <Form.Control type="text" placeholder="বিকাশ মোবাইল নম্বর" name="mobile_number"  className={"wk-select-input"} />

                            </Form.Group>
                            <button className={"wk-general-button " + style.wkSbmit} type="submit">
                                সেভ করুন
                            </button>
                        </Form>

                    </Col>
                    <Col lg={4}></Col>
                </div>
            </div>

        </div>);
}

export default PaymentSetting;