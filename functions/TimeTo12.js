export default function TimeTo12(inputTime,option={}) {
    // Check correct time format and split into components
    let time = inputTime.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || false;
    let result;
    if(time){
        if (time && time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        if(option.second === false){
            time.splice(3,2);
        }
        result =  time.join (''); // return adjusted time or original string
    }else{
        time = inputTime;
        result = time;
        if(option.second === false){
            const hourMinutes = time.slice(0,5)
            const amPm = time.slice(-2);
            result = hourMinutes+' '+amPm;
        }
    }
    return result;
}