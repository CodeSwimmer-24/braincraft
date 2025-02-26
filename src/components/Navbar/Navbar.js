import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar({ dark }) {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
    const el = document.querySelector(".nav-items");
    if (el.classList.contains("show")) el.classList.remove("show");
    else el.classList.add("show");

    console.log("here");
  };

  useEffect(() => {
    if (dark) {
      document.querySelector(".navbar").classList.add("dark-nav");
    } else {
      document.querySelector(".navbar").classList.remove("dark-nav");
    }
  }, []);
  return (
    <div className="navbar p-2">
      <div className="logo cursive">
        <svg
          width="397"
          height="45"
          viewBox="0 0 397 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
      <ul className={`nav-items`}>
        <li className="underline">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="underline">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="underline">
          <Link to="/services">Services</Link>
        </li>
        <li className="underline">
          <Link to="/csr">CSR</Link>
        </li>

        <li className="underline">
          <Link to="/safety">Safety</Link>
        </li>
        <li className="underline">
          <Link to="/sustainability">Sustainability</Link>
        </li>

        <li className="underline">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className="burger">
        {!showNav ? (
          <i class="fas fa-bars" onClick={handleNav}></i>
        ) : (
          <i class="fas fa-xmark" onClick={handleNav}></i>
        )}
      </div>
    </div>
  );
}

export default Navbar;
