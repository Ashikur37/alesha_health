import { useContext, useEffect } from "react";
import nextCookie from 'next-cookies'
import { useRouter } from 'next/router'
import redirect from "../functions/redirect";
import {GlobalContext} from "../context/GlobalContext";
import UserLayout from "../components/layouts/UserLayout";

export default function General (PageComponent) {
  const Auth = ({...pageProps }) => {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  setGlobalState((prev)=>{
      return {...prev,...pageProps}
    }), []);
    return (
        <UserLayout>
          <PageComponent {...pageProps} />
        </UserLayout>
    )
  };

  Auth.getInitialProps = async context  => {
    const { _jwtToken } = nextCookie(context);
    if(_jwtToken){
      return {
        userAuth: true,
      }
    }else{
      return {
        userAuth: false,
      }
    }
  };
  return Auth;
}


