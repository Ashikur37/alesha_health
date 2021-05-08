import React from "react";
import style from './MedicallLocation.module.css'

export default function () {
    return(
        <div>
            <h3 className="text-center mt-1 mb-5">মেডিকল লি:</h3>
           <div className={"row " + style.medicalLocation}>
               <div className={"col-md-6 " + style.medicallLocationLeft}>
                    <div className={"text-center "+style.leftSectionWidth}>
                        <span className={"material-icons mt-3 " + style.medicallLocationIcon}>place</span>
                        <p className={style.medicallLocationFont}>১০৫/২ কাকরাইল ঢাকা- ১২১৭</p>
                        <span className={"material-icons mt-3 " + style.medicallLocationIcon}>mail</span>
                        <p className={style.medicallLocationFont}>info@gmail.com</p>
                        <span className={"material-icons mt-3 " + style.medicallLocationIcon}>call</span>
                        <p className={style.medicallLocationFont}>+8801234567891</p>
                    </div>
               </div>
               <div className={"col-md-6 " + style.medicallLocationRight}>
                    <div className={style.locationRightMapSection}>
                        <img src="../../static/img/map/map1.png" alt="" className={style.locationRightMap}/>
                    </div>
               </div>
           </div>
        </div>
    )
}