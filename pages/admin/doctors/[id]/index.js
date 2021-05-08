import Head from "next/dist/next-server/lib/head";
import AdminAuth from "../../../../middleware/AdminAuth";
import DoctorComponent from "../../../../components/Admin/Doctor/DoctorComponent";
const index =  function () {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
                <link rel="stylesheet" href="/styles/pagination.css"/>
            </Head>
            <DoctorComponent />
        </>
    )
};
export default AdminAuth(index);