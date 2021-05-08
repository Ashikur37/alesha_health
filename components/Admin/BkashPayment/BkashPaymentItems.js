import style from "../../patient/persional/Appointments.module.css";
import Pagination from 'rc-pagination';
import BkashPaymentItem from "./BkashPaymentItem";
import React, {useState} from "react";
import GlobalPlaceholders from "../../Placeholders/GlobalPlaceholders";
export default function BkashPaymentItems ({pageChanged, paymentsData, filterChanged, defaultFilter}) {
    const [filter,setFilter]= useState({...defaultFilter});
    const onChange = (current, pageSize)=>{
        pageChanged(current, pageSize);
    };
    const filterOnChange = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const filterList = {...filter};
        filterList[field] = value;
        setFilter(filterList);
        filterChanged(filterList);
    };
    return <div className="mt-3">
        <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="" className="form-check-label">Filter</label>
                    <select onChange={filterOnChange} value={filter.status} name="status" className="form-control wk-select-input">
                        <option value="">&nbsp; All</option>
                        <option value="0">&nbsp; Pending</option>
                        <option value="1">&nbsp; Approved</option>
                        <option value="2">&nbsp; Rejected</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h5>Bkash Payment List</h5>
                <table className="table table-striped table-dark">
                    <thead>
                    <tr>
                        <th scope="col">User Info</th>
                        <th scope="col">Appointment Info</th>
                        <th scope="col">Bkash Info</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        { paymentsData && !paymentsData._isLoading && paymentsData.data.map(item=><BkashPaymentItem key={'BkashPaymentItem_'+item.id} item={item} />) }
                    </tbody>
                </table>
                { (!paymentsData || paymentsData._isLoading ) && <GlobalPlaceholders rows={10} /> }
                { paymentsData && paymentsData.data.length === 0 && <h3 className="text-center">Item not found.</h3> }
                {paymentsData && paymentsData.total > paymentsData.per_page && <div className="d-flex justify-content-center"><Pagination showTitle={false}  total={paymentsData.total} defaultPageSize={paymentsData.per_page} onChange={onChange} defaultCurrent={paymentsData.current_page} /></div>}
            </div>
        </div>
    </div>
}