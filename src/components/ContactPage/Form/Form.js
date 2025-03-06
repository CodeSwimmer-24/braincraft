import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import "./Form.scss";

export default function Form() {
  return (
    <div className="contact-container">
      {/* Left Section - Contact Form */}
      <div className="contact-form">
        <h1 className="contact-heading">CONTACT US TO GET MORE INFO</h1>
        <p className="contact-text">
          Aperiam sociosqu urna praesent, tristique, corrupti condimentum
          asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare
          quas provident laoreet nescuint odio.
        </p>
        <form className="contact-form-elements">
          <input
            type="text"
            placeholder="Your Name*"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="contact-input"
          />
          <input
            type="text"
            placeholder="Your Contact*"
            className="contact-input"
          />
          <textarea placeholder="Your Message*" className="contact-textarea" />
          <button className="contact-button">SUBMIT MESSAGE</button>
        </form>
      </div>

      {/* Right Section - Contact Info */}
      <div className="contact-info">
        <h2 className="contact-help-title">
          Need help ?? Feel free to contact us !
        </h2>
        {/* <p className="contact-help-text">Penatibus numquam? Non?</p> */}
        <div className="contact-details">
          <div className="contact-detail">
            <MdLocationOn className="contact-icon" />
            <div>
              <h3 className="contact-detail-title">Location Address</h3>
              <p className="contact-detail-text">
                G51/5, Shaheen Bagh, New Delhi, INDIA 110025
              </p>
            </div>
          </div>
          <div className="contact-detail">
            <MdEmail className="contact-icon" />
            <div>
              <h3 className="contact-detail-title">Email Address</h3>
              <p className="contact-detail-text">conatct@braincraft.in</p>
            </div>
          </div>
          <div className="contact-detail">
            <MdPhone className="contact-icon" />
            <div>
              <h3 className="contact-detail-title">Phone Number</h3>
              <p className="contact-detail-text">Mobile: +(91) 8130954219</p>
            </div>
          </div>
        </div>
        {/* <h3 className="contact-social-title">Follow us on social media..</h3>
        <div className="contact-social-icons">
          <div className="social-icon">
            <FaFacebookF className="social-icon-item" />
          </div>
          <div className="social-icon">
            <FaTwitter className="social-icon-item" />
          </div>
          <div className="social-icon">
            <FaInstagram className="social-icon-item" />
          </div>
          <div className="social-icon">
            <FaLinkedinIn className="social-icon-item" />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
