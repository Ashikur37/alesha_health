import style from './PatientComponent.module.css';
import {Col, Row} from "react-bootstrap";
function PatientComponent() {
    return (
      <div my={2}>
          <div className={style.wkDoctorPatientViewCard}>
              <Row>
                  {/*<Col xs={1} className={style.wkDivAuto}>*/}
                  {/*    <p className={style.wkResponsiveDivStyle}>01</p>*/}
                  {/*</Col>*/}
                  <Col xs={2} className={style.wkDivAuto}>
                      <div className={style.wkImageDiv}>
                          <span className={style.wkResponsiveDivStyle} >01</span>
                          <img style={{ height: "64px", width: "64px" }} className='rounded-circle patientImageStyle'
                               src="static/img/home/doctors/doctor1.jpg"
                               alt="First slide"
                          />
                      </div>
                  </Col>
                  <Col xs={6} className={style.wkDivAuto}>
                      <p className={[style.wkResponsiveSerialShow ]}><strong>Serial No: </strong>02</p>
                      <p className={style.wkParagraphSpace}><strong>Name: </strong>Masud Rana Hwladar</p>
                      <p className={style.wkParagraphSpace}><strong>Mobile: </strong>01720452210</p>
                  </Col>
                  <Col xs={4} className={style.wkDivAuto}>
                      <p className={style.wkParagraphSpace}>Time: 7.30pm</p>
                      <p className={style.wkParagraphSpace}>Appointment Type: onle</p>
                  </Col>
              </Row>
          </div>
      </div>
    );
}
export default PatientComponent