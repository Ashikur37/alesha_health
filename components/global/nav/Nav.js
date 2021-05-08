import {Navbar, Nav, NavDropdown, Dropdown, DropdownButton, DropdownItem, Button} from "react-bootstrap";
import styles from './nav.module.css'
import React, {useContext} from "react";
import {GlobalContext} from "../../../context/GlobalContext";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import style from "../../patient/persional/Appointments.module.css";
import Link from "next/link";
export default function () {
    const {globalState, setGlobalState} = useContext(GlobalContext);
    const router = useRouter();

    const logout = (e)=>{
        e.preventDefault();
        Cookies.remove('_jwtToken');
        setGlobalState((prev)=>{
            return {...prev,userAuth:false,userProfile:{}}
        });
        router.replace('/');
    };

    const loginLogoutBtn = globalState.userAuth?(
            <NavDropdown alignRight title={(
                    <i className="material-icons">
                        person
                    </i>
                )} id="basic-nav-dropdown" className={[styles.wkDropdownMenu]}>
                <div className={styles.wkDeopArea}>
                    <Link href="/appointments">
                        <a className={styles.wkDropDownItem}>এপয়েন্টমেন্ট</a>
                    </Link>
                    {/*<NavDropdown.Divider />*/}
                    <NavDropdown.Item href={'/logout'} onClick={logout} className={styles.wkDropDownItem}>
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
                    <div className={styles.medicallLogo}>
                        <a href="/">
                            <img src="../../../static/img/home/logo/medicall logo.png" alt="" className={"image-fluid "+ styles.medicallLogoImg}/>
                        </a>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/how-to-work" className={styles.wkMainNavGeneralLink} >যেভাবে কাজ করে</Nav.Link>
                        <Nav.Link href="/" className={styles.wkMainNavGeneralLink} >হোম</Nav.Link>
                        <NavDropdown title="সার্ভিস" id="basic-nav-dropdown" className={[styles.wkMainNavGeneralLink, styles.wkDropdownMenu]} >
                            <div className={styles.wkDeopArea}>

                            <NavDropdown.Item href="/services/live-doctor-service" className={styles.wkDropDownItem}>২৪/৭ লাইভ ডাক্তার</NavDropdown.Item>
                            <NavDropdown.Item href="/mental-health-services" className={styles.wkDropDownItem}>মানসিক স্বাস্থ্যসেবা</NavDropdown.Item>
                            <NavDropdown.Item href="/services/general-health-service" className={styles.wkDropDownItem}>সাধারন স্বাস্থ্যসেবা</NavDropdown.Item>
                            <NavDropdown.Item href="/services/nurse-service" className={styles.wkDropDownItem}>নার্স সেবা</NavDropdown.Item>

                            </div>
                        </NavDropdown>

                        <Nav.Link href="/contuct-us" className={styles.wkMainNavGeneralLink} >যোগাযোগ </Nav.Link>
                        <Nav.Link href="/live-doctor"><Button className={styles.wkMainNavButton}>লাইভ ডাক্তার  </Button></Nav.Link>

                        { loginLogoutBtn }

                        {/*<Nav.Link href="#home" className={styles.wkMainNavGeneralLink}>*/}
                        {/*    <span className={styles.wkLanguageArea}>*/}
                        {/*        <span className="material-icons" style={{color:"#00695c"}}>fiber_smart_record</span>*/}
                        {/*      <span className={styles.wkMainNavlanguageText}>বাংলা</span>*/}
                        {/*    </span>*/}
                        {/*</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}