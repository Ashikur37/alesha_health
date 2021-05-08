import {useEffect, useRef, useState} from "react";
import {Alert} from "react-bootstrap";

export default function ({generateRef}) {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({type:'',text:''});
    useEffect((type) =>  {
        generateRef.current = {};
        generateRef.current.show = showMsg;
        generateRef.current.hide = hide;

    },[]);
    const showMsg = ({type,text})=>{
        setMessage({type,text});
        setShow(true);
    };
    const hide = ()=>{
        setShow(false);
    };
    const close = ()=>{
        setShow(false)
    };

    return (
        <>
            {
                show && message.text && (
                    <Alert variant={message.type} onClose={close} dismissible>
                        <p>{message.text}</p>
                    </Alert>
                )
            }
        </>
    );
}