import React,{useEffect} from "react";
import AdminAuth from "../../../../middleware/AdminAuth";
import { useContext } from 'react';
import {GlobalContext} from "../../../../context/GlobalContext";
import Appointments from "../../../../components/Doctor/global/nav/RightSideContent/Appointment/Appointment";
const index =  function () {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    return (
        <>
            <Appointments/>
        </>
    )
};
export default AdminAuth(index);