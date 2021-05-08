import {Row, Col, Form, Table} from 'react-bootstrap';
import style from './TodayAppointmentComponent.module.css';
import PatientComponent from "./PatientComponent";
function TodayAppointmentComponent() {
    return (
      <div className='container mt-5'>
          <Row>
              <Col md={8}>
                  <Form>
                      <Form.Row>
                          <Form.Group as={Col} md={4} controlId="formGridCity">
                              <Form.Control as="select" className="wk-select-input">
                                  <option>ডিপার্টমেন্ট</option>
                                  <option>ডিপার্টমেন্ট</option>
                              </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} md={8} controlId="formGridState">
                              <Form.Control type="text" placeholder="নাম / মোবাইল নাম্বার " className="wk-select-input"/>
                          </Form.Group>
                      </Form.Row>
                  </Form>
              </Col>
          </Row>
     {/*table design data chart*/}
          {/*<Table striped hover className={style.wkTable}>*/}
          {/*    <thead className={[style.wkTableHead]}>*/}
          {/*    <tr>*/}
          {/*        <th>সিরিয়াল</th>*/}
          {/*        <th>রোগীদের নাম </th>*/}
          {/*        <th>মোবাইল নাম্বার </th>*/}
          {/*        <th>সময় </th>*/}
          {/*        <th>এপয়েন্টমেন্ট এর ধরণ </th>*/}
          {/*    </tr>*/}
          {/*    </thead>*/}
          {/*    <tbody>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*        <td>০১</td>*/}
          {/*        <td>মাসুদ রানা</td>*/}
          {/*        <td>০১৭৪৫৭১৩২২১</td>*/}
          {/*        <td>৭.৩০ রাত</td>*/}
          {/*        <td>অনলাইন </td>*/}
          {/*    </tr>*/}

          {/*    </tbody>*/}
          {/*</Table>*/}
          {/* second design */}

          <PatientComponent/>
          <PatientComponent/>
          <PatientComponent/>
          <PatientComponent/>


      </div>
    );
}
export default TodayAppointmentComponent