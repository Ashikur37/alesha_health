import { useContext } from 'react';
import {GlobalContext} from "../../context/GlobalContext";
import Cookies from 'js-cookie'

export default function Header() {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    const lang = require('./lang/'+globalState.lang);
    const langChange = (lang) => {
        Cookies.set('_lang',lang);
        setGlobalState(prev=> {
            return {...prev,lang:lang}
        });
    };

    return (
        <div>
            <button onClick={()=>langChange('bn')} style={{cursor:'pointer', marginRight:'5px'}}>Bangla</button>
            <button onClick={()=>langChange('en')} style={{cursor:'pointer', marginRight:'5px'}}>English</button>
            <p className="header">Header</p>
            <p>{lang.name}</p>
        </div>
    );
}
