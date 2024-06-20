import React, { useState } from "react";
import { logo } from "../../img";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Fudo Logo" />
      </div>
      <ul className={` ${open ? "open" : ""} nav-links`}>
        <li>
          <a href="#why-fudo">Why Fudo?</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="login-button">Login</button>
      <div className="menu-icon" onClick={toggle}>
        {console.log(open)}
        <FontAwesomeIcon icon={open ? faTimes : faBars} />
      </div>
    </nav>
  );
}

export default Navbar;
