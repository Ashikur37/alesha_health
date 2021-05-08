
import DoctorNotAuth from "../../../middleware/DoctorNotAuth";
import ForgotComponent from "../../../components/Doctor/Auth/ForgotComponent";
import ResetComponent from "../../../components/Doctor/Auth/ResetComponent";
import NewPasswordComponent from "../../../components/Doctor/Auth/NewPasswordComponent";
import {useState} from "react";


const reset =  function () {
    const [resetData, setResetData] = useState({id:'', phone:''});
    const [code, setCode] = useState('');
    const [component, setComponent] = useState('ForgotComponent');

    const sentCode = ({id,phone})=>{
        setResetData({id,phone});
        setComponent('ResetComponent');
    };
    const codeMatched = ({code})=>{
        setCode(code);
        setComponent('NewPasswordComponent');
    };

    const codeReSent = ({id,phone})=>{
        setResetData({id,phone});
    };
    return (
        <div>
            {component==='ForgotComponent' && <ForgotComponent sentCode={sentCode} />}
            {component==='ResetComponent' && <ResetComponent  codeReSent={codeReSent} resetData={resetData} codeMatched={codeMatched}/>}
            {component==='NewPasswordComponent' && <NewPasswordComponent code={code} resetData={resetData} />}
        </div>
    )
};
export  default DoctorNotAuth(reset);