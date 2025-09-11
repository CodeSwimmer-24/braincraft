import React from "react";
import Hero from "./Components/Header";
import Footer from "../../components/Footer/Footer";
import Timeline from "./Components/Flow";

function WebsiteDev() {
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
      name: "React",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    },
    {
      name: "HTML5",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Git",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "Angular",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    },
    {
      name: "Vue.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    },
    {
      name: "Bootstrap",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Redux",
      url: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    },
    {
      name: "Tailwind CSS",
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "WordPress",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s",
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

export default WebsiteDev;
