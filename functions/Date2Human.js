import TimeTo12 from "./TimeTo12";

export default function Date2Human(date,option = {}) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let result = date.getDate()+' '+monthNames[date.getMonth()]+' '+date.getFullYear();
    if(option.time === true){
        const second = option.second?option.second:false;
        result = result+'  | '+TimeTo12(date.toLocaleTimeString(),{second})
    }
    return result;
}