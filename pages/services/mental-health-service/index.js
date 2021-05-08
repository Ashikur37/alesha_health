import {Container,Row,Col} from "react-bootstrap";
import MentalHealthService from "../../../components/Services/MentalHealthService/MentalHealthService";
import General from "../../../middleware/General";

const index =  function () {
    return (
        <div>
            <MentalHealthService/>
        </div>
    )
};
export  default General(index);