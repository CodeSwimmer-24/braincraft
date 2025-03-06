import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function SocialButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/8130954219", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/braincraft.in", "_blank");
  };

  return (
    <div>
      <button
        onClick={openInstagram}
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
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
        <FaInstagram size={30} />
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
