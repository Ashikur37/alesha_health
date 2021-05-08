import HospitalListComponent from "../../../components/Admin/Hospital/HospitalList/HospitalListComponent";
import React, {useEffect} from "react";
import axios from "axios";
import Head from "next/dist/next-server/lib/head";

const index = function () {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
                <link rel="stylesheet" href="/styles/pagination.css"/>
            </Head>
            <HospitalListComponent/>
        </>
    )
};

export default index