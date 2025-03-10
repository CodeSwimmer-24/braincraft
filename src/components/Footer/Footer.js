import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="body">
          <div className="logo cursive footer-logo">
            <img src={logo} alt="logo" className="hero-logo" />
          </div>
          <div className="sub-grp">
            <h3>Office</h3>
            <div className="content">
              <p>+91 8130954219</p>
              <p>support@braincraft.in</p>
              <p>
                G51/5, Shaheen Bagh,
                <p>New Delhi, INDIA 110025</p>
              </p>
              <p>
                MON – SAT: 9 AM – 9 PM <p>SUN: CLOSED</p>
              </p>
            </div>
          </div>
          <div className="sub-grp">
            <h3>Links</h3>
            <div className="content links">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/about">
                <p>About</p>
              </Link>
              <Link to="/services">
                <p>Services</p>
              </Link>
              <Link to="/csr">
                <p>Projects</p>
              </Link>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className="sub-grp">
            <h3>Social Links</h3>
            <div className="logos">
              <a
                className="social"
                href="https://www.facebook.com/braincraft.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a
                className="social"
                href="https://wa.me/918130954219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                className="social"
                href="https://instagram.com/braincraft.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                className="social"
                href="https://www.linkedin.com/company/braincraftin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-clip">© 2022, ALL RIGHTS RESERVED | BrainCraft</p>
      </div>
    </div>
  );
}

export default Footer;
