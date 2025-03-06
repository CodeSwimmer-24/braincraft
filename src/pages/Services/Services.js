import React from "react";
import Hero from "../../components/Services/Hero/Hero";
import Stats from "../../components/Services/Stats/Stats";
import AllServices from "../../components/Services/AllServices/AllServices";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/About/Projects/Projects";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import SocialButton from "../../components/Button/SocialButton";

function Services() {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Projects></Projects>
      <Footer></Footer>
      <SocialButton />
    </div>
  );
}

export default Services;
