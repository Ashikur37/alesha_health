import MenuTabComponent from "../../components/Doctor/Home/MenuTabComponent";
import TodayAppointmentComponent from "../../components/Doctor/Home/TodayAppointmentComponent";
import DoctorAuth from "../../middleware/DoctorAuth";
import DoctorLayout from "../../components/layouts/DoctorLayout";
import { useContext } from 'react';
import {GlobalContext} from "../../context/GlobalContext";
import PatientIntroductionComponent from "../../components/Doctor/prescription/PatientIntroductionComponent";
import PatientHistoryMenuComponent from "../../components/Doctor/prescription/PatientHistoryMenuComponent";
import PatientMenuTabComponent from "../../components/Doctor/prescription/PaticentMenuTabComponent";
import PrescriptionSheetComponent from "../../components/Doctor/prescription/PrescriptionSheetComponent";
const prescription =  function (props) {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    return (
        <>
            <PatientMenuTabComponent/>
            <PatientIntroductionComponent/>
            <PatientHistoryMenuComponent/>
            <PrescriptionSheetComponent/>
        </>

    )
};
export default DoctorAuth(prescription);