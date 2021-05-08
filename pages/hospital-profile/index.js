import {Container,Row,Col} from "react-bootstrap";
import React,{useEffect} from "react";
import axios from 'axios';
import General from "../../middleware/General";
import ChamberList from "../../components/Admin/Hospital/HospitalList/ChamberList"

const index =  function (props) {
    let getHospital= {};
    useEffect(()=>{
        axios.get('http://localhost:3001/hospitals').
        then((res)=>{
            getHospital = res.data.hospitals;
            console.log(typeof getHospital);
        })
            .catch((err)=>console.log(err));
    },[]);

    return (
        <div>
            <ChamberList hospitals={getHospital}/>
        </div>

    )
};
export  default General(index);