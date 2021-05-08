import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap"
import styles from './nav.module.css'
import React, { useContext } from 'react';
import {GlobalContext} from "../../../../context/GlobalContext";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import Link from 'next/link'
export default function () {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    const router = useRouter();

    const logout = (e)=>{
        e.preventDefault();
        Cookies.remove('_doctorJwtToken');
        Cookies.remove('_notCompleted');
        router.replace('/doctor/login');
    };

    const loginLogoutBtn = globalState.doctorAuth?(
            <NavDropdown className={[ styles.wkDropdownMenu]} alignRight title={(
                    <i className="material-icons">
                        person
                    </i>
                )} id="dropdown-menu-align-right" >
                <div className={styles.wkDeopArea}>
                    <Link href="/doctor/appointments"><a className={styles.wkDropDownItem}>এপয়েন্টমেন্ট</a></Link>
                    <Link href="/doctor/services"><a className={styles.wkDropDownItem}>সার্ভিস</a></Link>
                    <Link href="/doctor/profile-settings"><a className={styles.wkDropDownItem}>সেটিংস</a></Link>
                    {/*<NavDropdown.Divider />*/}
                    <NavDropdown.Item  href={'/doctor/logout'} onClick={logout} className={styles.wkDropDownItem}>
                        <i className="material-icons float-left mr-2">
                        power_settings_new
                        </i>
                        <span>লগআউট</span>
                    </NavDropdown.Item>
                </div>
            </NavDropdown>
        ):
        (
            <Nav.Link href={'/account-type'}><Button className={styles.wkMainNavButtonLogin} >লগইন</Button></Nav.Link>
        );
    return(
        <div>
            <Navbar  expand="lg" className={styles.nav}>
                <Navbar.Brand>
                    <a href="/">
                        Medicall
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/how-to-work" className={styles.wkMainNavGeneralLink} >যেভাবে কাজ করে </Nav.Link>
                        <Nav.Link href="/" className={styles.wkMainNavGeneralLink} >হোম </Nav.Link>
                        <NavDropdown title="সার্ভিস" id="basic-nav-dropdown" className={[styles.wkMainNavGeneralLink, styles.wkDropdownMenu]} >
                            <div className={styles.wkDeopArea}>

                                <NavDropdown.Item href="/services/live-doctor-service" className={styles.wkDropDownItem}>২৪/৭ লাইভ ডাক্তার</NavDropdown.Item>
                                <NavDropdown.Item href="/mental-health-services" className={styles.wkDropDownItem}>মানসিক স্বাস্থ্যসেবা</NavDropdown.Item>
                                <NavDropdown.Item href="/services/general-health-service" className={styles.wkDropDownItem}>সাধারন স্বাস্থ্যসেবা</NavDropdown.Item>
                                <NavDropdown.Item href="/services/nurse-service" className={styles.wkDropDownItem}>নার্স সেবা</NavDropdown.Item>

                            </div>
                        </NavDropdown>
                        <Nav.Link href="/contuct-us" className={styles.wkMainNavGeneralLink} >যোগাযোগ </Nav.Link>
                        <Nav.Link href="/live-doctor"><Button className={styles.wkMainNavButton}>সাধারন জিজ্ঞাসা </Button></Nav.Link>
                        {/*<Nav.Link href="#home" className={styles.wkMainNavGeneralLink}><Button className={styles.wkLanguageSwitchButton}></Button><span className={styles.wkMainNavlanguageText}>বাংলা</span></Nav.Link>*/}
                        { loginLogoutBtn }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}