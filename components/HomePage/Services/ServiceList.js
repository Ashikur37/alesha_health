import {Button, Carousel, Row, Col, Container} from "react-bootstrap";
import {useState} from "react";
import style from "./ServiceList.module.css";

export default function () {
    const [index, setIndex] = useState(0);
    const carouselChange = (index)=>{
        setIndex(index);
    };
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container>
        <div className={style.wkServicesSection}>
            <div className="text-center my-4">
                <h2 className="pb-4">স্বাস্থ্যসেবা সমূহ</h2>
            </div>
            <div>
                <div className="text-center mt-3 mb-5">
                    <Button className={['mr-2  wk-filter-button-in-response wk-general-button',{'wk-filter-active-button':index !==0 }]}  onClick={()=>carouselChange(0)}>২৪/৭ লাইভ ডাক্তার</Button>
                    <Button className={['mr-2  wk-filter-button-in-response wk-general-button',{'wk-filter-active-button':index !==1 }]}  onClick={()=>carouselChange(1)}>মানসিক স্বাস্থ্যসেবা</Button>
                    <Button  className={['mr-2  wk-filter-button-in-response wk-general-button',{'wk-filter-active-button':index !==2 }]}  onClick={()=>carouselChange(2)}>সাধারন স্বাস্থ্যসেবা</Button>
                    <Button  className={['mr-2  wk-filter-button-in-response wk-general-button',{'wk-filter-active-button':index !==3 }]}  onClick={()=>carouselChange(3)}>নার্স সেবা</Button>
                </div>
                <Carousel activeIndex={index}  onSelect={handleSelect} indicators={false} controls={false} nextIcon={<span aria-hidden="false" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="false" className="carousel-control-prev-icon" />}>
                    <Carousel.Item>
                        <Row>
                            <Col className="text-center">
                                <img
                                    className={style.wkServicesImage}
                                    src="static/img/services/telemedicine.jpg"
                                    alt="Live Doctor"

                                />
                            </Col>
                            <Col className={style.wkServicesTextArea}>
                                <h3 className=" ">২৪/৭ লাইভ ডাক্তার</h3>
                                <p>মেডিকল মোবাইল  ও  ওয়েব অ্যাপলিকেশন ব্যবহার করে যেকোনো সময় অডিও অথবা ভিডিও কলের মাধ্যমে কথা বলুন অভিজ্ঞ ডাক্তারদের সাথে।আমরা অনেক সময় দ্বিধা দন্দে থাকি “আমার এই সমস্যার জন্য কোন ধরনের ডাক্তার দেখাবো!”,আমাদের এই সেবা ব্যবহার করে ডাক্তারের সাথে পরামর্শ করতে পারবেন,কোন অভিজ্ঞতা সম্পন্ন ডাক্তার দেখানো উচিৎ আপনার । ফলে আপনার সঠিক চিকিৎসা পাওয়া সহজ হয়
                                    ,পাশাপাশি সময় ও টাকা অপচয় হয় না।  এছাড়াও দৈনন্দিন জীবনে  সাধারন স্বাস্থ্যসেবা সম্পর্কিত প্রশ্ন থাকলে 
                                    সরাসরি ডাক্তারদের সাথে কথা বলে জেনে নিতে পারবেন এই সেবার মাধ্যমে। &nbsp;<a href="/services/live-doctor-service" className={style.wkDetailsLink}>বিস্তারিত ... </a></p>

                                <a href="/live-doctor" className={style.wkServiceLink}>ডাক্তার</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col className="text-center">
                                <img
                                    className={style.wkServicesImage}
                                    src="static/img/services/mental.jpg"
                                    alt="Mental Health"
                                />
                            </Col>
                            <Col className={style.wkServicesTextArea}>
                                <h3 className="my-2">মানসিক স্বাস্থ্য সেবা</h3>
                                <p>বর্তমান জীবনে আমরা অনেকেই নানা রকম মানসিক অবসাদ, হতাশা ও জটিলতায় ভুগি যা খুবই স্বাভাবিক। কিন্তু মানসিক স্বাস্থ্যসেবা সম্পর্কে আমাদের মধ্যে রয়েছে নানা ভুল ধারনা। এছাড়াও মানসিক ডাক্তারের স্বল্পতার কারনে আমরা দিনের পর দিন , মানসিক সমস্যা নিয়ে চলি। একসময় যার পরিণতি হয় আত্মহত্যা অথবা সংগঠিত হয় নানা রকম অপরাধ, যা আমাদের সুন্দর জীবনকে এলোমেলো করে।
                                    মেডিকল মোবাইল  ও ওয়েব অ্যাপলিকেশন ব্যবহার করে যেকোনো সময় অডিও অথবা ভিডিও কলের মাধ্যমে  অভিজ্ঞ মানসিক ডাক্তারের সাথে কনসালটেন্সি ও অনলাইন কাউন্সিলিং সেশন করতে পারবেন এই সেবার মাধ্যমে।</p>

                                {/*<h3 className="my-3">Mental Healthcare</h3>*/}
                                {/*<p>Nowadays we face various mental pressures, inanition and complexity which are common to our life. We can not share with others about our mental problem for many misconceptions.We also lack physiatrist. Sometime it causes suicide or many illigal activities that ruin our lives. Using Medicall Mobile and Web application,you can take consultancy and online counselling from expert physiatrist through audio & video call. </p>*/}

                                <h5 className='my-2'><a href="/mental-health-services" className="wb-service-counseling-link">কিভাবে বুঝবেন আপনার কাউন্সেলিং প্রয়োজন ?</a></h5>
                                <a href="/live-doctor" className={style.wkServiceLink}>ডাক্তার</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col className="text-center">
                                <img
                                    className={style.wkServicesImage}
                                    src="static/img/services/telemedicine.jpg"
                                    alt="General Treatment"
                                />
                            </Col>
                            <Col className={style.wkServicesTextArea}>
                                <h3 className="my-3">সাধারন স্বাস্থ্যসেবা</h3>
                                <p>
                                    মেডিকল মোবাইল  ও ওয়েব অ্যাপলিকেশন ব্যবহার করে এপয়েন্টমেন্ট নিয়ে  অডিও অথবা ভিডিও কলের মাধ্যমে অভিজ্ঞ ডাক্তারের কাছে থেকে  বিপাক স্বাস্থ্য (ওজন কমানো,ফ্যাটি লিভার ডিজিজ,হাইপারটেনশন),হজম স্বাস্থ্য(অম্বল,ক্রোনস ডিজিজ,আলসারেটিভ
                                    কোলাইটিস,আইবিএস,কোষ্ঠকাঠিন্য) সহ, বাত সহ নানারকম স্বাস্থ্যসেবা  পেতে পারেন।
                                    &nbsp;<a href="/services/general-health-service" className={style.wkDetailsLink}>বিস্তারিত ... </a>
                                </p>
                                <a href="/live-doctor" className={style.wkServiceLink}>ডাক্তার</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col className="text-center">
                                <img
                                    className={style.wkServicesImage}
                                    src="static/img/services/mental.jpg"
                                    alt="Nurse"
                                />
                            </Col>
                            <Col className={style.wkServicesTextArea}>
                                <h3 className="my-3">নার্স সেবা</h3>
                                <p>বাসায় রোগীর সেবা যত্ন করার জন্য নার্স  প্রয়োজন হয়। আমাদের প্লাটফর্মে আছেন অভিজ্ঞ ও পেশাদার নার্স।
                                    ওয়েব অথবা মোবাইল অ্যাপলিকেশন ব্যবহার করে সহজে সার্ভিস রিকোয়েস্ট পাঠাতে পারেন।
                                    &nbsp;<a href="/services/nurse-service" className={style.wkDetailsLink}>বিস্তারিত ... </a>
                                </p>

                                {/*<h3 className="my-3">Nurse Service</h3>*/}
                                {/*<p>We need nurses for taking care of patients at our home.In Medicall,you will find expert & professional nurses.Using Medicall web & mobile application,you can send service requests to them easily.</p>*/}
                                <a href="/live-doctor" className={style.wkServiceLink}>ডাক্তার</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        </Container>
    )
};