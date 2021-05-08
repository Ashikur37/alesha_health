import LoginComponent from "../../components/Admin/Auth/LoginComponent";
import AdminNotAuth from "../../middleware/AdminNotAuth";

const login =  function () {
    return <LoginComponent />

};
export  default AdminNotAuth(login);