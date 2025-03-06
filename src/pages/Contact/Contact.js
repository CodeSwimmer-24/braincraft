import Hero from "../../components/ContactPage/Hero/Hero";
import Offices from "../../components/ContactPage/Offices/Offices";
import Form from "../../components/ContactPage/Form/Form";
import Footer from "../../components/Footer/Footer";
import SocialButton from "../../components/Button/SocialButton";

function Contact() {
  return (
    <>
      <Hero></Hero>
      {/* <Offices></Offices> */}
      <Form></Form>
      <Footer></Footer>
      <SocialButton />
    </>
  );
}

export default Contact;
