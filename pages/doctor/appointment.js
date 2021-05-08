import Head from "next/head";
import {Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import io from "socket.io-client";
import window from "global";
import DoctorAuth from "../../middleware/DoctorAuth";
import Cookies from "js-cookie";
const index =  function (props) {
    const [isActive, setIsActive] = useState(false);
    const [socket, setSocket] = useState(false);
    async function  serialActiveSend(){
        console.log('socket',socket)
    }
    useEffect(prev=>{
        const _jwtToken = Cookies.get('_doctorJwtToken')
        const socketConnection = io('http://localhost:3002/doctors?jwtToken='+_jwtToken);
        setSocket(socketConnection);
        socketConnection.on('connect', function(){
            console.log('connected...',socketConnection.id);
        });
        socketConnection.on('hi',(data)=>{
            console.log('data',data)
        })
        socketConnection.on("get-serial", async data => {
            console.log('get serial',data)
        });
    },[]);
    const serialActive = ()=>{
        const schedule_id = document.getElementById('schedule_id').value;
        socket.emit("serial-active", {
            schedule_id: schedule_id
        });
        popupNewWindow({url: 'http://www.xtf.dk', title: 'xtf', w: 900, h: 500});

    }
    const popupNewWindow = ({url, title, w, h}) => {
        // Fixes dual-screen position                             Most browsers      Firefox
        const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft
        const top = (height - h) / 2 / systemZoom + dualScreenTop
        const newWindow = window.open(url, title,
            `
              scrollbars=yes,
              width=${w / systemZoom}, 
              height=${h / systemZoom}, 
              top=${top}, 
              left=${left}
      `
        )

        if (window.focus) newWindow.focus();
    }
    return (
        <div>
            <div>
                <div className="container">
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <input type="text" id="schedule_id" defaultValue="24"/>
                            <button className="btn btn-success" onClick={serialActive}>Send Serial</button>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </div>
            </div>
        </div>

    )
};
export default DoctorAuth(index);