import Hero from "../../components/About/Hero/Hero";
import Stats from "../../components/About/Stats/Stats";
import Values from "../../components/About/Values/Values";
import Projects from "../../components/About/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import Staff from "../../components/About/Staff/Staff";
import Timeline from "../../components/About/Timeline/Timeline";
import Companies from "../../components/About/Companies/Companies";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import SocialButton from "../../components/Button/SocialButton";

function About() {
  return (
    <>
      <Hero></Hero>
      <Stats></Stats>
      <Values></Values>

      <Timeline></Timeline>
      {/* <Companies></Companies> */}
      <Footer></Footer>
      <SocialButton />
    </>
  );
}

export default About;
