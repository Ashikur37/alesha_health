import {Container,Row,Col} from "react-bootstrap";
import General from "../../middleware/General";
import DoctorList from "../../components/Admin/Hospital/HospitalList/DoctorList";

const index =  function () {
    return (
        <div>
            <Container>
                <DoctorList/>
            </Container>
        </div>
    )
};
export  default General(index);