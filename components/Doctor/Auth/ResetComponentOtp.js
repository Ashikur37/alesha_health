import {Col,Row,Form,Button,Container} from 'react-bootstrap'
import style from './ResetComponentOtp.module.css';
import {useEffect, useRef, useState} from "react";

function ResetComponentOtp({codeEnter}) {

    const [code,setCode] = useState(['','','','','','']);
    // ref
    const codeRef1 = useRef();
    const codeRef2 = useRef();
    const codeRef3 = useRef();
    const codeRef4 = useRef();
    const codeRef5 = useRef();
    const codeRef6 = useRef();
    const codeRefs = [
        codeRef1,
        codeRef2,
        codeRef3,
        codeRef4,
        codeRef5,
        codeRef6
    ];


    //code input
    useEffect(()=>{
        codeRefs[0].current.focus();
    },[]);

    //code input
    useEffect(()=>{
        codeEnter(code.join(''));
    },[code]);
    const setCodes = (value,index)=>{
        setCode((prev)=>{
            return prev.map((ele,stateIndex)=>{
                if(stateIndex === index){
                    return value;
                }
                return ele
            })
        });
    };
    const codeInput = (e,index)=>{
        const value = e.target.value;
        if(value.length===0){
            setCodes('',index);
        }
    };
    const handleCode = (e,index)=>{
        let charCode = e.which || e.keyCode;
        if(charCode<48 || charCode>57){
            e.preventDefault();
        }else{
            const value = String.fromCharCode(charCode);
            setCodes(value,index);
            if(index<5){
                codeRefs[index+1].current.focus();
            }
        }
    };
    return(
        <div className={style.restOtp}>
            <Form className='px-1'>
                <Row>
                    <Col className='px-1'>
                        <Form.Control className={style.wkFromInput} ref={codeRef1} onKeyPress={e=>handleCode(e,0)} value={code[0]} onChange={(e)=>codeInput(e,0)} />
                    </Col>
                    <Col className='px-1'>
                        <Form.Control className={style.wkFromInput} ref={codeRef2} onKeyPress={e=>handleCode(e,1)} value={code[1]} onChange={(e)=>codeInput(e,1)} />
                    </Col>
                    <Col className='px-1'>
                        <Form.Control  className={style.wkFromInput} ref={codeRef3} onKeyPress={e=>handleCode(e,2)} value={code[2]}  onChange={(e)=>codeInput(e,2)}  />
                    </Col>
                    <Col className='px-1'>
                        <Form.Control className={style.wkFromInput} ref={codeRef4} onKeyPress={e=>handleCode(e,3)} value={code[3]}  onChange={(e)=>codeInput(e,3)}  />
                    </Col>
                    <Col className='px-1'>
                        <Form.Control  className={style.wkFromInput} ref={codeRef5} onKeyPress={e=>handleCode(e,4)} value={code[4]}  onChange={(e)=>codeInput(e,4)}  />
                    </Col>
                    <Col className='px-1'>
                        <Form.Control className={style.wkFromInput} ref={codeRef6} onKeyPress={e=>handleCode(e,5)} value={code[5]}  onChange={(e)=>codeInput(e,5)} />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
export default ResetComponentOtp;