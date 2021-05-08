import {Form, Row, Button, Col} from "react-bootstrap";
import ChamberListCard from "./ChamberListCard";
import style from "./ChamberNameLists.module.css"

function ChamberNameLists(props) {
    return(
        <div>
            <div className={style.wkNameListArea} >
                <ChamberListCard/>
            </div>
        </div>
    );

}

export default ChamberNameLists;