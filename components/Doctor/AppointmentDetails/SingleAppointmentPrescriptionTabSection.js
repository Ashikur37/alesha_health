import React, {useEffect, useRef, useState} from "react";
import TimeSection from "./AppointmentSections/TimeSection";
import PrescriptionSection from "./AppointmentSections/PrescriptionSection";
import PaymentSection from "./AppointmentSections/PaymentSection";
import style from './SingleAppointmentPrescriptionTabSection.module.css';
import {Button, Form, Modal} from "react-bootstrap";
import doctorServer from "../../../doctorServer";
import Msg from "../../Msg";
import AppointmentPrescription from './AppointmentPrescription';
import AppointmentPrescriptionPlaceholders from './AppointmentPrescriptionPlaceholders';
import {useRouter} from "next/router";


export default function () {
    const router = useRouter();
    const {id} = router.query;

    const [formSubmitting,setFormSubmitting] = useState(false);
    const [prescriptions,setPrescriptions] = useState(false);

    //ref
    const msgRef = useRef();

    useEffect(()=>{
       loadPrescriptions();
    },[]);

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        const file = document.getElementById('file').files[0];
        msgRef.current.hide();
        if(file){
            setFormSubmitting(true);
            const data = new FormData();
            data.append('file', file);
            return doctorServer.post('/doctor/appointment-schedules/'+id+'/prescriptions',data).then((res)=>{
                msgRef.current.show({type:'success', text:res.data.message});
                setPrescriptions(prev=>{
                    return [res.data.result,...prev];
                });
                document.getElementById('file').value="";
                setFormSubmitting(false);
            }).catch((err)=>{
                setFormSubmitting(false);
            });
        }else{
            msgRef.current.show({type:'danger', text:'Please select a file.'});
        }
    };
    const loadPrescriptions = ()=>{
        return doctorServer.get('/doctor/appointment-schedules/'+id+'/prescriptions').then((res)=>{
            setPrescriptions(res.data.prescriptions)
        }).catch((err)=>{

        });
    };

    const [imageShowModal, setImageShowModal] = useState(false);
    const [modalImageName, setModalImageName] = useState('');

    const handleImageShowModalClose = () => setImageShowModal(false);
    const handleImageShowModalShow = () => setImageShowModal(true);
    const imageShow = (imageName)=>{
        setModalImageName(imageName);
        handleImageShowModalShow();
    };
    return(
        <>
            <Modal show={imageShowModal} onHide={handleImageShowModalClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img src={modalImageName} alt="" className="w-100"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleImageShowModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className={style.Prescription}>
                <div style={{float:'left',width: '100%'}}>
                    <form  onSubmit={onSubmitHandler}>
                        <div className="p-3">
                            <div><Msg generateRef={msgRef} /></div>
                            <div className="float-right">
                                <div>
                                    <input type="file" id="file" className="wkCustomFileInput"/>
                                </div>
                                <div>
                                    <button disabled={formSubmitting} className={"float-right wk-general-button"}>Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                { !prescriptions && <AppointmentPrescriptionPlaceholders /> }
                { prescriptions && prescriptions.length > 0  && prescriptions.map((prescription,index)=><AppointmentPrescription key={'prescription_'+prescription.id} index={index} imageShow={imageShow} prescription={prescription} />) }
                { prescriptions && prescriptions.length === 0 && <h3 className="text-center">Prescription Not found.</h3> }
            </div>
        </>
    )
}