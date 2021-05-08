import General from "../../middleware/General";
// import PatientPrescriptionList from "../../components/patient/PatientPrescriptionList";
import Appointments from "../../components/patient/persional/Appointments";
import AppointmentsSearch from "../../components/patient/persional/AppointmentsSearch";
const index =  function (props) {
    return (
        <div>
            {/*<PatientPrescriptionList/>*/}
            <AppointmentsSearch/>
            <Appointments/>
        </div>

    )
};
export default General(index);