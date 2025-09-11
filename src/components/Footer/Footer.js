import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="body">
          <div className="logo cursive footer-logo">
            <img
              src={logo}
              alt="logo"
              className="hero-logo"
              style={{
                height: "100px",
              }}
            />
          </div>
          <div className="sub-grp">
            <h3>Office</h3>
            <div className="content">
              <p>+91 9939084007</p>
              <p>contact@abreastconsultancyservices.com</p>
              <p>
                60/A Baidyanath Bagan Area Behind Sakchi Gurudwara,
                <p>Jamshedpur - 831001 Jharkhand, India</p>
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
                <p>CSR</p>
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
                href="https://www.facebook.com/contact@abreastconsultancyservices.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a
                className="social"
                href="https://wa.me/919939084007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                className="social"
                href="https://instagram.com/contact@abreastconsultancyservices.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                className="social"
                href="https://www.linkedin.com/company/Abreast Consultancy Servicesin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-clip">
          © 2022, ALL RIGHTS RESERVED | Abreast Consultancy Services
        </p>
      </div>
    </div>
  );
}

export default Footer;
