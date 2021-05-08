import React,{useState,useEffect} from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import style from './SingleDoctorHeader.module.css';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 23.777176, lng: 90.399452 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 23.777176, lng: 90.399452 }}  onClick={props.onMarkerClick} />}
    </GoogleMap>
));
 function SingleDoctor() {
    const [isMarkerShown,setIsMarkerShown] = useState({isMarkerShown:false});
    useEffect(()=>{
        return delayedShowMarker();
    });
    const delayedShowMarker=()=>{
        setTimeout(() => {
            setIsMarkerShown({ isMarkerShown: true })
        }, 3000)
    };
   const handleMarkerClick = () => {
       delayedShowMarker();
       return setIsMarkerShown({ isMarkerShown: false });
    };
    return(
        <div className={style.SingleDoctorHeader}>
            <div className="row">
                <div className="col-lg-9 col-md-8">
                    <div>
                        <img src="../../../../../static/img/home/doctors/headerImg2.png" alt="" className={style.HeaderImg}/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className={style.wkHosLogo}>
                        <img src="../../../../../static/img/home/doctors/medicall_logo.png" alt="" className={style.HeaderImg2}/>
                    </div>
                    <div className="mb-3">
                        <h4 className={"mb-2 " + style.wkParText}>মেডিকল</h4>
                        <p className={style.wkParText}>
                            <span className={"material-icons " + style.materialIconFont}>location_on</span>
                            <span className={style.singleDoctorDefaultFontSize}>29/D Kakrail,Dhaka 1201</span>
                        </p>
                        <p className={style.wkParText}>
                            <span className={"material-icons " + style.materialIconFont}>phone</span>
                            <span className={style.singleDoctorDefaultFontSize}>+880173497444</span>
                        </p>
                        <p className={style.wkParText}>
                            <span className={"material-icons " + style.materialIconFont}>email</span>
                            <span className={style.singleDoctorDefaultFontSize}>29/D Kakrail,Dhaka 1201</span>
                        </p>
                    </div>
                    {/*<div className={style.wkHosMap}>
                        <MyMapComponent
                            isMarkerShown={isMarkerShown}
                            onMarkerClick={handleMarkerClick}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRKRrndK2wDkVBJb4Lj5nshpxw3tUeAUs&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} className={style.loadingElement}/>}
                            containerElement={<div style={{ height: `12rem` }} className={style.containerElement} />}
                            mapElement={<div style={{ height: `100%` }} className={style.mapElement} />}
                        />
                    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default SingleDoctor;