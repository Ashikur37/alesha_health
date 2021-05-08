import {Form, Row, Button, Col} from "react-bootstrap";

import style from "./ChamberListCard.module.css"
import adminServer from "../../../../../adminServer";
import {useEffect, useState} from "react";

function ChamberListCard({hospital}) {
    const [status, setStatus] = useState(false);
    const [actionLoading, setActionLoading] = useState(false);
    useEffect(()=>{
        setStatus(hospital.status);
    },[]);
    const action  = (status)=>{
        setActionLoading(true);
        adminServer.put('/admin/hospitals/'+hospital.id+'/toggle-status',{
            status
        }).then(res=>{
            setStatus(status);
            setActionLoading(false);
        }).catch(err=>{
            setActionLoading(false);
        })
    };
    return(
        <div>
            <div className={style.wkChamberCardArea}>
                <Row>
                    <Col>
                        <p>{hospital.name} <a href={'/admin/hospitals/'+hospital.id+'/edit'} className={style.wkChamberEdit}><u>Edit</u></a></p>
                        <p>{hospital.address}</p>
                    </Col>
                    <Col xs={3} className="my-auto">
                        <div className="text-right">
                            <div>Status: {status?'Active':'Inactive'}</div>
                            {status === 0 && <button disabled={actionLoading} onClick={()=>action(1)} className="clearfix wk-general-button wk-sm-btn mb-1">Active</button>}<br/>
                            {status === 1 && <button disabled={actionLoading} onClick={()=>action(0)} className="wk-danger-button  wk-sm-btn">De-Active</button> }
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );

}

export default ChamberListCard;