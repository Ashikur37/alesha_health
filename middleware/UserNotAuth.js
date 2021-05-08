
import nextCookie from 'next-cookies'
import redirect from "../functions/redirect";
import UserLayout from "../components/layouts/UserLayout";

export default function UserNotAuth (PageComponent) {
  const Auth = ({...pageProps }) => {

    return (
        <UserLayout>
          <PageComponent {...pageProps} />
        </UserLayout>
    )
  };

  Auth.getInitialProps = async context  => {
    const { _jwtToken } = nextCookie(context);
    if(!!_jwtToken){
      return redirect(context, '/');
    }
    return {}
  };
  return Auth;
}


