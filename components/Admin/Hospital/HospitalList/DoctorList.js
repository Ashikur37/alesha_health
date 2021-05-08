import React from "react";
import SingleDoctorHeader from "./Doctor/SingleDoctorHeader";
import SearchSingleDoctor from "./Doctor/SearchSingleDoctor";
import SingleDoctor from "./Doctor/SingleDoctor";
import style from './DoctorList.module.css';
import {Button , Card} from 'react-bootstrap';

const doctorInformation=[
    {
        dName:"ডঃ:মাহবুবুল করিম",
        dDesignation:"এম.বি.বি.এস, ঢাকা মেডিকেল কলেজ",
        dImage:"../../../static/img/home/doctors/doctor7.png"
    },
    {
        dName:"ডঃ:মাহবুবুল করিম",
        dDesignation:"এম.বি.বি.এস, ঢাকা মেডিকেল কলেজ",
        dImage:"../../../static/img/home/doctors/doctor7.png"
    },
    {
        dName:"ডঃ:মাহবুবুল করিম",
        dDesignation:"এম.বি.বি.এস, ঢাকা মেডিকেল কলেজ",
        dImage:"../../../static/img/home/doctors/doctor7.png"
    },
    {
        dName:"ডঃ:মাহবুবুল করিম",
        dDesignation:"এম.বি.বি.এস, ঢাকা মেডিকেল কলেজ",
        dImage:"../../../static/img/home/doctors/doctor7.png"
    },
    {
        dName:"Sifat Haider",
        dDesignation:"এম.বি.বি.এস, ঢাকা মেডিকেল কলেজ",
        dImage:"../../../static/img/home/doctors/doctor7.png"
    },
    {
        dName:"ডঃ:মাহবুবুল করিম",
        dDesignation:"এম.বি.বি.এস, ঢাকা মেডিকেল কলেজ",
        dImage:"../../../static/img/home/doctors/doctor7.png"
    }
];
export default function () {

    return(
        <div>
            <SingleDoctorHeader/>
            <SearchSingleDoctor/>
            <div className="row">
                {
                    doctorInformation.map((prop)=>{
                        return(
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <SingleDoctor dName={prop.dName}  dDesignation={prop.dDesignation} dImage={prop.dImage} />
                            </div>
                        )
                    })
                }

                {/*<div className="col-lg-2 col-md-3 col-sm-4">*/}
                {/*    <SingleAppointment/>*/}
                {/*</div>*/}
                {/*<div className="col-lg-2 col-md-3 col-sm-4">*/}
                {/*    <SingleAppointment/>*/}
                {/*</div>*/}
                {/*<div className="col-lg-2 col-md-3 col-sm-4">*/}
                {/*    <SingleAppointment/>*/}
                {/*</div>*/}
                {/*<div className="col-lg-2 col-md-3 col-sm-4">*/}
                {/*    <SingleAppointment/>*/}
                {/*</div>*/}
                {/*<div className="col-lg-2 col-md-3 col-sm-4">*/}
                {/*    <SingleAppointment/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}