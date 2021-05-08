export default function ErrorHandler({err,setErrors,msgRef}){
    if(err.response && err.response.data){
        if(err.response.data.error_type === 1001){
            setErrors({...err.response.data.errors});
        }else if(err.response.data.message){
            msgRef.current.show({type:'danger', text:err.response.data.message});
        }else{
            msgRef.current.show({type:'danger', text:'Failed. Please try again!'});
        }
    }else{
        msgRef.current.show({type:'danger', text:'Failed. Please try again!'});
    }
}