import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import io from "socket.io-client";
import {useRouter} from "next/router";
import DoctorAuth from "../../../../middleware/DoctorAuth";
import window from "global";
import {Button, Modal} from "react-bootstrap";
import SecondsToString from "../../../../functions/SecondsToString";
const _doctorJwtToken = Cookies.get('_doctorJwtToken');
const socket = io(process.env.REALTIME_SERVER_URL+'/schedule_call?jwtToken='+_doctorJwtToken);
let peerConnection;
const call = function (props) {
    const router = useRouter();
    let { id, call_type, caller_id } = router.query;
    const [reCallModal, setReCallModal] = useState(false);
    const [callingTime, setCallingTime] = useState(0);
    const [isReCallEnable, setIsReCallEnable] = useState(true);
    const [isCallRunning, setIsCallRunning] = useState(true);
    const [modalData, setModalData] = useState({});
    const { RTCPeerConnection, RTCSessionDescription } = window;
    //const [timerInterval, setTimerInterval] = useState(false);

    useEffect(()=>{
        callOffer();

    },[]);
    const loadInitializer = ()=>{
        peerConnection = new RTCPeerConnection();
        socket.on('connect',()=>{
            console.log("connected....",socket.id)
        });
        socket.on('call-received',data=>{
            socket.emit("call-received-confirm", {
                peer_id: data.peer_id
            });
            setCallingTime(prev=>{return prev + 1;});
            const interval = setInterval(()=>{
                setCallingTime(prev=>{return prev + 1;})
            },1000);
            socket.timerInterval = interval;
            setIsCallRunning(true);
            socket.emit("set-peer-id", {
                peer_id: data.peer_id
            });
        });
        socket.on('peer-leave',data=>{
            setModalData({
                title: 'Call End',
                body: 'Your call end or peer connection lost.',
            });
            setIsCallRunning(false);
            setReCallModal(true);
            setIsReCallEnable(false);
            if(socket.timerInterval){
                clearInterval(socket.timerInterval);
                socket.timerInterval = false;
            }
        });
        socket.on("call-made", async data => {
            try{
                if (peerConnection.iceConnectionState !== 'closed'){
                    await peerConnection.setRemoteDescription(
                        new RTCSessionDescription(data.offer)
                    );
                    const answer = await peerConnection.createAnswer();
                    await peerConnection.setLocalDescription(new RTCSessionDescription(answer));
                    //console.log('peerConnection',peerConnection.iceConnectionState) here
                    socket.emit("make-answer", {
                        answer,
                        to: data.socket
                    });
                }
            }catch(e){

            }
        });
        socket.on('call-end',data=>{
            peerConnection.close();
            setIsCallRunning(false);
            setIsReCallEnable(false);
            socket.emit('call-end',{
                schedule_id: id
            });
            setModalData({
                title: 'Call End',
                body: 'Your call end',
            });
            setReCallModal(true);
            if(socket.timerInterval){
                clearInterval(socket.timerInterval);
                socket.timerInterval = false;
            }
        });
        socket.on('call-reject',data=>{
            setModalData({
                title: 'Call Reject',
                body: 'Your call reject or connection lost.',
            });
            setReCallModal(true);
            setIsCallRunning(false);
        });
        socket.on("answer-made", async data => {
            await peerConnection.setRemoteDescription(
                new RTCSessionDescription(data.answer)
            );
            callUser(data.socket);
            setIsReCallEnable(false);
        });
        peerConnection.ontrack = function({ streams: [stream] }) {
            const remoteVideo = document.getElementById("remote-video");
            if (remoteVideo) {
                remoteVideo.srcObject = stream;
            }
        };
        window.navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        window.navigator.getUserMedia(
            { video: call_type==='video', audio: true },
            stream => {
                const localVideo = document.getElementById("local-video");
                if (localVideo) {
                    localVideo.srcObject = stream;
                }

                stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
            },
            error => {

            }
        );
    };
    async function  callEnd (){
        peerConnection.close();
        setIsCallRunning(false);
        setIsReCallEnable(false);
        setModalData({
            title: 'Call End',
            body: 'Your call end',
        });
        setReCallModal(true);
        if(socket.timerInterval){
            clearInterval(socket.timerInterval);
            socket.timerInterval = false;
        }
        socket.emit('call-end',{
            schedule_id: id
        });

    }
    const callOffer = ()=>{
        setReCallModal(false);
        setIsCallRunning(true);
        socket.emit('make-call-offer',{
            schedule_id: id,
            call_type: call_type
        },(data)=>{

        });
        loadInitializer();
    };
    async function callUser(socketId) {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
        socket.emit("call-user", {
            offer,
            to: socketId
        });
    }
    return <>
        <Modal show={reCallModal} onHide={()=>{}}>
            <Modal.Header>
                <Modal.Title>{modalData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalData.body}
            </Modal.Body>
            {
                isReCallEnable && (
                    <Modal.Footer>
                        <Button className="wk-general-button" variant="primary" onClick={callOffer}>Re Call</Button>
                    </Modal.Footer>
                )
            }
        </Modal>
        <div className="video-container">
            <video autoPlay poster="/img/placeholder/user-placeholder.jpg" className="remote-video" id="remote-video"></video>
            <div id="call-bottom-info">
                <div className="mb-1" style={{border: '1px solid #000'}}>
                    <p id="call-timer">{ SecondsToString(callingTime) }</p>
                </div>
                { isCallRunning && <Button className="wk-danger-button" variant="primary"  onClick={callEnd}>Call End</Button> }
            </div>
            <video autoPlay muted poster="/img/placeholder/doctor-placeholder.jpg" className="local-video" id="local-video"></video>
        </div>
        <style global jsx>{`
               #local-video{
                    width: 200px;
                    height: 200px;
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
                }
                #call-bottom-info{
                    position: absolute;
                    left: calc(50% - 75px);
                    bottom: 30px;
                    width:150px;
                    text-align:center;
                }
                #call-timer{
                    background: rgb(0, 0, 0, 0.6);
                    color: #fff;
                    border: 1px solid #fff;
                    padding: 0px;
                    margin: 0px;
                }
              `}
        </style>
        </>
};

export default DoctorAuth(call);