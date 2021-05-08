import { useContext, useEffect } from "react";
import nextCookie from 'next-cookies'
import { useRouter } from 'next/router'
import redirect from "../functions/redirect";
import DoctorLayout from "../components/layouts/DoctorLayout";
import {GlobalContext} from "../context/GlobalContext";

export default function DoctorNotAuth (PageComponent) {
  const Auth = ({...pageProps }) => {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  setGlobalState((prev)=>{
      return {...prev,doctorAuth:false, doctorProfile: {  }}
    }), []);
    return (
        <DoctorLayout>
          <PageComponent {...pageProps} />
        </DoctorLayout>
    )
  };

  Auth.getInitialProps = async context  => {
    const { _doctorJwtToken } = nextCookie(context);
    if(!!_doctorJwtToken){
      return redirect(context, '/doctor');
    }
    return {}
  };
  return Auth;
}


