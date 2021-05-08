import React from "react";
import style from './LiveDoctorService.module.css';
import {Button , Card} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

export default function () {
    return(
        <div>
            <h3 className={"text-center " + style.serviceHeader}>ডাক্তার গণ</h3>
            <Carousel
                indicators={false}
                nextLabel={''}
                prevLabel={''}
                className={'carousel-control-hide ' + style.LiveDoctorCarousel}
            >
                <Carousel.Item>
                    <div className="row">
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%",borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor3.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ডাঃ নূর ইসলাম</h6></Card.Title>
                                    <Card.Text>
                                       <p className={style.cardDescription}> ঢাকা মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%",borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor2.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ডাঃ শাহরিয়ার শরীফ</h6></Card.Title>
                                    <Card.Text>
                                        <p className={style.cardDescription}>সাধারণ প্রাক্টিশনার ও মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%",borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor3.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ডাঃ শাহরিয়ার শরীফ</h6></Card.Title>
                                    <Card.Text>
                                        <p className={style.cardDescription}>সাধারণ প্রাক্টিশনার ও মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%", borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor2.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ডাঃ শাহরিয়ার শরীফ</h6></Card.Title>
                                    <Card.Text>
                                        <p className={style.cardDescription}>সাধারণ প্রাক্টিশনার ও মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%",borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor2.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ওমর শরীফ</h6></Card.Title>
                                    <Card.Text>
                                        <p className={style.cardDescription}>সাধারণ প্রাক্টিশনার ও মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%",borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor3.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ডাঃ শাহরিয়ার শরীফ</h6></Card.Title>
                                    <Card.Text>
                                        <p className={style.cardDescription}>সাধারণ প্রাক্টিশনার ও মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%",borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor2.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ডাঃ শাহরিয়ার শরীফ</h6></Card.Title>
                                    <Card.Text>
                                        <p className={style.cardDescription}>সাধারণ প্রাক্টিশনার ও মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-sm-12 py-2">
                            <Card style={{ width: "100%",height:"100%",borderRadius:"0px"}}>
                                <Card.Img className={style.LiveDoctorServiceCardImg} src="../../static/img/home/doctors/doctor4.jpg" />
                                <Card.Body>
                                    <Card.Title><h6 className={style.cardTitle}>ডাঃ শাহরিয়ার শরীফ</h6></Card.Title>
                                    <Card.Text>
                                        <p className={style.cardDescription}>সাধারণ প্রাক্টিশনার ও মেডিকেল কলেজের প্রভাষক</p>
                                    </Card.Text>
                                    <Button className={style.LiveDoctorServiceCardButton}>এপয়েন্টমেন্ট নিন</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}