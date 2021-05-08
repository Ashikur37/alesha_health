import { useContext, useEffect } from "react";
import nextCookie from 'next-cookies'
import redirect from "../functions/redirect";
import AdminLayout from "../components/layouts/AdminLayout";
import {GlobalContext} from "../context/GlobalContext";

export default function AdminAuth (PageComponent) {
  const Auth = ({...pageProps }) => {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  setGlobalState((prev)=>{
      return {...prev,adminAuth:true, adminProfile: { ...pageProps }}
    }), []);
    return (
        <AdminLayout>
          <PageComponent {...pageProps} />
        </AdminLayout>
    )
  };

  Auth.getInitialProps = async context  => {
    const { _adminJwtToken } = nextCookie(context);
    if(!_adminJwtToken){
      return redirect(context, '/admin/login');
    }
    return {
      name:'nurun nobi shamim'
    }
  };
  return Auth;
}


