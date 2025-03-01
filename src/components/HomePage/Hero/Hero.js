import "./Hero.scss";
import logo from "../../../assets/logo.png";
import Navbar from "../../Navbar/Navbar";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div style={{
          marginTop: 20
        }}>
          <Navbar />
        </div>

        <img
          src="https://plus.unsplash.com/premium_photo-1661400100934-1ba03c96cc14?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww"
          alt="background"
        />
        <img src={logo} alt="logo" className="hero-logo" />
        <h1 className="hero-heading">
          Bringing the Offline and Online worlds together – helping clients connect with ease!
        </h1>
        <div className="hero-bottom">
          <div className="hero-bottom-left">
            <h3>
              Safe, Reliable & high quality Website and Mobile App Solutions
            </h3>
            <p>
              Quantity and Safety are the crucial most factor in our line of
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
