import axios from 'axios'
import Cookies from 'js-cookie'
const doctorServer =  axios.create({
    baseURL: process.env.SERVER_URL
});
export const setAuthToken = (token)=>{
    doctorServer.defaults.headers.common['Authorization'] = 'Bearer '+token;
};
setAuthToken(Cookies.get('_doctorJwtToken'));
export default doctorServer;