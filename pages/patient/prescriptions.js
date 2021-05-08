import General from "../../middleware/General";
import PatientPrescriptionList from "../../components/patient/PatientPrescriptionList";
const index =  function (props) {
    return (
        <div>
            <PatientPrescriptionList/>
        </div>

    )
};
export default General(index);