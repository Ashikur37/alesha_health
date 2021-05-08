import {Row, Col} from 'react-bootstrap';
import style from "./ServicesProcess.module.css";

function ServicesProcess() {
    return(
        <div>
            <div className="container">
                <div className="text-center">
                    <br/>
                    <h4 className={style.wkHeadingText}>যে ভাবে মেডিকেল থেকে সেবা নিবেন </h4>
                    <br/>
                </div>
                <Row>
                    <Col lg={6}>
                        <Row className={style.wkSevafirstArea}>
                            <Col lg={9} className="text-center px-0">
                                <div className="text-center px-0">
                                    <div className={style.wkSevafirst}>
                                        <span className="material-icons" style={{color:'#00695c', fontSize: '44px'}}>person_add</span>
                                        <h5 style={{color:'#00695c', fontSize: '22px'}}>রেজিস্ট্রেশন করুন </h5>
                                        <p>মেডিকেল থেকে সম্পূর্ণ সেবা পেতে প্রথমে রেজিস্ট্রেশন করুন। </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={style.wkSevafirstO1}>
                                    <p>01</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className={style.wkSevaSecondArea}>
                            <Col lg={3} className="text-center px-0">
                                <div className={style.wkSevasecont02}>
                                    <p>02</p>
                                </div>
                            </Col>
                            <Col lg={9} className="text-center px-0">
                                <div className="text-center">
                                    <div className={style.wkSevaSecond}>
                                        <span className="material-icons" style={{color:'#FE5866', fontSize: '44px'}}>search</span>
                                        <h5 style={{color:'#FE5866', fontSize: '22px'}}>ডাক্তার সার্চ করুন </h5>
                                        <p>লগইন করার পর স্পেসালিটি / ডিপার্টমেন্ট নির্বাচন করে সার্চ দিন।  এছাড়াও ডাক্তারের নাম লিখে সার্চ দিতে পারেন। </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className={style.wkSevathirdArea}>
                            <Col lg={9} className="text-center px-0">
                                <div className="text-center">
                                    <div className={style.wkSevathird}>
                                        <span className="material-icons" style={{color:'#0596DD', fontSize: '44px'}}>access_time</span>
                                        <h5 style={{color:'#0596DD', fontSize: '22px'}}>এপয়েন্টমেন্ট নিন</h5>
                                        <p>ননির্বাচিত ডাক্তারের সাথে এপয়েন্টমেন্ট নিতে এপয়েন্টমেন্ট দরুন ও তারিখ দরুন।  উল্লেখিত সময় থেকে সময় বেছে নিয়ে এপয়েন্টমেন্ট কনফার্ম করুন।</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={style.wkSevathird03}>
                                    <p>03</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className={style.wkSevaFourthArea}>
                            <Col lg={3} className="text-center px-0 ">
                                <div className={style.wkSevaFourth04}>
                                    <p>04</p>
                                </div>
                            </Col>
                            <Col lg={9} className="text-center px-0">
                                <div className="text-center">
                                    <div className={style.wkSevaFourth}>

                                        <span className="material-icons" style={{color:'#7D3C98', fontSize: '44px'}}>contact_phone</span>
                                        <h5 style={{color:'#7D3C98', fontSize: '22px'}}>ডাক্তারের সাথে কথা বলুন</h5>
                                        <p>নির্দিষ্ট সময়ের পূর্বে এপয়েন্টমেন্ট কনফার্ম করে ডাক্তারের সাথে লাইভ অডিও / ভিডিও এর মাধমে কথা বলুন।  কন্সাল্টেন্সি শেষে প্রেসক্রিপশন ডাউনলোড করুন। </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ServicesProcess;