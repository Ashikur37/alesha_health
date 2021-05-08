import {Card, Button, Col} from "react-bootstrap";
import style from "./PackageList.module.css";
export default function (props) {
    return (
        <div>
            <Card className={style.wkPackageCard}>
                <Card.Body>
                    <Card.Title className="text-center mt-4">
                        <h5>{props.packageName}</h5>
                        <p><small>সেরা স্বাস্থ্যসেবা সবচেয়ে সাশ্রয়ী মূল্য</small></p>
                    </Card.Title>
                    <div className='pb-2'>
                        <img
                            className="wk-packages-image my-2"
                            src={props.packageImg}
                            alt="First slide"
                        />
                        <div>মেডিকল ক্যাশ - {props.packageCost} টাকা</div>
                        <div className={style.wkTextOverfoow}>
                            {props.packageDescription}
                        </div>

                    </div>

                </Card.Body>
                <Card.Footer calssName={style.wkcardFooter} style={{background:"#fff", borderRadius:"0px", border:"0px", paddingBottom:"20px", paddingTop:"0px"}}>
                    <div className='text-right'>
                        <Button variant="primary" className="wk-general-button">বিস্তারিত</Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
};