import axios from 'axios'
import Cookies from 'js-cookie'
const userServer =  axios.create({
    baseURL: process.env.SERVER_URL
});
export const setAuthToken = (token)=>{
    userServer.defaults.headers.common['Authorization'] = 'Bearer '+token;
};
export const setLang = (lang)=>{
    userServer.defaults.headers.common['_lang'] = lang;
};
setAuthToken(Cookies.get('_jwtToken'));
setLang(Cookies.get('_lang')||'en');
export default userServer;