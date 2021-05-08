import React, { useState, createContext } from 'react'
export const GlobalDoctorContext = createContext();
export const GlobalDoctorProvider = props => {
    const [globalState,setGlobalState] = useState({
        auth: false,
        profile:{
            name:"shamim"
        }
    });
    return (
        <GlobalDoctorContext.Provider value={{globalState,setGlobalState}}>
            { props.children }
        </GlobalDoctorContext.Provider>
    );
};