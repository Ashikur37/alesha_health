import React, { useState, createContext } from 'react'
import {setLang} from "../server";
export const User = {profile:{}}
export const GlobalContext = createContext();
export const GlobalProvider = props => {
    //const lang = Cookies.get('_lang');
    const lang = 'bn';
    setLang(lang);
    const [globalState,setGlobalState] = useState({
        lang: lang?lang:'bn',
        userAuth: false,
        userProfile:{
            name:''
        },
        doctorAuth: false,
        doctorProfile:{
            name:'feni'
        },
        adminAuth: false,
        adminProfile:{}
    });
    return (
        <GlobalContext.Provider value={{globalState,setGlobalState}}>
            { props.children }
        </GlobalContext.Provider>
    );
};