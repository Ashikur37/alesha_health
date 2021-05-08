import { useContext, useEffect } from "react";
import nextCookie from 'next-cookies'
import { useRouter } from 'next/router'
import redirect from "../functions/redirect";
import DoctorLayout from "../components/layouts/DoctorLayout";
import {GlobalContext} from "../context/GlobalContext";

export default function DoctorAuth (PageComponent) {
  const Auth = ({...pageProps }) => {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  setGlobalState((prev)=>{
      return {...prev,doctorAuth:true, doctorProfile: { ...pageProps }}
    }), []);
    return (
        <DoctorLayout>
          <PageComponent {...pageProps} />
        </DoctorLayout>
    )
  };

  Auth.getInitialProps = async context  => {
    const { _doctorJwtToken, _notCompleted } = nextCookie(context);
    if(!_doctorJwtToken){
      return redirect(context, '/doctor/login');
    }
    if(_notCompleted){
      return redirect(context, '/doctor/profile-completion');
    }
    return {
      name:'nurun nobi shamim'
    }
  };
  return Auth;
}


