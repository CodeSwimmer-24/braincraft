import React from "react";
import Hero from "./Components/Header";
import Footer from "../../components/Footer/Footer";
import Timeline from "./Components/Flow";

function MobileAppDev() {
  const containerStyle = {
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "2rem",
    marginBottom: "50px",
    color: "#333",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: "20px",
  };

  const gridStyle = {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "10px",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };

  const imageStyle = {
    width: "400px",
    height: "260px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const listStyle = {
    textAlign: "left",
    maxWidth: "600px",
    margin: "0 auto 0px",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    listStyleType: "decimal",
    paddingLeft: "20px",
    color: "#555",
  };

  const techLogoContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "120px",
    flexWrap: "wrap",
    marginTop: "0px",
    marginBottom: "60px",
    objectFit: "cover",
  };

  const techLogoStyle = {
    width: "120px",
    height: "auto",
    transition: "transform 0.3s ease",
    objectFit: "contain",
  };

  const images = [
    // "https://muffingroup.com/blog/wp-content/uploads/2023/03/Be-recipe-2.png",
    // "https://via.placeholder.com/250x160?text=Project+2",
    // "https://via.placeholder.com/250x160?text=Project+3",
  ];

  const techLogos = [
    {
      name: "React Native",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Flutter",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    },
    {
      name: "Kotlin",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
    },
    {
      name: "Swift",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    },
    {
      name: "TypeScript",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "Xcode",
      url: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/c9/6c/67c96c86-06f3-1da3-5127-b29ca02c23e9/Xcode-85-220-0-4-0-0-2x-sRGB-0-0.png/1200x630bb.png", // PNG as no official SVG exists
    },
    {
      name: "Android",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png",
    },
    {
      name: "Play Store",
      url: "https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo.png", // Play Store Badge SVG
    },
    {
      name: "App Store",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png", // Play Store Badge SVG
    },
    {
      name: "Firebase",
      url: "https://www.okoone.com/wp-content/uploads/2024/06/firebase-logo.png", // Play Store Badge SVG
    },
    {
      name: "Java",
      url: "https://seeklogo.com/images/A/android-studio-logo-B51FFD8900-seeklogo.com.png", // Play Store Badge SVG
    },
  ];

  return (
    <div>
      <Hero />
      <div>
        <Timeline />
      </div>

      <section style={containerStyle}>
        <h2 style={titleStyle}>Technologies We Use</h2>
        <div style={techLogoContainerStyle}>
          {techLogos.map((tech) => (
            <img
              key={tech.name}
              src={tech.url}
              alt={tech.name}
              title={tech.name}
              style={techLogoStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MobileAppDev;
