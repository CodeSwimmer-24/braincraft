import React from "react";
import "./Hero.scss";
import Navbar from "../../../components/Navbar/Navbar";

function Hero() {
  return (
    <div className="csr-page">
      <Navbar></Navbar>
      <img
        className="csr-hero-bg"
        src={
          "https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg"
        }
        alt=""
      />
      <div className="csr-hero">
        <div className="csr-hero-content">
          <h4>
            <span>Home</span>
            <span className="delimeter"></span>
            <span>Mobile App Development</span>
          </h4>
          <h1>Mobile App Development</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
