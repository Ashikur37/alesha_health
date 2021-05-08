import Appointments from "../../components/patient/persional/Appointments";
import Head from "next/head";
import UserAuth from "../../middleware/UserAuth";
const index =  function (props) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            {/*<PatientPrescriptionList/>*/}
            {/*<AppointmentsSearch/>*/}

            <Appointments/>
        </div>

    )
};
export default UserAuth(index);