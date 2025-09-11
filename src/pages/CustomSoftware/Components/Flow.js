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
          <h2 className="year">Figma Design</h2>
          <div className="timeline-card-content">
            <h4>Figma Design</h4>

            <p className="description">
              We begin with wireframes and user-focused designs tailored to your
              goals and product vision.
            </p>
          </div>
        </div>
        <div className="timeline-card">
          <h2 className="year">Android Dev</h2>
          <div className="timeline-card-content">
            <h4>Android Development</h4>

            <p className="description">
              We develop responsive, performant Android apps based on your
              approved UI designs.
            </p>
          </div>
        </div>
        <div className="timeline-card">
          <h2 className="year">IOS Dev</h2>
          <div className="timeline-card-content">
            <h4>IOS Development</h4>

            <p className="description">
              We create robust iOS apps with clean architecture and test for
              reliability and performance.
            </p>
          </div>
        </div>
        <div className="timeline-card">
          <h2 className="year">App Release</h2>
          <div className="timeline-card-content">
            <h4>Playstore/AppStore Setup</h4>

            <p className="description">
              We publish your app on the Play Store or App Store and ensure it’s
              monitored post-launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
