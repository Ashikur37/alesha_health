import React from "react";
import style from './LiveDoctorService.module.css';
import {Container,Row,Col} from "react-bootstrap";


export default function LiveDoctorService() {
    return(
      <div>
          <Container>
              <div className={style.liveDoctorServiceHeader}>
                  <h3 >লাইভ ডাক্তার সেবা</h3>
                  <span className={style.liveDoctorServiceHeaderSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ MBBS সির্টিফাইড ডাক্তার সেবা</span>
              </div>
              <div className="row mt-5">
                  <div className="col-md-6 col-sm-12 my-auto">
                      <div className={style.liveDoctorlLeftImgButton}>
                          <div className={style.liveDoctorServiceImg}>
                              <div className={style.wkDivCenter}>
                                  <h2 className={style.serviceHeadingLeft}>সুস্থ থাকুন প্রতিদিন</h2>
                                  <p className="pt-2">@ মাত্র ৫০ টাকা</p>
                                  <button className={style.wkDivCenterButton}>
                                      <span><i className={"material-icons " + style.serviceMaterialIcon}>phone_iphone</i></span>
                                      <span className={style.serviceText}>কল করুন</span>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                      <div className="row justify-content-center mt-2">
                          <div className="col ml-4 mt-3">
                              <div className={style.createSection}>
                                  <div className={style.iconBackground2}>
                                      <div className={style.wkiconPosition}>
                                          <i className={"material-icons " + style.wkMaterialFontSize}>
                                              create
                                          </i>
                                      </div>
                                  </div>
                                  <div className={style.liveDoctorServiceHeaderTitle}>
                                      <span className={style.serviceRightHeader}>অভিজ্ঞ ডাক্তার</span>
                                      <p className={style.liveDoctorServiceHeaderSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ MBBS সির্টিফাইড ডাক্তার সেবা</p>
                                  </div>

                              </div>
                              <div className={style.regSection}>
                                <div className={style.iconBackground}>
                                    <div className={style.wkiconPosition}>
                                        <i className={"material-icons " + style.wkMaterialFontSize}>
                                            how_to_reg
                                        </i>
                                    </div>
                                </div>
                                  <div className={style.liveDoctorServiceHeaderTitle}>
                                      <span className={style.serviceRightHeader}>মানসিক স্বাস্থ সেবা</span>
                                      <p className={style.liveDoctorServiceHeaderSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ সির্টিফাইড ডাক্তার দ্বারা মানসিক স্বাস্থসেবা </p>
                                  </div>
                            </div>
                              <div className={style.serviceSection}>
                                <div className={style.iconBackground2}>
                                    <div className={style.wkiconPosition}>
                                        <i className={"material-icons " + style.wkMaterialFontSize}>
                                            ondemand_video
                                        </i>
                                    </div>
                                </div>
                                  <div className={style.liveDoctorServiceHeaderTitle}>
                                      <span className={style.serviceRightHeader}>সাধারণ স্বাস্থ সেবা </span>
                                      <p className={style.liveDoctorServiceHeaderSpan}>ভিডিও কলের মাধ্যমে এখন সহজেই পাচ্ছেন অভিজ্ঞ MBBS সির্টিফাইড ডাক্তার সেবা</p>
                                  </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </Container>
      </div>
    );
}