import React, { useState, createContext } from 'react'
export const DoctorSchedulesContext = createContext();
export const DoctorSchedulesProvider = props => {
    const [scheduleState, setScheduleState] = useState({
        schedules:false,
    });
    return (
        <DoctorSchedulesContext.Provider value={{scheduleState,setScheduleState}}>
            { props.children }
        </DoctorSchedulesContext.Provider>
    );
};