import "../../../components/About/Stats/Stats.scss";

function Profile() {
  return (
    <div className="stats p-2">
      <div className="right">
        <img
          src="https://abreastenggco.com/assets/images/testimonials/Jaspal.png"
          width="50%"
        />
      </div>
      <div className="left">
        <p className="clip">CEO of The Organization</p>
        <h1>MR. Jaspal Singh</h1>
        <p style={{ fontSize: "1.2rem" }}>
          As the CEO of Abreast Consultancy Services, I’m committed to leading
          with innovation, integrity, and a relentless focus on delivering
          technology solutions that drive real impact. In a fast-changing
          digital world, our mission is clear: to empower businesses through
          smart, scalable, and secure IT services. Every line of code, every
          strategic decision, and every partnership is built around one goal —
          shaping a future where technology works seamlessly for people.
        </p>
      </div>
    </div>
  );
}

export default Profile;
