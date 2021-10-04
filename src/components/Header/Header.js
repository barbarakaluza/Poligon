import Logo from "./Logo";
import Menu from "./Menu";
// import NavLink from "./NavLink";

import React from "react";
import {
    Link
  } from 'react-router-dom';

function Header() {
    return (
    <div>
        <Logo />
        <Menu>
            <ul className="nav__list">
                <li><Link className="nav__list--elem" to="/">Home</Link></li>
                <li><Link className="nav__list--elem" to="/articles">Articles</Link></li>
                <li><Link className="nav__list--elem" to="/register">Register</Link></li>
                <li><Link className="nav__list--elem" to="/contact">Contact</Link></li>
            </ul>
        </Menu>
    </div>
    )
}

export default Header;