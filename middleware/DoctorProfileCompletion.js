import { useContext, useEffect } from "react";
import nextCookie from 'next-cookies'
import redirect from "../functions/redirect";
import DoctorLayout from "../components/layouts/DoctorLayout";
import {GlobalContext} from "../context/GlobalContext";
import {ProfileCompletionProvider} from "../context/ProfileCompletionContext";

export default function DoctorAuth (PageComponent) {
  const Auth = ({...pageProps }) => {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  setGlobalState((prev)=>{
      return {...prev,doctorAuth:true, doctorProfile: { ...pageProps }}
    }), []);
    return (
      <ProfileCompletionProvider>
        <DoctorLayout>
          <PageComponent {...pageProps} />
        </DoctorLayout>
      </ProfileCompletionProvider>
    )
  };

  Auth.getInitialProps = async context  => {
    const { _doctorJwtToken, _notCompleted } = nextCookie(context);
    if(!_doctorJwtToken){
      return redirect(context, '/doctor/login');
    }
    return {
      name:'nurun nobi shamim'
    }
  };
  return Auth;
}


