import DoctorAuthLayout from "../../components/layouts/DoctorAuthLayout";
import AboutMeComponent from "../../components/Doctor/Home/AboutMeComponent";
import MenuTabComponent from "../../components/Doctor/Home/MenuTabComponent";
import TodayAppointmentComponent from "../../components/Doctor/Home/TodayAppointmentComponent";
import DoctorAuth from "../../middleware/DoctorAuth";
import DoctorLayout from "../../components/layouts/DoctorLayout";
import { useContext } from 'react';
import {GlobalContext} from "../../context/GlobalContext";
const index =  function (props) {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    return (
        <>
            <AboutMeComponent/>
            <MenuTabComponent/>
            <TodayAppointmentComponent/>
        </>

    )
};
export default DoctorAuth(index);