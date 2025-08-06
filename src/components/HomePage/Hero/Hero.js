import "./Hero.scss";
import logo from "../../../assets/logo.png";
import Navbar from "../../Navbar/Navbar";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Navbar />
        </div>

        <img
          src="https://abreastenggco.com/assets/images/office/IMG-20250806-WA0010.jpg"
          alt="background"
        />
        <img
          src={logo}
          alt="logo"
          className="hero-logo"
          style={{
            height: "80px",
          }}
        />
        <h1 className="hero-heading">
          Bringing the Offline and Online worlds together – helping clients
          connect with ease!
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
