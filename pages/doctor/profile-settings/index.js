
import {ProfileCompletionProvider} from "../../../context/ProfileCompletionContext";
import DoctorAuth from "../../../middleware/DoctorAuth";
import ProfileSettings from "../../../components/Doctor/ProfileSettings/ProfileSettings";

const index = function () {
    return(
        <ProfileCompletionProvider>
            <ProfileSettings/>
        </ProfileCompletionProvider>
    );
};

export default DoctorAuth(index);