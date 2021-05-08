import LoginComponent from "../../components/Doctor/Auth/LoginComponent";
import DoctorNotAuth from "../../middleware/DoctorNotAuth";
import {useState} from "react";
import VerifyComponent from "../../components/Doctor/Auth/Signin/VerifyComponent";
import ResetComponent from "../../components/Auth/Signin/ResetComponent";

const login =  function () {
    const [loginData, setLoginData] = useState({});
    const [component, setComponent] = useState('LoginComponent');
    const loginDone = ({phone,password, verificationId})=>{
        setLoginData({
            phone,password,verificationId
        });
        setComponent('VerifyComponent');
    };
    const codeResent = ({verificationId})=>{
        setLoginData(prev=>{
            return {...prev,verificationId}
        });
    };
    return (
        <>
            {component==='LoginComponent' && <LoginComponent loginDone={loginDone} />}
            {component==='VerifyComponent' && <VerifyComponent loginData={loginData} codeResent={codeResent}  />}
        </>
    )
};
export  default DoctorNotAuth(login);