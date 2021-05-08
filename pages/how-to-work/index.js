import {Container,Row,Col} from "react-bootstrap";
import React,{useEffect} from "react";
import axios from 'axios';
import General from "../../middleware/General";
import ChamberList from "../../components/Admin/Hospital/HospitalList/ChamberList"
import LearnWithVideo from "../../components/HowToWork/LearnWithVideo";
import ServicesProcess from "../../components/HowToWork/ServicesProcess";

const index =  function (props) {
    return(
        <>
            <LearnWithVideo/>
            <ServicesProcess/>
        </>
    )
};
export  default General(index);