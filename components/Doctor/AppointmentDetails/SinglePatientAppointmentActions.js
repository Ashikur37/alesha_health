import style from "./SinglePatientAppointment.module.css";

export default function ({ isActive, serialActive, scheduleComplete, completeActionLoading, callToUser }) {
    return(
        <div className={"row justify-content-center " + style.singleAppointmentButtonSection}>
            {!isActive &&
            <button onClick={serialActive} className={"wk-general-button mb-2 " + style.singleAppointmentButton}>
                Serial Active
            </button>
            }
            {isActive &&
            <button onClick={scheduleComplete} disabled={completeActionLoading} className={"wk-danger-button mb-2 " + style.singleAppointmentButton}>
                {completeActionLoading?'Wait....':'Complete'}
            </button>
            }
            <button disabled={!isActive} onClick={()=>callToUser('audio')} className={"wk-general-button mb-2 " + style.singleAppointmentButton}>
                Audio Call
            </button>
            <button disabled={!isActive} onClick={()=>callToUser('video')} className={"wk-general-button " + style.singleAppointmentButton}>
                Video Call
            </button>
        </div>
    )
}