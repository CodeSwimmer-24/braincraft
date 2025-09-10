import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png"; // replace with your logo

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      alert("Please enter both fields!");
      return;
    }
    alert("Signed in successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="signin-wrapper">
      {/* Left Side */}
      <div className="signin-left">
        <div className="form-box">
          <h1>Sign In</h1>
          <p className="subtitle">
            Enter your userId and password to sign In!
          </p>

          <div className="support-buttons">
            <button className="support-btn whatsapp">
              <FaWhatsapp /><span style={{
                color:"gray",
                fontWeight:"500"
              }}> Wapp Text Support</span>
            </button>
            <button className="support-btn phone">
              <FaPhoneAlt /><span style={{
                color:"gray",
                fontWeight:"500"
              }}> ACS Tech Support</span>
            </button>
          </div>

          <div className="divider">
            <span>Or</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                UserId <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <div className="form-group password-wrapper">
              <label>
                Password <span className="required">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {/* {showPassword ? "🙈" : "👁️"} */}
              </span>
            </div>

            <p className="extra-links">
              If not registered then{" "}
              <span className="link">click here to register</span>
            </p>
            <p className="extra-links">
              <span className="link">Forgot password?</span>
            </p>

            <button type="submit" className="submit-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="signin-right">
        <div className="content">
        <img src={logo} alt="" className="logo-image"/>
          <p>
            Free and Open-Source Tailwind CSS Admin <br /> Dashboard Template
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
