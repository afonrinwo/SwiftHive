import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <nav className="nav nav-pills navbar-toggleable float-right text-primary expand" >
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/admin" exact activeStyle={{ color: 'white' }} className="nav-link" >Home</NavLink>
                </li>
            </ul>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/admin/help" activeStyle={{ color: 'white' }} className="nav-link" >Help</NavLink>
                </li>
            </ul >
        </nav>
    );
}
export default Header;