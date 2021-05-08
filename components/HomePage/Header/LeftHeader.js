import { Row, Col, Button, Form,ButtonGroup , DropdownButton, Dropdown, FormControl} from 'react-bootstrap';
import style from './LeftHheader.module.css';
import React, {useEffect, useState} from "react";
import get from "../../../functions/get";

export default function () {
    let isMounted = true;
    //state
    const [specialities,setSpecialities] = useState([]);

    //useEffect
    useEffect(()=>{
        loadSpecialities();
        return () =>{
            isMounted =  false;
        }
    },[]);

    //get specialities
    const loadSpecialities = ()=>{
        get({ url:'specialities' }, (res)=> {isMounted && setSpecialities(res.data.specialities)});
    };
    return (
        <div>
            <h1 className='my-3'>স্বাস্থ্যসেবা এখন আরও সহজে</h1>
            <div>
                {/*<p>Using Medicall telemedicine platform ,You can take appointment along with Live audio/video  consultancy , counselling, medication from expert doctors.At emergency health/medical issues,you can request a call to your nearby doctors/nurses.</p>*/}
                <p className="mt-5">মেডিকল টেলিমেডিসিন  প্লাটফর্ম ব্যবহার করে ঘরে বসে খুব সহজেই ডাক্তারের এপয়েন্টমেন্ট নেওয়া থেকে শুরু করে  ডাক্তারের সাথে  অডিও/ ভিডিও কলের  মাধ্যমে কথা বলা , পরামর্শ , প্রেসক্রিপশন সবকিছু পাবেন একসাথে। এছাড়াও  জরুরী চিকিৎসা সেবার জন্য ডাক্তার , নার্স কে বাসায় কল করতে পারবেন।</p>
            </div>

            <Form action="/doctors">
                <div className='mt-5 mb-4'>
                    <Form.Row>
                        <Form.Group as={Col} md={5} controlId="formGridCity">
                            <Form.Control as="select" name="speciality_id" className="wk-select-input">
                                <option value="">{specialities.length?'ডাক্তারের ধরন':'লোড হচ্ছে ......'}</option>
                                {
                                    specialities.map(ele=><option value={ele.id} key={'specialities'+ele.id} >{ele.name}</option>)
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md={7} controlId="formGridState">
                            <Form.Control className="wk-select-input" name="doctor"></Form.Control>
                        </Form.Group>
                    </Form.Row>
                </div>
                <Button type="submit" variant="primary" className='wk-general-button mb-2'>সার্চ করুন</Button>
            </Form>

            {/*<Dropdown as={ButtonGroup} className={style.wkButtonGroupDN} alignRight>*/}
            {/*    <Button className={style.wkSearchDN}>সার্চ করুন</Button>*/}

            {/*    <Dropdown.Toggle split id="dropdown-split-basic" className={style.wkDropdowndN} />*/}

            {/*    <Dropdown.Menu clssName={style.wkDropDownItem}>*/}
            {/*        <Dropdown.Item href="#/action-1">Doctor</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-2">Nurse</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-3">Cleaner</Dropdown.Item>*/}
            {/*    </Dropdown.Menu>*/}
            {/*</Dropdown>*/}

            <div className="wk-apps-btn-download my-3">
                <a href="#" className='btn'><img src="static/img/home/left/googleplay.png" alt="Google Play Store"/></a>
                <a href="#" className='btn'><img src="static/img/home/left/appstore.png" alt="Apple Store"/></a>
            </div>

        </div>
    )
};