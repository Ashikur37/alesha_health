import {InputGroup, FormControl, Button, Form, Col} from 'react-bootstrap'

import style from './PrescriptionSheetComponent.module.css';

function PrescriptionSheetComponent() {
    return(
        <div>
            <div className="container">
                <ul className={style.wkPresSeetMenu}>
                    <li><a href="#">Advice</a></li>
                    <li><a href="#">Test</a></li>
                    <li><a href="#" className={style.wkPresSheetActiveButton}>Meditation</a></li>
                    <li><a href="#">Follow Up</a></li>
                </ul>
                <div className={style.wkPresSearchArea}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Button className={style.wkpressSearchButton}><i className="material-icons">
                                search
                            </i></Button>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1" className={style.wkPressSearchInput} />
                    </InputGroup>
                </div>

                {/*file input*/}
                <Form.Group>
                    <Form.Row>
                        <Form.Label column lg={2}>
                           Upload Prescription
                        </Form.Label>
                        <Col>
                            <Form.Control type="file" placeholder="Normal text" />
                        </Col>
                    </Form.Row>
                    <br />
                </Form.Group>
                <div className={style.wkWritePrescriptionSheet}>
                    <p><strong>Write a prescription</strong></p>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Rx,</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                            <Form.Label>Test,</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                            <Form.Label>Counselling,</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button className={style.wkPrescriptionSheetButton} type="submit">
                            Save Prescription
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
}

export default PrescriptionSheetComponent;