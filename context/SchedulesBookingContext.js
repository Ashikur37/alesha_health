import React, { useState, createContext } from 'react'
export const SchedulesBookingContext = createContext();
export const SchedulesBookingProvider = props => {
    const [scheduleBookingState, setScheduleBookingState] = useState({
        schedules:{},
        _loaded: false
    });
    return (
        <SchedulesBookingContext.Provider value={ { scheduleBookingState, setScheduleBookingState } } >
            { props.children }
        </SchedulesBookingContext.Provider>
    );
};