import DoctorAuth from "../../middleware/DoctorAuth";
import AppointmentMenuTabContent from "../../components/Doctor/Appointment/AppointmentMenuTabContent";
import AppointmentAccordionTabContent from "../../components/Doctor/Appointment/AppointmentSchedulesTabContent";
import {DoctorSchedulesProvider} from "../../context/DoctorSchedulesContext";
const schedules =  function (props) {
    return (
        <DoctorSchedulesProvider>
            <AppointmentMenuTabContent page='AppointmentSchedules'/>
            <AppointmentAccordionTabContent/>
        </DoctorSchedulesProvider>

    )
};
export default DoctorAuth(schedules);