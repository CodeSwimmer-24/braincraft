import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

function SocialButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/9939084007", "_blank");
  };

  const openCallLog = () => {
    window.location.href = "tel:+919939084007";
  };

  return (
    <div>
      <button
        onClick={openCallLog}
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          background:
            "linear-gradient(45deg, #4285f4 0%, #4285f4 25%, #4285f4 50%, #4285f4 75%, #fff 100%)",
          color: "white",
          padding: "15px 15px",
          border: "none",
          borderRadius: "50px",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 100,
        }}
      >
        <FaPhone size={30} />
      </button>

      <button
        onClick={openWhatsApp}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d366",
          color: "white",
          padding: "12px 12px",
          border: "none",
          borderRadius: "50px",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 100,
        }}
      >
        <FaWhatsapp size={35} />
      </button>
    </div>
  );
}

export default SocialButton;
