
async function getMedia(constraints) {
    let stream = null;

    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        /* use the stream */
    } catch(err) {
        /* handle the error */
    }
}

var peer = new Peer({key: 'my1hg60hav000000'});
peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
});
const dest_peer = 'goxhit9zlk000000';

var conn = peer.connect(dest_peer);


var constraints = { audio: true};


navigator.mediaDevices.getUserMedia({video: false, audio: true}, function(stream) {
    var call = peer.call(dest_peer, stream);
    call.on('stream', function(remoteStream) {
        // Show stream in some video/canvas element.
    });
}, function(err) {
    console.log('Failed to get local stream' ,err);
});