import server from "../server";

function get({url,params={},axios=server},callback){
     axios.get(url,{
        params
    }).then(res=>{
         callback(res);
    })
}

export default get;