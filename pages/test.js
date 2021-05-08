import Head from 'next/head';
import io from 'socket.io-client';
import window from 'global'
import {useEffect, useLayoutEffect} from "react";
export default function () {
    const { RTCPeerConnection, RTCSessionDescription } = window;
    let peerConnection
    let socket;
    async function callUser(socketId) {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
        console.log('offer',offer)
        socket.emit("call-user", {
            offer,
            to: socketId
        });
    }
    useEffect(prev=>{
        socket = io('http://localhost:3003?user_id=2');
        peerConnection = new RTCPeerConnection();
        socket.on('connect', function(){
            console.log('connected...',socket.id);
        });
        socket.on('disconnect', function(){});
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
        socket.on("answer-made", async data => {
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

    });
    const call = ()=>{
        const caller_id = document.getElementById('caller_id').value;
        callUser(caller_id);
    }

    return (
      <>
          <Head>

          </Head>
          <div className="video-container">
              <video autoPlay className="remote-video" id="remote-video"></video>
              <video autoPlay muted className="local-video" id="local-video"></video>
          </div>
          <div>
              <input type="text" id="caller_id"/>
              <button onClick={call}>Call</button>
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
    );
}