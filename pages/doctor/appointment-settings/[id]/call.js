import DoctorAuth from "../../../../middleware/DoctorAuth";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import io from "socket.io-client";
import {useRouter} from "next/router";
import window from "global";
const call = function (props) {
    const router = useRouter()
    const {type} = router.query;
    //const [socket, setSocket] = useState(false);
    let socket;
    const { RTCPeerConnection, RTCSessionDescription } = window;
    let peerConnection

    async function callUser(socketId) {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
        console.log('offer',offer)
        socket.emit("call-user", {
            offer,
            to: socketId
        });
    }
    useEffect(()=>{
        const _jwtToken = Cookies.get('_doctorJwtToken')
        const socketConnection = io('http://localhost:3002/schedule_call?&jwtToken='+_jwtToken);
        //setSocket(socketConnection);
        peerConnection = new RTCPeerConnection();
        socket = socketConnection;
        socketConnection.on('connect', function(){
            console.log('connected',socketConnection.id)
            if(type==='caller'){
                socketConnection.emit('make-call-offer',{
                    user_id:1,
                    schedule_id:24,
                    user_type:'user'
                })
            }
        });
        socketConnection.on("call-made", async data => {
            await peerConnection.setRemoteDescription(
                new RTCSessionDescription(data.offer)
            );
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(new RTCSessionDescription(answer));

            socketConnection.emit("make-answer", {
                answer,
                to: data.socket
            });
        });
        socketConnection.on("answer-made", async data => {
            await peerConnection.setRemoteDescription(
                new RTCSessionDescription(data.answer)
            );
            callUser(data.socket);
        });
        peerConnection.ontrack = function({ streams: [stream] }) {
            const remoteVideo = document.getElementById("remote-video");
            if (remoteVideo) {
                remoteVideo.srcObject = stream;
            }
        };
        window.navigator.getUserMedia(
            { video: true, audio: true },
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
    return <>
        <div className="video-container">
            <video autoPlay className="remote-video" id="remote-video"></video>
            <video autoPlay muted className="local-video" id="local-video"></video>
        </div>
        <style global jsx>{`
               #local-video{
                    width: 200px;
                    height: 200px;
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
              `}
        </style>
        </>
}

export default DoctorAuth(call);