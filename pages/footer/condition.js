import {Container,Row,Col} from "react-bootstrap";
import React,{useEffect} from "react";
import axios from 'axios';
import General from "../../middleware/General";

import Condition from "../../components/global/footer/Condition";

const index =  function (props) {
    return(
        <>
            <Condition/>
        </>
    )
};
export  default General(index)