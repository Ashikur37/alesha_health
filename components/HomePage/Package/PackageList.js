import Package from "./Package";
import {Row, Col, Container} from "react-bootstrap";
import style from "./PackageList.module.css";

export default function (props) {
    return (
        <div className="wk-section-common-style wk-package-section">
            <Container>
                <div className="text-center mb-4">
                    <h2 style={{ marginBottom:"0px",}}>প্যাকেজ সমূহ</h2>
                    <p>MediCall, যাদের সীমিত স্বাস্থ্য সেবা প্রয়োজন</p>
                </div>
                <Row>
                    <div className={style.cardDeck}>
                        {
                            props.packageList.map((prop)=>{
                                return(

                                    <Col md={4}>

                                        <Package
                                            packageImg={prop.packageImg}
                                            packageName={prop.packageName}
                                            packageCost={prop.packageCost}
                                            packageDescription={prop.packageDescription}
                                        />

                                    </Col>

                                );
                            })
                        }
                    </div>
                </Row>
            </Container>
        </div>
    )
};