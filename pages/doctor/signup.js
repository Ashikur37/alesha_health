import {useState} from "react";
import SignupComponent from "../../components/Doctor/Auth/Signup/SignupComponent";
import VerifyComponent from "../../components/Doctor/Auth/Signup/VerifyComponent";
import DoctorNotAuth from "../../middleware/DoctorNotAuth";


const login =  function () {
    const [phone, setPhone] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [password, setPassword] = useState('');
    const [component, setComponent] = useState('SignupComponent');

    const signUpDone = ({phone, password, verification_id})=>{
        setPhone(phone);
        setPassword(password);
        setVerificationId(verification_id);
        setComponent('VerifyComponent');
    };
    const resendCodeDone = ({verification_id})=>{
        setVerificationId(verification_id);
    };

    return (
        <div>
            {component==='SignupComponent' && <SignupComponent signUpDone={signUpDone} />}
            {component==='VerifyComponent' && <VerifyComponent phone={phone} verificationId={verificationId} password={password} resendCodeDone={resendCodeDone} />}
        </div>
    )
};
export  default DoctorNotAuth(login);