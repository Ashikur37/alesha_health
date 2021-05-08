import {Container,Row,Col} from "react-bootstrap";
import LiveDoctorService from '../../../components/Services/LiveDoctorService/LiveDoctorService';
import LiveDoctorQuestionSection from "../../../components/Services/LiveDoctorService/LiveDoctorQuestionSection";
import MentalHealthService from "../../../components/Services/LiveDoctorService/MentallyHealthService";
import General from "../../../middleware/General";

const index =  function () {
    return (
        <div className={"container "}>
            <MentalHealthService/>
            <LiveDoctorService/>
            <LiveDoctorQuestionSection/>
        </div>
    )
};
export  default General(index);