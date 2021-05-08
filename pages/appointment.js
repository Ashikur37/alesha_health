import UserAuth from "../middleware/UserAuth";
import {Col, Row} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import io from "socket.io-client";
import window from "global";
import Cookies from 'js-cookie'
import {GlobalContext} from "../context/GlobalContext";

const index =  function ({profile}) {
    const {globalState} = useContext(GlobalContext)
    const [isActive, setIsActive] = useState(false);
    let socket;
    useEffect(prev=>{
        const _jwtToken = Cookies.get('_jwtToken')
        socket = io('http://localhost:3002?jwtToken='+_jwtToken);
        socket.on("get-serial", async data => {
            console.log('data',data)
            setIsActive(true);
        });
        socket.on('connect',()=>{
            console.log('connected...',socket.id)
        })


    },[]);
    return (
        <div>
            <div>
                <div className="container">
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <button className="btn btn-success" disabled={!isActive}>Video/Audio Call</button>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </div>
            </div>
        </div>

    )
};
export default UserAuth(index);