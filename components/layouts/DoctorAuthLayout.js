import DoctorLayout from "./DoctorLayout";
import DoctorAuth from "../../middleware/DoctorAuth";
import redirect from "../../functions/redirect";

const DoctorAuthLayout = props => (
    <DoctorLayout>
        {props.children}
    </DoctorLayout>
);
export default DoctorAuth(DoctorAuthLayout);