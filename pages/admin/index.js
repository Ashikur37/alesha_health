import React,{useEffect} from "react";
import AdminAuth from "../../middleware/AdminAuth";
import { useContext } from 'react';
import {GlobalContext} from "../../context/GlobalContext";
// import Doctors from "../../components/Doctor/global/nav/RightSideContent/Doctors/Doctors";
const index =  function () {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    return (
        <>
           Home
        </>

    )
};
export default AdminAuth(index);