import ForgotComponent from "../../components/Auth/ForgotComponent";
import ResetComponent from "../../components/Auth/ResetComponent";
import NewPasswordComponent from "../../components/Auth/NewPasswordComponent";
import UserNotAuth from "../../middleware/UserNotAuth";
import {useState} from "react";


const forgot =  function () {
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
export  default UserNotAuth(forgot);