import React from "react";
import "./NavbarDash.scss";
import logoImage from "../../assets/darkLogo.png";

const NavbarDash = () => {
  return (
    <nav className="navbar-dash">
      <div className="navbar-container">
        {/* Left: Heading */}
        <h1 className="navbar-title">Digital Safety Management System</h1>

        {/* Right: Logo */}
        <div className="navbar-logo">

            <img
              src={logoImage}
              alt="Dashboard Logo"
              className="logo-img"
            />

        </div>
      </div>
    </nav>
  );
};

export default NavbarDash;
