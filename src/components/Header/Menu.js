import React from "react";
import "./style.scss";

function Menu({ children }) {
    return (
        <nav className="nav">
            { children }
        </nav>
    );
}
export default Menu;