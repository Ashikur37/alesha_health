import {Row, Col, Button, Container} from "react-bootstrap";
import style from "./Announcement.module.css"
export default function() {
    return (
        <div className="wk-section-common-style pt-2" style={{background:'#fafafa'}}>
            <Container>
            <Row>
                <Col className='text-center' md={6}>
                    <img className='img-fluid'
                        src="static/img/services/doctor2.png"
                        alt="First slide"
                         style={{ height:'350px', width:"auto"}}
                    />
                </Col>
                <Col className="my-auto wk-announcement-text" md={6}>
                    <h3>আপনি কি বিএমডিসি অনুমোদিত ডাক্তার?</h3>
                    <p className="mb-5">আপনি  বিএমডিসি অনুমোদিত একজন ডাক্তার হলে মেডিকল টেলিমেডিসিন প্লাটফর্ম এ রেজিস্ট্রেশন করে , ঘরে বসেই রোগীদের সেবা দিতে পারবেন।</p>
                    <a href="/doctor/login" className={style.wkAnnounceButton}>রেজিস্ট্রেশন করুন</a>
                </Col>
            </Row>
            </Container>
        </div>
    );
}