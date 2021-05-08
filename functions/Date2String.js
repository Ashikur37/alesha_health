export default function Date2String(date = new Date()) {
    /*let date;
    if(initialDate){
        date = new Date(initialDate)
    }else{
        date = new Date();
    }*/
    let day = date.getDate();
    day = day<10?('0'+day):day;
    let month = date.getMonth()+1;
    month = month<10?('0'+month):month;
    return date.getFullYear()+'-'+(month)+'-'+day;
}