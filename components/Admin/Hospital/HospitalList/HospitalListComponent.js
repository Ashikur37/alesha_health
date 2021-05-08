import React, {useEffect, useState} from "react";
import AdminAuth from "../../../../middleware/AdminAuth";
import ChamberList from "./ChamberList";
import adminServer from "../../../../adminServer";

import axios from "axios";
import ChamberHeading from "./Chamber/ChamberHeading";
import ChamberSearching from "./Chamber/ChamberSearching";
import GlobalPlaceholders from "../../../Placeholders/GlobalPlaceholders";
import {Col, Row} from "react-bootstrap";
import Pagination from "rc-pagination";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
let cancel;
const HospitalListComponent = function () {
    let isMounted = true;
    const [filter,setFilter]= useState({
        search: ""
    });
    const [hospitals, setHospitals] = useState({
        _isLoading: false,
        _isPaginating: false,
        data: {},
    });
    useEffect(()=>{
        loadHospitalInfo({},1);
        return () =>{
            isMounted =  false;
        }
    },[]);

    const search = (searchValue)=>{
        setFilter(prev=>({...prev,search: searchValue}));
        loadHospitalInfo({search: searchValue},1);
    };

    const loadHospitalInfo = (filter, page)=>{
        setHospitals({data: {},_isLoading: true});
        /*adminServer.get('/admin/hospitals/').then(res=>{
            setHospitals({data: res.data.hospital_info,_isLoading: false});
        });*/

        cancel && cancel();
        const params = {...filter, page};
        adminServer.get('/admin/hospitals',{
            params,
            cancelToken: new CancelToken((c)=>{
                cancel = c
            })
        }).then(res=>{
            setHospitals({data: res.data.hospitals,_isLoading: false});
        });
    };
    const onChange = (current, pageSize)=>{
        setHospitals(prev=>{
            return {...prev,_isLoading: true}
        });
        loadHospitalInfo(filter,current);
    };
    return (
        <>
            <ChamberHeading/>
            <ChamberSearching search={search}/>
            <div className="container">
                <Row className="no-gutters">
                    <Col md={2}></Col>
                    <Col>
                        { hospitals._isLoading && <GlobalPlaceholders rows={10} /> }
                        { !hospitals._isLoading && <ChamberList hospitals={hospitals.data}/> }
                        { hospitals.data && hospitals.data.data && hospitals.data.total > hospitals.data.per_page && <div className="d-flex justify-content-center"><Pagination showTitle={false}  total={hospitals.data.total} defaultPageSize={hospitals.data.per_page} onChange={onChange} defaultCurrent={hospitals.data.current_page} /></div> }
                    </Col>
                    <Col md={2}></Col>
                </Row>

            </div>
        </>
    )
};

export default AdminAuth(HospitalListComponent)