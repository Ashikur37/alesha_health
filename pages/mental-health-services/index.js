import MentallyHealthService from "../../components/live-doctor-1/MentallyHealthService";
import LiveDoctorService from "../../components/live-doctor-1/LiveDoctorService";
import LiveDoctorQuestionSection from "../../components/live-doctor-1/LiveDoctorQuestionSection";
import General from "../../middleware/General";

const index = ()=>{
    return(
        <div className="container">
            <MentallyHealthService/>
            <LiveDoctorService/>
            <LiveDoctorQuestionSection/>
        </div>
    );
};

export default General(index);