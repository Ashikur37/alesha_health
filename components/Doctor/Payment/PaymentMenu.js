import {Container,Form, Row, Col, Card, CardBody, Button} from 'react-bootstrap';
import style from './PaymentMenu.module.css';

function PaymentMenu() {
    return(
        <div>
            <div className="container mb-5">
                <div className={style.wkMedicalPaynateadingArea}>
                    <h4>মেডিকেল পেমেন্ট ড্যাশবোর্ড </h4>
                    <p>doctor/payment dashboard</p>
                </div>
                <div className="row">
                    <div className={style.wklinkArea}>
                        <a href="#"  className={"wk-general-button "}>Payment DashBoard</a>
                        <a href="#" className={"wk-general-button " + style.wkActive}>Payment History</a>
                        <a href="#" className={"wk-general-button "}>payment Setting</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PaymentMenu;