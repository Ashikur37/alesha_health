import style from "./EditFormComponent.module.css";
import React, {useEffect, useState} from "react";
import adminServer from "../../../../adminServer";
import GlobalPlaceholders from "../../../Placeholders/GlobalPlaceholders";
import {useRouter} from "next/router";
import EditFormComponent from "./EditFormComponent";

const EditComponent = ()=>{
    let isMounted = true;
    const router = useRouter();
    let { id } = router.query;

    const [hospitalData, setHospitalData] = useState({
        _isLoading: false,
        data: {}
    });

    useEffect(()=>{
        loadHospitalInfo();
        return () =>{
            isMounted =  false;
        }
    },[]);

    const loadHospitalInfo = ()=>{
        setHospitalData({data: {},_isLoading: true});
        adminServer.get('/admin/hospitals/'+id).then(res=>{
            console.log('res.data.hospital_info',res.data.hospital_info)
            setHospitalData({data: res.data.hospital_info,_isLoading: false});
        });
    };
    return (
        <div className={"container mt-3"}>
            <div className={style.TopHeader}>
                <h5 className={style.TopHeaderText}>Edit Hospital/Clinic/Chamber</h5>
            </div>
            <div className={style.Body}>
                { hospitalData._isLoading && <GlobalPlaceholders rows={10} /> }
                { !hospitalData._isLoading && <EditFormComponent data={hospitalData.data} /> }
            </div>
        </div>
    )
};

export default EditComponent;