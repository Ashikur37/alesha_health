import Cookies from "js-cookie";
import {useEffect} from "react";
import {useRouter} from "next/router";

const logout =  function () {
    const router = useRouter();
    useEffect(() =>  {
        Cookies.remove('_adminJwtToken');
        router.replace('/admin/login');
    }, []);
    return (
        <></>
    )
};
export  default logout;