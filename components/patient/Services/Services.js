import React from "react";
import Service from "./Service/Service";
import style from './Services.module.css';

export default function ({ services }) {
    return(
        <div className="container">
            <h3 className="text-center mt-3 mb-3">সার্ভিস সমূহ</h3>
            {services.map(service=> <Service key={'service'+service.id} service={ service } /> )}
        </div>
    )
}