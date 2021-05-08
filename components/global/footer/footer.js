import React from "react";
import {Row, Col} from 'react-bootstrap';
import style from './footer.module.css';



export default function () {
    return(
        <div>
            <div className={style.footerArea}>
                <div className="container">
                    <div className={style.wkFooterHeadingText}>
                        <h5 className={style.wkFooterHeading}>মেডিকল অ্যাপ ডাউনলোড করুন</h5>
                    </div>
                    <Row>
                        <Col lg={3}>

                            <div className="row">
                                <div className={style.wkFooterDownloadArea}>
                                    <a href="#" className={style.liveDoctorAddButton1}>
                                        <img className={style.liveDoctorAddButtonImg1} src="../../../static/img/home/left/googleplay.png" alt="google image"/>
                                    </a>
                                    <a href="#" className={style.liveDoctorAddButton2}>
                                        <img className={style.liveDoctorAddButtonImg2} src="../../../static/img/home/left/appstore2.png" alt="appstore image"/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9} className="my-auto">
                            <Row>
                                <Col lg={9}>
                                    <Row className="text-center">
                                        <Col lg={3}>
                                            <div>
                                                <p><a  href="/footer/about-condition">মেডিকল সম্পর্কে</a></p>

                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>

                                                <p><a  href="/footer/privacy">গোপনীয় নীতিমালা</a></p>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <p><a  href="/footer/condition">শর্তাবলি</a></p>

                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <p><a  href="/contuct-us">যোগাযোগ</a></p>
                                            </div>
                                        </Col>
                                    </Row>

                                </Col>

                                <Col lg={3} className="text-center">
                                    <a href="#"><img src="../../../static/img/social/facebook.png" className={style.wkFooterSocialIcon} alt=""/></a>
                                    <a href="#"><img src="../../../static/img/social/twitter.png" className={style.wkFooterSocialIcon} alt=""/></a>
                                    <a href="#"><img src="../../../static/img/social/instagram.png" className={style.wkFooterSocialIcon} alt=""/></a>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </div>

        </div>
    )
}