import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap"
import styles from './nav.module.css'
import { useContext } from 'react';
import {GlobalContext} from "../../../../context/GlobalContext";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import Link from 'next/link'
export default function () {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    const router = useRouter();

    const logout = (e)=>{
        e.preventDefault();
        Cookies.remove('_adminJwtToken');
        router.replace('/admin/login');
    };

    const loginLogoutBtn = globalState.adminAuth?(
            <NavDropdown alignRight title={(
                    <i className="material-icons">
                        person
                    </i>
                )} id="dropdown-menu-align-right" >

                    <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  href={'/admin/logout'} onClick={logout}>
                    <i className="material-icons float-left mr-2">
                    power_settings_new
                    </i>
                <span>Logout</span>
                </NavDropdown.Item>
            </NavDropdown>
        ):
        (
            <Nav.Link href={'/admin/login'}><Button className={styles.wkMainNavButtonLogin} >লগইন</Button></Nav.Link>
        );
    return(
        <div>
            <Navbar  expand="lg" className={styles.nav}>
                <Navbar.Brand>
                    <a href="/admin">
                        Medicall
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        { loginLogoutBtn }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}