import LoginComponent from "../components/Auth/LoginComponent";
import UserNotAuth from "../middleware/UserNotAuth";
import {useState} from "react";
import ResetComponent from "../components/Auth/Signin/ResetComponent";


const login =  function () {
    const [loginData, setLoginData] = useState({});
    const [component, setComponent] = useState('LoginComponent');
    const loginDone = ({phone,password,verificationId})=>{
        setLoginData({
            phone,password,verificationId
        });
        setComponent('ResetComponent');
    };
    const codeResent = ({verificationId})=>{
        setLoginData(prev=>{
            return {...prev,verificationId}
        });
    };
    return (
        <div>
            {component==='LoginComponent' && <LoginComponent loginDone={loginDone} />}
            {component==='ResetComponent' && <ResetComponent loginData={loginData} codeResent={codeResent} />}
        </div>
    )
};
export  default UserNotAuth(login);