import {Container,Row,Col} from "react-bootstrap";
import NurseService from "../../../components/Services/NurseService/NurseService";
import General from "../../../middleware/General";

const index =  function () {
    return (
        <div>
            <NurseService/>
        </div>
    )
};
export  default General(index);