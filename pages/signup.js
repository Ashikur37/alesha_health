import UserNotAuth from "../middleware/UserNotAuth";
import {useState} from "react";
import SignupComponent from "../components/Auth/Signup/SignupComponent";
import ResetComponent from "../components/Auth/Signup/ResetComponent";


const login =  function () {
    const [phone, setPhone] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [password, setPassword] = useState('');
    const [component, setComponent] = useState('SignupComponent');

    const signUpDone = ({phone, verification_id, password})=>{
        setPhone(phone);
        setPassword(password);
        setVerificationId(verification_id);
        setComponent('ResetComponent');
    };
    const resendCodeDone = ({verification_id})=>{
        setVerificationId(verification_id);
    };

    return (
        <div>
            {component==='SignupComponent' && <SignupComponent signUpDone={signUpDone} />}
            {component==='ResetComponent' && <ResetComponent phone={phone} verificationId={verificationId} password={password} resendCodeDone={resendCodeDone}  />}
        </div>
    )
};
export  default UserNotAuth(login);