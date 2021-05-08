import style from './DoctorsAdvanceSearch.module.css';
import {Form} from 'react-bootstrap'
function DoctorsAdvancedSearch(props) {
 return(
     <div className={style.DoctorAdvanceSearch}>
        <h5 className="text-center mb-4 DoctorAdvanceSearchHeader font-weight-bold">অ্যাডভান্স সার্চ</h5>
         <Form>
             <Form.Group controlId="formBasicEmail" >
                 <Form.Label>লোকেশন দিন </Form.Label>
                 <Form.Control type="text" className="wk-select-input " placeholder="ধানমন্ডি ২৭"/>
             </Form.Group>
             <Form.Group controlId="formBasicPassword">
                 <Form.Label>হাসপাতালের নাম </Form.Label>
                 <Form.Control type="text" className="wk-select-input " placeholder="বারডেম হাসপাতাল"/>
             </Form.Group>
             <Form.Group controlId="formBasicCheckbox">
                 <Form.Label>হাসপাতালের ধরন</Form.Label>
                 <Form.Check type="checkbox" label="অনলাইন কনসাল্টেন্সি" />
                 <Form.Check type="checkbox" label="চেম্বার" />
                 <Form.Check type="checkbox" label="হোম কেয়ার" />
             </Form.Group>
         </Form>

     </div>
 )
}

export default DoctorsAdvancedSearch;