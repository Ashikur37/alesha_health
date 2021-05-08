import {Container,Row,Col} from "react-bootstrap";
import General from "../../middleware/General";
import PaymentSetting from "../../components/Doctor/Payment/PaymentSetting";
import PaymentDashboard from "../../components/Doctor/Payment/PaymentDashboard";
import PaymentMenu from "../../components/Doctor/Payment/PaymentMenu";
import PaymentHistory from "../../components/Doctor/Payment/PaymentHistory";


const index =  function (pops) {
    return (
        <div>
            <PaymentMenu/>
            <PaymentDashboard/>
            <PaymentHistory/>
            <PaymentSetting/>

        </div>

    )
};
export  default General(index);