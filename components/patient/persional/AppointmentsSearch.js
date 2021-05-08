import {Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';
import style from './AppointmentsSearch.module.css';

function AppointmentsSearch() {
    return (
        <div>
            <div className="container">
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>

                        <div className={style.wkAppHeadingArea}>
                            <div className={style.wkTileAppointentList}>
                                <h2>Appointment List</h2>
                            </div>
                            <Row>
                                <Col md={8}>
                                    {/*<h4>Appointments </h4>*/}
                                </Col>
                                <Col md={4} className="text-right">
                                    <div className={style.wkAppSrarc}>
                                        {/*<Form inline className={style.wkSearchFormArea}>*/}
                                        {/*    <InputGroup>*/}
                                        {/*        <InputGroup.Prepend className={"wk-select-input "}>*/}
                                        {/*            <InputGroup.Text id="basic-addon1" className={"wk-select-input " + style.wkSearchIconArea}>*/}
                                        {/*                <span className="material-icons wk-material-icon">search</span>*/}
                                        {/*            </InputGroup.Text>*/}
                                        {/*        </InputGroup.Prepend>*/}
                                        {/*        <FormControl*/}
                                        {/*            placeholder="Doctor Name"*/}
                                        {/*            aria-label="Username"*/}
                                        {/*            aria-describedby="basic-addon1"*/}
                                        {/*            className={"wk-select-input"}*/}
                                        {/*            style={{borderRadius:"0px"}}*/}
                                        {/*        />*/}
                                        {/*    </InputGroup>*/}
                                        {/*</Form>*/}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div>
        </div>
    );
}

export default AppointmentsSearch;