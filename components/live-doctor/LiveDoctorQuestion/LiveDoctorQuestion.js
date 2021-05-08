import React ,{useState} from "react";
import {Container,Card,Row,Col} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import style from "./LiveDoctorQuestion.module.css"

const initialKey = 0;
export default function LiveDoctorQuestion() {
    const [key,setKey] = useState(0);

     return(
        <div className={style.liveDoctorQuestion}>
            <div className="container">
                <div className="bg-light">
                    <Accordion>
                        <Card>
                            {(key !== 0) ?
                                <a type="button" onClick={()=>setKey(0)}>
                                    <Accordion.Toggle as={Card.Header} eventKey={key} className="mb-0">
                                                <div className="clearfix">
                                                    <span className={"float-left " + style.questionText}><p>পাচ্ছেন ২৪ ঘন্টাই স্বাস্থ সেবা</p></span>
                                                    <div className= {"float-right " + style.materialIcon}><i className="material-icons">keyboard_arrow_up</i></div>
                                                </div>
                                    </Accordion.Toggle>
                                </a>
                                :
                                <a type="button" onClick={()=>setKey(1)} >
                                    <Accordion.Toggle as={Card.Header} eventKey={key} className="mb-0">
                                            <div className="clearfix">
                                                <span className={"float-left " + style.questionText}><p> মেডিকেল কিভাবে সাহায্য করতে পারে ?</p></span>
                                                <div className= {"float-right " + style.materialIcon}><i className="material-icons">expand_more</i></div>
                                            </div>
                                    </Accordion.Toggle>
                                </a>
                            }
                            <Accordion.Collapse eventKey={0}>
                                <Card.Body className={style.doctorCardBorder}><p className="text-primary">Hello! I'm the body</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    )
};
