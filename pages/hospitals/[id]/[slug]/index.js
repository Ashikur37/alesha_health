import {Container,Row,Col} from "react-bootstrap";
import General from "../../../../middleware/General";
import DoctorList from "../../../../components/Admin/Hospital/HospitalList/DoctorList";
import Head from "next/head";

const index =  function () {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <Container>
                <DoctorList/>
            </Container>
        </div>
    )
};
export  default General(index);