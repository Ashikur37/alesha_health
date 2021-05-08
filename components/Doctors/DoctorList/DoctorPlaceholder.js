import {Col, Row} from "react-bootstrap";
function DoctorPlaceholder() {
    return(
        <>
            <Row className="ph-item" style={{backgroundColor: '#FCFCFC',border: 'unset'}}>
                <Col md={4} xs={4} >
                    <div className="row justify-content-center">
                        <div className="ph-picture ph-fixed-img-width rounded-circle mt-3 img-fluid text-center"></div>
                    </div>
                </Col>
                <Col md={8} xs={8}>
                    <div className="ph-row">
                        <div className="mt-3 ph-col-6 big"></div>
                        <div className="ph-col-6 big empty"></div>
                        <div className="ph-col-6 big"></div>
                        <div className="ph-col-6 big"></div>
                        <div className="ph-col-6 big"></div>
                        <div className="ph-col-6 big"></div>
                        <div className="ph-col-8 big"></div>
                    </div>
                </Col>
                {/*<Col md={3}  xs={3}>*/}
                {/*    <div className="mt-5 ph-row">*/}
                {/*        <div className="ph-col-2 big empty"></div>*/}
                {/*        <div className="ph-col-6 big ph-left-radius"></div>*/}
                {/*        <div className="ph-col-2 big ph-right-radius"></div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            </Row>
        </>
    )
}

export default DoctorPlaceholder;