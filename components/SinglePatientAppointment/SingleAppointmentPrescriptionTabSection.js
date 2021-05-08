import React, {useEffect, useState} from "react";
import TimeSection from "./AppointmentSections/TimeSection";
import PrescriptionSection from "./AppointmentSections/PrescriptionSection";
import PaymentSection from "./AppointmentSections/PaymentSection";
import style from './SingleAppointmentPrescriptionTabSection.module.css';
import {useRouter} from "next/router";
import doctorServer from "../../doctorServer";
import {Button, Modal} from "react-bootstrap";
import Msg from "../Msg";
import AppointmentPrescriptionPlaceholders from "../Doctor/AppointmentDetails/AppointmentPrescriptionPlaceholders";
import AppointmentPrescription from "./AppointmentPrescription";
import userServer from "../../userServer";


export default function ({payment_status}) {
    const router = useRouter();
    const {id} = router.query;
    const [prescriptions,setPrescriptions] = useState(false);


    useEffect(()=>{
        if(payment_status === 2){
            loadPrescriptions();
        }
    },[]);

    const loadPrescriptions = ()=>{
        return userServer.get('/appointment-schedules/'+id+'/prescriptions').then((res)=>{
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
                { payment_status !== 2 && <h3 className="text-center mt-3 text-danger">With out payment you can't see prescription.</h3> }
                { payment_status === 2 && !prescriptions && <AppointmentPrescriptionPlaceholders /> }
                { prescriptions && prescriptions.length > 0  && prescriptions.map((prescription,index)=><AppointmentPrescription key={'prescription_'+prescription.id} index={index} imageShow={imageShow} prescription={prescription} />) }
                { prescriptions && prescriptions.length === 0 && <h3 className="mt-3 text-center">Prescription Not found.</h3> }
            </div>
        </>
    )
}