import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import style from './LiveDoctorAdd.module.css';

export default function LiveDoctorAdd() {
    return(
      <div className={style.LiveDoctorAdd}>
          <h3 className={"text-center " + style.addHeader}>মোবাইল এপ্লিকেশন ডাউনলোড করুন, কথা বলুন সহজে</h3>
          <div className="container">
              <div className="row justify-content-center">
                  <a href="#" className={style.liveDoctorAddbButton1}>
                      <img className={style.liveDoctorAddbButtonImg1} src="../../static/img/home/left/googleplay.png" alt="google image"/>
                  </a>
                  <a href="#" className={style.liveDoctorAddbButton2}>
                      <img className={style.liveDoctorAddbButtonImg2} src="../../static/img/home/left/appstore2.png" alt="appstore image"/>
                  </a>
              </div>
          </div>
      </div>
    );
}