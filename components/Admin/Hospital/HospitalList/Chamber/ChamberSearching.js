import React,{useState} from "react";
import {Form, Row, Button, Col,Modal} from "react-bootstrap";
import style from "./ChamberSearching.module.css";
import ChamberAddForm from './ChamberAddForm';

function ChamberSearching({search}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const searchHospital = (e)=>{
        e.preventDefault();
        search(document.getElementById('hospital_search').value);
    };
    return(
        <div>
            <div className="container">
                <Row>
                    <Col md={2}></Col>
                    <Col>
                        <div className={style.wkHospitalSearchArea} >
                            <Form onSubmit={searchHospital}>
                                <Row className="no-gutters">
                                    <Col xs={8}>
                                        <Form.Control placeholder="চেম্বার/হাসপাতালের নাম" className={"wk-select-input "} id="hospital_search" />
                                    </Col>
                                    <Col ml={0}>
                                        <Button type="submit" className={"wk-general-button " + style.wkSubmitButton}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                            <div className="text-left">
                                <p className="my-2">**<small><span className="mr-2">চেম্বার/হাসপাতালের নাম খুঁজে না পেলে ,ক্লিক করুন </span><a href='/admin/hospitals/add' className={style.wkAddNewButton}>Add New Hospital/Camber</a></small></p>
                                {/*<Modal show={show} onHide={handleClose} size="xl" style={{margin:'0px', padding:"0px;"}}>
                                    <ChamberAddForm/>
                                    <Modal.Footer>
                                        <Button className={"wk-general-button "} onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>*/}
                            </div>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
        </div>
    );

}

export default ChamberSearching;