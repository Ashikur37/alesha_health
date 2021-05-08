export default function SecondsToString(seconds) {
    var numhours = Math.floor(((seconds % 31536000)) / 3600).toString().padStart(2,0);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60).toString().padStart(2,0);
    var numseconds = ((((seconds % 31536000) % 86400) % 3600) % 60).toString().padStart(2,0);
    return numhours + ":" + numminutes + ":" + numseconds ;
}