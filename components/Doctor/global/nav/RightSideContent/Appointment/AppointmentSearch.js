import React from "react";
import {Form,Row,Col,Button} from 'react-bootstrap';
import style from './AppointmentSearch.module.css'

export default function () {
    return(
        <div className={style.appointmentSearch}>
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
                            <option>Doctor...</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                    <Col md={3}>
                        <Form.Control as="select" value="Choose..." className="wk-select-input " >
                            <option>Department...</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                    <Col md={3}>
                        <Form.Control as="select" value="Choose..." className="wk-select-input " >
                            <option>Status...</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={3}>
                        <Form.Control placeholder="Name / ID" className="wk-select-input " />
                    </Col>
                    <Col md={3}>
                        <Form.Control placeholder="Date From" className="wk-select-input " />
                    </Col>
                    <Col md={3}>
                        <Form.Control placeholder="Date To" className="wk-select-input " />
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