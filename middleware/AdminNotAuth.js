import { useContext, useEffect } from "react";
import nextCookie from 'next-cookies'
import redirect from "../functions/redirect";
import {GlobalContext} from "../context/GlobalContext";
import AdminNotAuthLayout from "../components/layouts/AdminNotAuthLayout";

export default function DoctorNotAuth (PageComponent) {
  const Auth = ({...pageProps }) => {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  setGlobalState((prev)=>{
      return {...prev,adminAuth:false, adminProfile: {  }}
    }), []);
    return (
        <AdminNotAuthLayout>
          <PageComponent {...pageProps} />
        </AdminNotAuthLayout>
    )
  };

  Auth.getInitialProps = async context  => {
    const { _adminJwtToken } = nextCookie(context);
    if(!!_adminJwtToken){
      return redirect(context, '/admin');
    }
    return {}
  };
  return Auth;
}


