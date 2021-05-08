import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import io from "socket.io-client";
import {useRouter} from "next/router";
import UserAuth from "../../../middleware/UserAuth";
import window from "global";
import {Button, Modal} from "react-bootstrap";
import SecondsToString from "../../../functions/SecondsToString";

const _jwtToken = Cookies.get('_jwtToken');
const socket = io(process.env.REALTIME_SERVER_URL+'/schedule_call?type=callee&jwtToken='+_jwtToken);
let peerConnection;
const call = function (props) {
    const router = useRouter();
    const [reCallModal, setReCallModal] = useState(false);
    const [isCallRunning, setIsCallRunning] = useState(true);
    const [callingTime, setCallingTime] = useState(0);
    let {type, id, call_type, call_id, caller_id} = router.query;
    const { RTCPeerConnection, RTCSessionDescription } = window;

    useEffect(()=>{
        peerConnection = new RTCPeerConnection();
        if(type==='callee'){
            caller_id = '/schedule_call#'+caller_id;
            callReceive(caller_id);
            callUser(caller_id);
        }
        socket.on('call-received-confirm',data=>{
            setCallingTime(prev=>{return prev + 1;});
            const interval = setInterval(()=>{
                setCallingTime(prev=>{return prev + 1;})
            },1000);
            socket.timerInterval = interval;
            setIsCallRunning(true);
        });
        socket.on("answer-made", async data => {
            if (peerConnection.iceConnectionState !== 'closed'){
                await peerConnection.setRemoteDescription(
                    new RTCSessionDescription(data.answer)
                );
                callUser(data.socket);
            }
        });
        socket.on('peer-leave',data=>{
            setReCallModal(true);
            if(socket.timerInterval){
                clearInterval(socket.timerInterval);
                socket.timerInterval = false;
            }
            setIsCallRunning(false);
        });
        socket.on('call-end',data=>{
            setReCallModal(true);
            peerConnection.close();
            if(socket.timerInterval){
                clearInterval(socket.timerInterval);
                socket.timerInterval = false;
            }
            setIsCallRunning(false);
        });
        socket.on("call-made", async data => {
            await peerConnection.setRemoteDescription(
                new RTCSessionDescription(data.offer)
            );
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(new RTCSessionDescription(answer));

            socket.emit("make-answer", {
                answer,
                to: data.socket
            });
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
                console.warn(error.message);
            }
        );

    },[]);
    async function callUser(socketId) {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
        socket.emit("call-user", {
            offer,
            to: socketId
        });
    }
    async function callReceive(socketId) {
        socket.emit("call-received", {
            call_id: call_id,
            schedule_id: id,
            peer_id: socketId,
        });
        socket.emit("set-peer-id", {
            peer_id: socketId,
        });
    }
    async function  callEnd (){
        peerConnection.close();
        setIsCallRunning(false);
        setReCallModal(true);
        if(socket.timerInterval){
            clearInterval(socket.timerInterval);
            socket.timerInterval = false;
        }
        socket.emit('call-end',{
            schedule_id: id
        });
    }
    return <>
        <Modal show={reCallModal} onHide={()=>{}}>
            <Modal.Header>
                <Modal.Title>Call End</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Your call end or peer connection lost.
            </Modal.Body>
        </Modal>
        <div className="video-container">
            <video autoPlay poster="/img/placeholder/doctor-placeholder.jpg" className="remote-video" id="remote-video"></video>
            <div id="call-bottom-info">
                <div className="mb-1" style={{border: '1px solid #000'}}>
                    <p id="call-timer">{ SecondsToString(callingTime) }</p>
                </div>
                { isCallRunning && <Button className="wk-danger-button" variant="primary"  onClick={callEnd}>Call End</Button> }
            </div>
            <video autoPlay muted poster="/img/placeholder/user-placeholder.jpg" className="local-video" id="local-video"></video>
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

export default UserAuth(call,false);