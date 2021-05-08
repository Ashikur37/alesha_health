import axios from 'axios'
import Cookies from 'js-cookie'
const adminServer =  axios.create({
    baseURL: process.env.SERVER_URL
});
export const setAuthToken = (token)=>{
    adminServer.defaults.headers.common['Authorization'] = 'Bearer '+token;
};
setAuthToken(Cookies.get('_adminJwtToken'));
export default adminServer;