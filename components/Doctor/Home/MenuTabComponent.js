import {Button} from 'react-bootstrap'
import style from './MenuTabComponent.module.css';
function MenuTabComponent() {
    return (
      <div className='container my-3'>
          <div className={style.wkAppoinmentDetalilsButton}>
              <Button className='wk-filter-button-in-response wk-general-button'>আজকের এপয়েন্টমেন্ট</Button>
              <Button className='wk-filter-button-in-response wk-general-button'>এপয়েন্টমেন্ট সংরক্ষণাগার</Button>
              <Button className='wk-filter-button-in-response wk-general-button'>এপয়েন্টমেন্ট সেটিং</Button>
          </div>

      </div>
    );
}
export default MenuTabComponent