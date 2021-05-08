import AdminAuth from "../../../../middleware/AdminAuth";
import EditComponent from "../../../../components/Admin/Hospital/Edit/EditComponent";
import Head from "next/dist/next-server/lib/head";
import React from "react";

const index = function () {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <EditComponent />
        </>
    )
};

export default AdminAuth(index);