import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import ConsultingOrComplaining from "../../components/ConsultingOrComplainingAndLocation/ConsultingOrComplaining";
import MedicallLocation from "../../components/ConsultingOrComplainingAndLocation/MedicallLocation";
import General from "../../middleware/General";

const index =  function () {
    return (
        <div className="container ">
          <ConsultingOrComplaining/>
          <MedicallLocation/>
        </div>
    )
};
export  default General(index);