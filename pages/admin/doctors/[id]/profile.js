import AdminAuth from "../../../../middleware/AdminAuth";
import {ProfileCompletionProvider} from "../../../../context/ProfileCompletionContext";
import ProfileSettings from "../../../../components/Doctor/ProfileSettings/ProfileSettings";
import DoctorProfile from "../../../../components/Admin/Doctor/Profile/DoctorProfile";

const Profile =  function () {
    return(
        <ProfileCompletionProvider>
            <DoctorProfile/>
        </ProfileCompletionProvider>
    );
};

export default AdminAuth(Profile);