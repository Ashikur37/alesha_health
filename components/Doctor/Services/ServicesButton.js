import React, {Component} from "react";
import style from "./ServicesButton.module.css";
import {Button} from "react-bootstrap";

class ServicesButton extends Component{
    render() {
        return (
            <div>
                <div className="container my-4">
                    <div className={style.wkAppoinmentDetalilsButton}>
                        <Button className='wk-filter-button-in-response wk-general-button'>সার্ভিসেস সমূহ </Button>
                        <Button className='wk-filter-button-in-response wk-filter-active-button'>ফি সেটিং </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesButton;