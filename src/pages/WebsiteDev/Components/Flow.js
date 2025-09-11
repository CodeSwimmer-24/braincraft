import "./Timeline.scss";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-heading">
        <p className="clip">Our Approach</p>
        <h1>A Step-by-Step Process</h1>
      </div>
      <div className="timeline-cards">
        <div className="timeline-card">
          <h2 className="year">UI/UX Design</h2>
          <div className="timeline-card-content">
            <h4>UI/UX Designing</h4>

            <p className="description">
              We start by understanding your goals and users to design
              intuitive, engaging interfaces.
            </p>
          </div>
        </div>
        <div className="timeline-card">
          <h2 className="year">FrontEnd</h2>
          <div className="timeline-card-content">
            <h4>Design & Prototyping</h4>

            <p className="description">
              We build clean, responsive front-end interfaces from approved
              wireframes and visual designs.
            </p>
          </div>
        </div>
        <div className="timeline-card">
          <h2 className="year">BackEnd</h2>
          <div className="timeline-card-content">
            <h4>Development & Testing</h4>

            <p className="description">
              We implement secure, scalable server-side logic and test for
              performance and stability.
            </p>
          </div>
        </div>
        <div className="timeline-card">
          <h2 className="year">CI/CD</h2>
          <div className="timeline-card-content">
            <h4>Launch & Optimization</h4>

            <p className="description">
              We deploy your site seamlessly and monitor it continuously for
              performance and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
