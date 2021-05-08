import AdminAuth from "../../../middleware/AdminAuth";
import AddFormComponent from "../../../components/Admin/Hospital/AddNew/AddFormComponent";

const index = function () {
    return (
        <>
            <AddFormComponent />
        </>
    )
};

export default AdminAuth(index);