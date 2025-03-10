import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSpinner,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import "./Form.scss";

export default function Form() {
  const form = useRef();
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading

    emailjs
      .sendForm(
        "service_h7cz6fe",
        "template_e9bce2a",
        form.current,
        "Xl1OpHbGVa3Z2JDJs"
      )
      .then(
        (result) => {
          alert(
            "Thanks for your query, our team will connect with you shortly."
          );
          form.current.reset();
          setLoading(false); // ✅ Stop loading
        },
        (error) => {
          console.log(error);
          alert("Failed to send message. Please try again.");
          setLoading(false); // ✅ Stop loading
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail} className="contact-form-elements">
          <input
            type="text"
            name="user_name" // ✅ This must match EmailJS template
            placeholder="Your Name*"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="user_email" // ✅ This must match EmailJS template
            placeholder="Your Email*"
            className="contact-input"
            required
          />
          <input
            type="text"
            name="user_contact" // ✅ This must match EmailJS template
            placeholder="Your Contact*"
            className="contact-input"
            required
          />
          <textarea
            name="message" // ✅ This must match EmailJS template
            placeholder="Your Message*"
            className="contact-textarea"
            required
          />
          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? <FaSpinner className="spinner" /> : "SUBMIT MESSAGE"}
          </button>
        </form>
      </div>

      {/* Right Section - Contact Info */}
      <div className="contact-info">
        <h2 className="contact-help-title">
          Need help ?? Feel free to contact us !
        </h2>
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
              <p className="contact-detail-text">support@braincraft.in</p>
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
      </div>
    </div>
  );
}
