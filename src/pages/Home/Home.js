import React from "react";

import Achievements from "../../components/HomePage/Achievements/Achievements";
import Hero from "../../components/HomePage/Hero/Hero";
import About from "../../components/HomePage/About/About";
import Services from "../../components/HomePage/Services/Services";
import Clients from "../../components/HomePage/Clients/Clients";
import Team from "../../components/HomePage/Team/Team";
import Events from "../../components/HomePage/Events/Events";
import Footer from "../../components/Footer/Footer";
import Companies from "../../components/About/Companies/Companies";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Achievements></Achievements>
      {/* <Services></Services> */}
      <Companies></Companies>
      <Clients></Clients>
      {/* <Team></Team> */}
      <Events></Events>
      <Footer></Footer>
      <button
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          color: "white",
          padding: "15px 15px",
          border: "none",
          borderRadius: "50px",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 100,
        }}
      >
        <FaInstagram size={30} />
      </button>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d366",
          color: "white",
          padding: "12px 12px",
          border: "none",
          borderRadius: "50px",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 100,
        }}
      >
        <FaWhatsapp size={35} />
      </button>
    </div>
  );
}

export default Home;
