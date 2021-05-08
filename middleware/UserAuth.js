import {useContext, useEffect} from "react";
import nextCookie from 'next-cookies'
import redirect from "../functions/redirect";
import UserLayout from "../components/layouts/UserLayout";
import {GlobalContext} from "../context/GlobalContext";

export default function UserAuth (PageComponent, footer=true) {
  const Auth = ({...pageProps }) => {
    const { setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  {
      setGlobalState((prev)=>{
        return {...prev,userAuth:true, userProfile: { ...pageProps }}
      })
    }, []);
    return (
        <UserLayout footer={footer}>
          <PageComponent {...pageProps} />
        </UserLayout>
    )
  };
  Auth.getInitialProps = async context  => {
    const { _jwtToken } = nextCookie(context);
    if(!_jwtToken){
      return redirect(context, '/login');
    }
    return {};
  };
  return Auth;
}


