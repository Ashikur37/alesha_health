
import General from "../../middleware/General";
import PatientMedicalHistory from "../../components/patient/history/PatientMedicalHistory";
import PatientMedicalHistoryMenu from "../../components/patient/history/PatientMedicalHistoryMenu";
const medical_history =  function (props) {
    return (
        <>
            <PatientMedicalHistoryMenu/>
            <PatientMedicalHistory/>
        </>

    )
};
export default General(medical_history);