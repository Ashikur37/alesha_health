async function getMedia(constraints) {
    let stream = null;

    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        /* use the stream */
    } catch(err) {
        /* handle the error */
    }
}


var peer = new Peer({key: 'doctor_lwjd5qra8257b9'});
peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
});
peer.on('connection', function(conn) {
    console.log('connected');
});


peer.on('call', function(call) {
    navigator.mediaDevices.getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', function(remoteStream) {
            // Show stream in some video/canvas element.
        });
    }, function(err) {
        console.log('Failed to get local stream' ,err);
    });
});