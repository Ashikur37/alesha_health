import { Row, Col, Button} from 'react-bootstrap';
import style from "../../global/footer/footer.module.css";
import React from "react";

export default function () {
    return (
        <div className='wb-single-blog-card my-3'>
            <Col>
                <Row>
                    <Col md={6}>
                        <img className="img-fluid wk-blog-image"
                            src="static/img/home/sliders/home-hero-img4.jpg"
                            alt="First slide"
                        />
                    </Col>
                    <Col md={6} className='mt-auto'>
                        <div className="wk-blog-side-text">
                            <h6>শেয়ার করুন :
                                <span>
                                     <a href="#"><img src="../../../static/img/social/facebook.png" className={style.wkFooterSocialIconBlog} alt=""/></a>
                                    <a href="#"><img src="../../../static/img/social/twitter.png" className={style.wkFooterSocialIconBlog} alt=""/></a>
                                    <a href="#"><img src="../../../static/img/social/instagram.png" className={style.wkFooterSocialIconBlog} alt=""/></a>
                                </span>
                            </h6>
                            <h5>আপনি কি হাইপারটেনশন বা উচ্চ রক্তচাপে ভুগছেন ?</h5>
                            <p><small>১৫, জানুয়ারী ২০২০</small></p>
                        </div>
                    </Col>
                </Row>

                <p className='my-4'> ট্রিপলেটের বাংলা কী হবে? জানতে চাই জাতীয় অধ্যাপক ড. আনিসুজ্জামান স্যারের কাছে। মনস্ক পাঠকেরা জানেন, প্রথম আলোতে স্যারের ‘আমার অভিধান’</p>
                <div className="mt-5 mb-3">
                    <a href="$" className={style.wkBlogLink}>বিস্তারিত</a>
                </div>

            </Col>
        </div>
    )
};