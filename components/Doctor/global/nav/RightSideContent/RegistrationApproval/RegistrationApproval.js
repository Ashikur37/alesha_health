import React from "react";
import RegistrationApprovalSearch from './RegistrationApprovalSearch';
import RegistrationApprovalList from './RegistrationApprovalList'

export default function (props) {
    return(
        <div >
            <h4 style={{marginLeft:"3.7rem", marginTop:"1.5rem",marginBottom:"2rem"}}>Registration Approval</h4>
            {/*<RegistrationApprovalSearch/>*/}
            <RegistrationApprovalList />
        </div>
    )
}