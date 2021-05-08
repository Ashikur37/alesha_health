import {Row, Col, Form, Button} from 'react-bootstrap';
import style from './PatientMedicalHistoryMenu.module.css';

function PatientMedicalHistoryMenu() {
    return (
        <div>
            <div className="container">
                <div className={"clearfix " + style.historyMenu}>
                    <div className={"float-left " + style.wkLinkArea}>
                        <a href="#" className={"btn "+style.wkActive}>হেলথ হিস্ট্রি</a>
                        <a href="#" className={"btn "}>মেডিকেল হিস্ট্রি</a>
                    </div>
                    <div className={"float-right " + style.wkDownloadViewArea}>
                        <a href="#">
                            <span className={style.wkIconArea}>
                                <span className={style.wkIcon}>
                                    <span className="material-icons wk-material-icon">arrow_downward</span>
                                </span>
                                <span className={style.wkIcontext}>
                                Download
                                </span>
                            </span>
                        </a>
                        <a href="#">
                            <span className={style.wkIconArea}>
                                <span className={style.wkIcon}>
                                <span className="material-icons wk-material-icon">visibility</span>
                                </span>
                                <span className={style.wkIcontext}>
                                View
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientMedicalHistoryMenu