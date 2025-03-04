import React from "react";
import Hero from "../../components/Services/Hero/Hero";
import Stats from "../../components/Services/Stats/Stats";
import AllServices from "../../components/Services/AllServices/AllServices";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/About/Projects/Projects";

function Services() {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default Services;
