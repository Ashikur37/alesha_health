export default function TimeTo24(time,option={}) {
    var date = new Date('2020-08-07 '+time);
    console.log('date',date)
    let end_point = 17;
    if(option.second === false){
        end_point = 20;
    }
    return date.toLocaleString().slice(12,end_point);
}