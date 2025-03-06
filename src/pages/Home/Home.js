import React from "react";

import Achievements from "../../components/HomePage/Achievements/Achievements";
import Hero from "../../components/HomePage/Hero/Hero";
import About from "../../components/HomePage/About/About";
import Clients from "../../components/HomePage/Clients/Clients";
import Events from "../../components/HomePage/Events/Events";
import Footer from "../../components/Footer/Footer";
import Companies from "../../components/About/Companies/Companies";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import SocialButton from "../../components/Button/SocialButton";

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
      <SocialButton />
    </div>
  );
}

export default Home;
