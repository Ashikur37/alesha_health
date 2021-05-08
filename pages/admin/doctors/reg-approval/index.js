import React,{useEffect} from "react";
import AdminAuth from "../../../../middleware/AdminAuth";
import { useContext } from 'react';
import {GlobalContext} from "../../../../context/GlobalContext";
import RegistrationApproval  from "../../../../components/Doctor/global/nav/RightSideContent/RegistrationApproval/RegistrationApproval";
import Head from "next/dist/next-server/lib/head";
const index =  function () {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <RegistrationApproval/>
        </>
    )
};
export default AdminAuth(index);