import {useContext, useEffect} from "react";
import nextCookie from 'next-cookies'
import redirect from "../functions/redirect";
import UserLayout from "../components/layouts/UserLayout";
import {GlobalContext, User} from "../context/GlobalContext";
import fetch from 'node-fetch'

export default function UserAuthAndProfile (PageComponent) {
  const Auth = ({...pageProps }) => {
    const { setGlobalState} = useContext(GlobalContext);
    useEffect(() =>  {
      User.profile = pageProps.profile
      setGlobalState((prev)=>{
        return {...prev,userAuth:true, userProfile: { ...pageProps }}
      })
    }, []);
    return (
        <UserLayout>
          <PageComponent {...pageProps} />
        </UserLayout>
    )
  };
  Auth.getInitialProps = async context  => {
    const { _jwtToken } = nextCookie(context);
    if(!_jwtToken){
      return redirect(context, '/login');
    }
    let user = User.profile;
    if(!user.id){
      // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      // const json = await res.json();
      // User.name = json.title;
      user = {
        id: 1,
        name: 'Nurun nobi shamim'
      }
    }
    return {profile:user};
  };
  return Auth;
}


