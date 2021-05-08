import {Row, Col} from 'react-bootstrap';
import style from './Appointments.module.css';
import Date2Human from "../../../functions/Date2Human";
import React, {useEffect, useState} from "react";
import Link from "next/link";

function AppointmentFilter({ appointmentTypes, shifts, filterChanged }) {
    const [filter, setFilter] = useState({
        status: 1,
        type: "",
        shift: "",
    })
    useEffect(()=>{
        filterChanged(filter);
    },[filter]);
    const filterChange = (e)=>{
        const value = e.target.value;
        const field = e.target.name;
        setFilter(prev=>{
            return {...prev,[field]:value}
        })
    };
    return (
        <Row>
            <Col md={2}>
                <select className={style.wkSelectInput} onChange={filterChange} name="status" value={filter.status}>
                    <option value="" className={style.wkOption}>&nbsp; All</option>
                    <option value="1">&nbsp; Pending</option>
                    <option value="2">&nbsp; Completed</option>
                    <option value="0">&nbsp; Canceled</option>
                </select>
            </Col>
            <Col md={2}>
                <select className={style.wkSelectInput} onChange={filterChange} name="type" value={filter.type}>
                    <option value="" className={style.wkOption}>&nbsp; All Types</option>
                    { appointmentTypes.map(appointmentType => <option key={'appointmentType'+appointmentType.appointment_type_id} value={ appointmentType.appointment_type_id }>&nbsp; { appointmentType.title }</option>) }
                </select>
            </Col>
            <Col md={2}>
                <select className={style.wkSelectInput} onChange={filterChange} name="shift" value={filter.shift}>
                    <option value="" className={style.wkOption}>&nbsp; All Shifts</option>
                    { shifts.map(shift => <option key={'shift'+shift.shift_id} value={ shift.shift_id }>&nbsp; { shift.name }</option>) }
                </select>
            </Col>
        </Row>
    );
}

export default AppointmentFilter;