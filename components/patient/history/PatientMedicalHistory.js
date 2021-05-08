import {Row, Col, Form, Button} from 'react-bootstrap';
import style from './PatientMedicalHistory.module.css';

function PatientMedicalHistory() {
    return (
        <div>
            <div className="container">
                <div className={style.wkQuestionArea}>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <p className={style.wkQuestion}>প্রশ্ন : Past medical history: Please Check all to apply.</p>
                            <Form>
                                <fieldset>
                                    <Form.Group as={Row}>

                                        <Col sm={{ span: 11, offset: 1 }}>
                                            <Form.Check
                                                type="checkbox"
                                                label="Arthritis"
                                                name="arthritis"
                                                id="arthritis"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Cancer"
                                                name="dancer"
                                                id="cancer"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Depression"
                                                name="depression"
                                                id="depression"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Migraine"
                                                name="migraine"
                                                id="migraine"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Depression"
                                                name="depression"
                                                id="depression2"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    );
}

export default PatientMedicalHistory