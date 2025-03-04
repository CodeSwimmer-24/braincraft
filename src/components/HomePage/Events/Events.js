import "./Events.scss";

function Events() {
  return (
    <div className="events p-2">
      <div className="heading">
        <div className="left">
          <p className="clip">We are currently worling</p>
          <h1>Ongoing Projects</h1>
        </div>
        <div className="right">
          <button className="homepage-btn">VIEW MORE</button>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="img">
            <img
              src="https://www.safetymint.com/blog/wp-content/uploads/2021/03/real-time-safety-statistics-dashboard.png"
              alt=""
            />
          </div>
          <p className="clip">SH CONSTRUCTIONS CO.</p>
          <h3>Safety Management System, CSMS</h3>
        </div>{" "}
        <div className="card hide">
          <div className="img">
            <img
              src="https://s3-alpha.figma.com/hub/file/6049995421/01b02a32-fc9b-4834-969d-bf8cd6a4c028-cover.png"
              alt=""
            />
          </div>
          <p className="clip">Property Seeker</p>
          <h3>Real Estate and Property Mobile App Designing</h3>
        </div>{" "}
        <div className="card hide">
          <div className="img">
            <img
              src="https://images.ctfassets.net/dfcvkz6j859j/3QfApqak2v8xyrXzSMfVUJ/07982381f5ea6c84ea8d96a2cf8f0fb7/google-ads-dashboard-example.png"
              alt=""
            />
          </div>
          <p className="clip">Club Adds</p>
          <h3>Custom Google Advertising Management Dashboard</h3>
        </div>
      </div>
    </div>
  );
}

export default Events;
