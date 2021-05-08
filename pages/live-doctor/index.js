import UserLayout from "../../components/layouts/UserLayout";
import {Container,Row,Col} from "react-bootstrap";
import LiveDoctorService from '../../components/live-doctor/LiveDoctorService';
import LiveDoctorAdd from "../../components/live-doctor/LiveDoctorAdd";
import LiveDoctorQuestionSection from "../../components/live-doctor/LiveDoctorQuestionSection";
import General from "../../middleware/General";

const index =  function () {
    return (
        <div>
            <LiveDoctorService />
            <LiveDoctorAdd/>
            <LiveDoctorQuestionSection/>
        </div>
    )
};
export  default General(index);