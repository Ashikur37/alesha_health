import axios from 'axios'
import Cookies from 'js-cookie'
const server =  axios.create({
    baseURL: process.env.SERVER_URL
});
export const setLang = (lang)=>{
    server.defaults.headers.common['_lang'] = lang;
};
setLang(Cookies.get('_lang')||'bn');
export default server;