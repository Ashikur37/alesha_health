import FilterDoctor from "../../components/Doctors/FilterDoctor";
import SearchedDoctor from '../../components/Doctors/SearchedDoctor';
import AdvanceSearchedDoctor from '../../components/Doctors/DoctorsAdvanceSearch';
import DoctorList from "../../components/Doctors/DoctorList/DoctorList";
import {Container,Row,Col} from "react-bootstrap";
import General from "../../middleware/General";
import Head from "next/head";
import {useEffect} from "react";


const index =  function (props) {
    useEffect(()=>{
        console.log('index',props)
    },[]);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/placeholder-loading.css"/>
            </Head>
            <div className="mt-5">
                <Container>
                    {/*<FilterDoctor/>*/}
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <SearchedDoctor/>
                            <Row className="mt-4">
                                {/*<Col md={3}>*/}
                                {/*    <AdvanceSearchedDoctor/>*/}
                                {/*</Col>*/}

                                <Col lg={12}>
                                    <DoctorList/>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>

                </Container>

            </div>
        </>
    )
};
export  default General(index);