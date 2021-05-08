import React from "react";
import {Form,Row,Col,Button} from 'react-bootstrap';
import style from './DoctorSearch.module.css'

export default function () {
    return(
        <div className={style.doctorSearch}>
            <Form>
                <Row className="mt-3">
                    <Col md={3}>
                        <Form.Control as="select" value="Choose..." className="wk-select-input " >
                            <option>Appointment type...</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                    <Col md={3}>
                        <Form.Control as="select" value="Choose..." className="wk-select-input " >
                            <option>Depertment...</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                    <Col md={6}>
                        <Form.Control placeholder="Name/ID" className="wk-select-input " />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={5}>
                        <Form.Control placeholder="Reg. Date From" className="wk-select-input " />
                    </Col>
                    <Col md={4}>
                        <Form.Control placeholder="Reg. Date To" className="wk-select-input " />
                    </Col>
                    <Col md={3}>
                        <Button type="submit" className={"wk-general-button form-control"}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}