import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap"
import styles from './nav.module.css'
import { useContext } from 'react';
import {GlobalContext} from "../../../../context/GlobalContext";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import Link from 'next/link'
export default function () {
    const router = useRouter();
    const menuToggle = ()=>{
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('active')
    };
    return(
        <>
            <ul id="sidebar_menu" className="sidebar-nav">
                <li className="sidebar-brand">
                    <div id="menu-toggle" onClick={menuToggle} className="sidebar-main-menu pointer">
                        Medicall
                        <span id="main_icon">
                            <span className="material-icons">menu</span>
                        </span>
                    </div>
                </li>
            </ul>
            <ul className="sidebar-nav" id="sidebar">
                <li>
                    <a href={'/admin/hospitals'}>
                        <span className="sub_icon"><span className="material-icons">museum</span></span><span className="menu_text">Hospital</span>
                    </a>
                </li>
                <li>
                    <a href={'/admin/doctors/reg-approval'}>
                        <span className="menu_text">Reg: Approval</span><span className="sub_icon"><span className="material-icons">how_to_reg</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/admin/bkash-payment'}>
                        <span className="menu_text">Payments</span><span className="sub_icon"><span className="material-icons">payment</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/admin/doctors/appointment'}>
                        <span className="menu_text">Appointment</span><span className="sub_icon"><span className="material-icons">event</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/admin/doctors'}>
                        <span className="menu_text">Doctors</span><span className="sub_icon"><span className="material-icons">person</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <span className="menu_text">Nurse</span><span className="sub_icon"><span className="material-icons">people_outline</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <span className="menu_text">Agent</span><span className="sub_icon"><span className="material-icons">person_add</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <span className="menu_text">Patient</span><span className="sub_icon"><span className="material-icons">people</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <span className="menu_text">Settings</span><span className="sub_icon"><span className="material-icons">build</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <span className="menu_text">Promotions</span><span className="sub_icon"><span className="material-icons">timeline</span></span>
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <span className="menu_text">Support</span><span className="sub_icon"><span className="material-icons">contact_mail</span></span>
                    </a>
                </li>
            </ul>
        </>
    )
}