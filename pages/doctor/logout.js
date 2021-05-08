import LoginComponent from "../../components/Doctor/Auth/LoginComponent";
import DoctorNotAuth from "../../middleware/DoctorNotAuth";
import nextCookie from "next-cookies";
import Cookies from "js-cookie";
import redirect from "../../functions/redirect";
import DoctorLayout from "../../components/layouts/DoctorLayout";
import {useEffect} from "react";
import {useRouter} from "next/router";

const logout =  function () {
    const router = useRouter();
    useEffect(() =>  {
        Cookies.remove('_doctorJwtToken');
        Cookies.remove('_notCompleted');
        router.replace('/doctor/login');
    }, []);
    return (
        <></>
    )
};
export  default logout;