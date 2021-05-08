import React, { useState, createContext } from 'react'
export const ProfileCompletionContext = createContext();
export const ProfileCompletionProvider = props => {
    const [context,setContext] = useState({
        completedStep: 0,
        loaded: false,
        personalInfo:{},
        professionalInfo:{},
        certificationInfo:{},
        designations:[],
        specialities:[],
        departments:[],
        hospitals:[],
        certificatesDeleted:[],
        workplaceInfo:[],
    });
    return (
        <ProfileCompletionContext.Provider value={{context,setContext}}>
            { props.children }
        </ProfileCompletionContext.Provider>
    );
};