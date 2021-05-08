import React from "react";
import {Form,Row,Col,Button} from 'react-bootstrap';
import style from './RegistrationApprovalSearch.module.css'

export default function () {
    return(
        <div className={"container " + style.registrationApprovalSearch}>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="All" className={"wk-select-input "}/>
                    </Col>
                    <Col>
                        <Form.Control className={"wk-select-input "} type="date"  id="example-date-input" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="BMDC Reg. No." className={"wk-select-input "}/>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" className={"wk-general-button form-control"}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}