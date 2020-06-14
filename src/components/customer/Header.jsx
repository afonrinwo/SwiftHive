import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <nav className="nav nav-pills navbar-toggleable text-primary">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/home" activeStyle={{ color: 'white' }} className="nav-link" >Home</NavLink>
                </li>
            </ul>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/login" activeStyle={{ color: 'white' }} className="nav-link">Login</NavLink>
                </li>
            </ul>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/onboarding" activeStyle={{ color: 'white' }} className="nav-link">Onboarding</NavLink>
                </li>
            </ul>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/help" activeStyle={{ color: 'white' }} className="nav-link" >Help</NavLink>
                </li>
            </ul >
        </nav>
    );
}
export default Header;