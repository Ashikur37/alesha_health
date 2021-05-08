import App from 'next/app'
import {GlobalProvider, User} from "../context/GlobalContext";
export default function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
    )
}
// MyApp.getInitialProps = async (appContext) => {
//     appContext.appProps = {}
//     console.log('pre',User)
//     if(App.getInitialProps){
//         User.userProfile = await App.getInitialProps(appContext);
//     }else{
//         console.log("hey.....");
//     }
//     console.log('after',User)
//
//   return {  }
// }
