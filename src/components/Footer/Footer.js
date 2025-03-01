import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../.././assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      {/* <div className="head hide">
        <div className="left">
          <h2>Newsletter Signup</h2>
          <p className="clip hide">
            Get notified about updates <br /> Be the first to get early access
            to new episodes.
          </p>
        </div>
        <div className="right hide">
          <input type="text" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div> */}
      <div className="wrapper">
        <div className="body">
          <div className="logo cursive footer-logo">
            <img src={logo} alt="logo" className="hero-logo" />
          </div>
          <div className="sub-grp">
            <h3>Office</h3>
            <div className="content">
              <p>+800 123 456 789</p>
              <p>info@braincraft.in</p>
              <p>
                22/31, REDBUD DRIVE
                <p>WHITESTONE, INDIA 124093</p>
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
                {" "}
                <p>Home</p>
              </Link>
              <Link to="/about">
                {" "}
                <p>About</p>
              </Link>
              <Link to="/services">
                {" "}
                <p>Services</p>
              </Link>
              <Link to="/csr">
                {" "}
                <p>Projects</p>
              </Link>
              <Link to="/contact">
                {" "}
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className="sub-grp">
            <h3>Social Links</h3>
            <div className="logos">
              <div className="social">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="social">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="social">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="social">
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-clip">
          © 2022, ALL RIGHTS RESERVED | S.H. Constructions
        </p>
      </div>
    </div>
  );
}

export default Footer;
