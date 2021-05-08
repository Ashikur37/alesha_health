import React,{useEffect} from "react";
import AdminAuth from "../../middleware/AdminAuth";
import { useContext } from 'react';
import {GlobalContext} from "../../context/GlobalContext";
import BkashPayment from "../../components/Admin/BkashPayment/BkashPayment";
import Head from "next/dist/next-server/lib/head";
// import Doctors from "../../components/Doctor/global/nav/RightSideContent/Doctors/Doctors";
const index =  function () {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
                <link rel="stylesheet" href="/styles/pagination.css"/>
            </Head>
            <BkashPayment />
        </>

    )
};
export default AdminAuth(index);