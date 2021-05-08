import {Row, Col, Form, Button} from "react-bootstrap"
import style from "./ChamberAddForm.module.css"

function ChamberAddForm() {
    return(
        <div>
            <div className="container">

                <Row>
                    {/*<Col md={2}></Col>*/}
                    <Col>
                        <div className={style.wkAddNewCamberArea}>
                            <div className="text-center">
                                 <h4>চেম্বার অথবা হাসপাতাল নিযুক্ত করুন</h4>
                            </div>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="hospital_name">
                                            <Form.Label>হাসপাতালের নাম *</Form.Label>
                                            <Form.Control className={style.wkInputField} required type="text" name="hospital_name"  value="hospital_name" placeholder="হাসপাতালের নাম" />
                                        </Form.Group>

                                        <Form.Group controlId="address">
                                            <Form.Label>ঠিকানা *</Form.Label>
                                            <Form.Control className={"wk-select-input"} type="text" name="address" value="address" placeholder="Chamber/hospital address" />

                                        </Form.Group>

                                        <Form.Group controlId="mobile_number">
                                            <Form.Label>মোবাইল নম্বর *</Form.Label>
                                            <Form.Control className={"wk-select-input"} type="text" name="mobile_number" value="mobile_number" placeholder="+88015xxxxxxxxxx" />
                                        </Form.Group>

                                        <Form.Group controlId="email">
                                            <Form.Label>ইমেইল</Form.Label>
                                            <Form.Control className={"wk-select-input "} type="email" name="email" value="email" placeholder="exampel@mail.com" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Upload Logo</Form.Label>
                                            <Form.Control type="file" placeholder="Choose File" className={"wk-select-input "}/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Add Banner</Form.Label>
                                            <Form.Control type="file" placeholder="Choose File" className={"wk-select-input "}/>
                                        </Form.Group>
                                        {/*<Form.Row>*/}
                                        {/*    <Col>*/}
                                        {/*        <Form.Group controlId="formBasicPassword">*/}
                                        {/*            <Form.Label>Upload Logo</Form.Label>*/}
                                        {/*            <Form.Control type="file" placeholder="Choose File" />*/}
                                        {/*        </Form.Group>*/}
                                        {/*    </Col>*/}
                                        {/*    <Col>*/}
                                        {/*        <Form.Group controlId="formBasicPassword">*/}
                                        {/*            <Form.Label>Add Banner</Form.Label>*/}
                                        {/*            <Form.Control type="file" placeholder="Choose File" />*/}
                                        {/*        </Form.Group>*/}
                                        {/*    </Col>*/}
                                        {/*</Form.Row>*/}

                                    </Col>
                                    <Col md={6} className="my-auto">
                                        <p>লোকেশন ম্যাপ</p>
                                        <div className={style.wkMapArea} style={{
                                            backgroundImage: "url(" + "static/img/map/map1.PNG" + ")",
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'
                                        }}>
                                            {/*//Map link in here and image map is just used for design fulfill*/}
                                            {/*src="static/img/home/sliders/home-hero-img1.jpg"*/}

                                        </div>
                                        <Form.Group className="my-3" controlId="map_ip">
                                            <Form.Label>এমবেডেড ম্যাপ লিংক</Form.Label>
                                            <Form.Control className={"wk-select-input"} type="text" name="map_ip" value="map_ip" placeholder="Hospital name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Button className={"wk-general-button " + style.wkSubmitButton} type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    {/*<Col md={2}></Col>*/}
                </Row>
            </div>
        </div>
    );

}

export default ChamberAddForm;