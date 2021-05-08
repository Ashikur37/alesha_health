import Cookies from "js-cookie";
import {useEffect} from "react";
import {useRouter} from "next/router";

const logout =  function () {
    const router = useRouter();
    useEffect(() =>  {
        Cookies.remove('_jwtToken');
        router.replace('/');
    }, []);
    return (
        <></>
    )
};
export  default logout;