import React from "react";
import Hero from "../../components/Services/Hero/Hero";
import Stats from "../../components/Services/Stats/Stats";
import AllServices from "../../components/Services/AllServices/AllServices";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/About/Projects/Projects";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Services() {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Projects></Projects>
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

export default Services;
