import React, {Component} from "react";
import {Row, Col} from 'react-bootstrap';
import style from './AppointmentFeeDataList.module.css';
import fee_types from "../../../../enum/fee_types";

export default function (props) {
    const {discount_for_old,appointment_type_title, discount_for_new, old_fee, new_fee, hospital_name, fee_type, status,id} = props.data;
    const {onEdit,edit,statusLoading,changePublishStatus} = props;
    let statusButton = "";
    if(status){
        statusButton = (<button className={style.wkServicesPostPublished} disabled={statusLoading} onClick={()=>changePublishStatus(id,0)} type="submit">
            {statusLoading?'Loading...':'Published'}
        </button>)
    }else{
        statusButton = (<button  className={[ style.wkServicesPostUnpublish ]} disabled={statusLoading} onClick={()=>changePublishStatus(id,1)} type="submit">
            {statusLoading?'Loading...':'Unpublished'}
        </button>)
    }

    let editButton = "";
    if(edit !== id){
        editButton = (
            <a href="#" className={style.wkDoctorEditServices} onClick={(e)=>{
                e.preventDefault();
                onEdit(id)
            }}><i className="material-icons">
                edit
            </i></a>
        );
    }
    return (
        <div>
            <div className="container my-2">
                <div  className={style.wkFeeDataList}>

                    <div className="row">
                        <Col className={style.wkFeeDataCol}>
                            {appointment_type_title} <br />
                            {fee_types[fee_type]}
                        </Col>
                        <Col className={style.wkFeeDataCol}>{hospital_name} </Col>
                        <Col className={style.wkFeeDataCol}>Fee: {new_fee}Tk <br></br>Discount: {discount_for_new}Tk </Col>
                        <Col className={style.wkFeeDataCol}>Fee: {old_fee}Tk <br></br>Discount: {discount_for_old}Tk </Col>
                        <Col className={style.wkFeeDataCol}>
                            { editButton }
                            { statusButton }
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    );
}