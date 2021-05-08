import {Col,Row,Form,Button,Container, Modal} from 'react-bootstrap';
import style from './SearchedDoctor.module.css';
import React, {useEffect, useState} from "react";
import get from "../../functions/get";
import { useRouter } from 'next/router'

function SearchedDoctor() {
    const router = useRouter()
    const {speciality_id,doctor} = router.query;
    let isMounted = true;
    //state
    const [specialities,setSpecialities] = useState([]);
    const [speciality,setSpeciality] = useState("");

    //useEffect
    useEffect(()=>{
        loadSpecialities();
        setSpeciality(speciality_id);
        return () =>{
            isMounted =  false;
        }
    },[]);

    //get specialities
    const loadSpecialities = ()=>{
        get({ url:'specialities' }, (res)=> {isMounted && setSpecialities(res.data.specialities)});
    };

    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    return(
        <div className={style.searchedDoctor}>
            <div className="mb-5" align="center">
                <h2 className="mb-4">ডাক্তার - নার্স খুঁজুন</h2>
                <a className={style.searchDoctorHeaderSpan}  href="#">
                    <span className={"material-icons " + style.headerMaterialIcon}>play_arrow</span>
                    <span className={"btn " + style.searchedDoctorAnchorTag } onClick={handleShow}>যেভাবে এপয়েনমেন্ট নিবেন</span>
                </a>
            </div>
            <div className={style.searchDoctorForm}>
                <Form>
                    <Row  className="no-gutters">
                        <Form.Group as={Col} md={6} controlId="formGridCity">
                            <Form.Control as="select" name="speciality_id"  className="wk-select-input" value={speciality} onChange={e=>setSpeciality(e.target.value)}>
                                <option value="">{specialities.length?'ডাক্তারের ধরন':'লোড হচ্ছে ......'}</option>
                                {
                                    specialities.map(ele=><option value={ele.id} key={'specialities'+ele.id} >{ele.name}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md={5} controlId="formGridState">
                            <Form.Control className="wk-select-input" name="doctor" defaultValue={doctor}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md={1} controlId="formGridState">
                            <Button variant="primary" type="submit" className={'wk-general-button mb-2 searchSubmitBtn '}>সার্চ করুন</Button>
                        </Form.Group>
                    </Row>
                    {/*<Row className={"justify-content-end " + style.advanceSearch} >*/}
                    {/*        <a href="" className={style.advanceSearchBtn}>Advance Search &rarr;</a>*/}
                    {/*</Row>*/}
                </Form>
            </div>
            <Modal size="lg"
                   show={lgShow}
                   onHide={() => setLgShow(false)}
                   dialogClassName="modal-90w"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   >
                <Modal.Header closeButton>
                    <Modal.Title>Medicall</Modal.Title>
                </Modal.Header>
                <Modal.Body  className={style.wkvideoHeight}>
                    <iframe style={{ position: 'absolute', top: '0' ,left: '0'}}
                            src="https://www.youtube.com/embed/xXl1srHFKqI?autoplay=1&mute=1&loop=1"
                            width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen
                            allowFullScreen></iframe>
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/*<Button variant="primary" onClick={handleClose}>*/}
                    {/*    Save Changes*/}
                    {/*</Button>*/}
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default SearchedDoctor;