import {Container,Row,Col} from "react-bootstrap";
import GeneralHealthService from '../../../components/Services/GeneralHealthService/GeneralHealthService';
import General from "../../../middleware/General";

const index =  function () {
    return (
        <div>
            <GeneralHealthService/>
        </div>
    )
};
export  default General(index);