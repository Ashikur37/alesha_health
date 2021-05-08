import {Container,Row,Col} from "react-bootstrap";
import General from "../../middleware/General";
import ConfirmRegistration from "../../components/Auth/Registration/Registration";

const index =  function () {
    return (
        <div className="container">
            <ConfirmRegistration/>
        </div>
    )
};
export  default General(index);