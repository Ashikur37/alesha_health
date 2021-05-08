import {Row, Col} from 'react-bootstrap';
import style from './Appointments.module.css';

function AppointmentsPlaceholder() {
    return (
        <div className={'py-0 '+style.wkCardArea}>
            <Row className="ph-item ph-item-bg-none py-0" style={{backgroundColor:'unset',border: 'unset'}}>
                <Col md={1} className="my-auto">
                    <div className="ph-row">
                        <div className="mt-3 ph-col-2 big"></div>
                    </div>
                </Col>
                <Col md={2} className="my-auto">
                    <div className="text-center">
                        <div className="ph-picture ph-fixed-img-width  mt-3 img-fluid text-center"></div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className={style.wkDoctorDArea}>
                        <div className="ph-row">
                            <div className="mt-3 ph-col-6 big"></div>
                            <div className="ph-col-6 big empty"></div>
                            <div className="ph-col-6 big"></div>
                            <div className="ph-col-6 big"></div>
                            <div className="ph-col-6 big"></div>
                            <div className="ph-col-6 big"></div>
                            <div className="ph-col-4 big mr-2"></div>
                            <div className="ph-col-4 big"></div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="my-auto">
                    <div className={"ph-row"}>
                        <div className="mt-3 ph-col-6 big"></div>
                        <div className="ph-col-6 big empty"></div>
                        <div className="ph-col-8 big"></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AppointmentsPlaceholder;