import React,{useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import style from "./LiveDoctorQuestion.module.css";
import {Card} from "react-bootstrap";

export default function () {
    const [key,setKey] = useState(0)
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
                                            <span className={"float-left " + style.questionText}><p> মেডিকেল কিভাবে সাহায্য করতে পারে ?</p></span>
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
                                <Card.Body className={style.doctorCardBorder}><p className="text-primary">আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে বাংলা উইকিপিডিয়া, ওয়ার্ডপ্রেস বাংলা কোডেক্সসহ বিভিন্ন বাংলা অনলাইন পত্রিকা তৈরির কাজ করতে করতে বাংলার সাথে নিজেকে বেঁধে নিয়েছি আষ্টেপৃষ্ঠে।</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}