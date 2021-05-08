import {Row, Col, Button, Container, Card} from 'react-bootstrap';
import SingleBlog from "./SingleBlog";
import style from "./ShowBlog.module.css";
import Carousel from "react-bootstrap/Carousel";
import React from "react";

export default function () {
    return (
        <div className='wk-section-common-style pb-0'>
            <Container>

                <Carousel
                    indicators={false}
                    className={style.LiveDoctorCarousel}
                    nextIcon={(
                        <span aria-hidden="true" className={'carousel-control-next-icon'+ style.LiveDoctorCarouselNext} />
                    )}
                    prevIcon={(
                        <span aria-hidden="true" className={'carousel-control-prev-icon '+ style.LiveDoctorCarouselPrev} />
                    )}
                >
                    <Carousel.Item >
                        <Row>
                            <Col md={6}>
                                <SingleBlog/>
                            </Col>
                            <Col md={6}>
                                <SingleBlog/>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <SingleBlog/>
                            </Col>
                            <Col md={6}>
                                <SingleBlog/>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>

            </Container>
        </div>
    )
};