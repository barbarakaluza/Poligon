import React from "react";
import logoImg from "./logo.png";

import "./style.scss";

function Logo() {
    return (
    <div className="logo">
        <img className="logo__img" src={logoImg} alt="logo"></img>
    </div>
    )
}

export default Logo;