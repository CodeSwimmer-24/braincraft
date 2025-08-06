import "./Events.scss";

function Events() {
  return (
    <div className="events p-2">
      <div className="heading">
        <div className="left">
          <p className="clip">We are currently working</p>
          <h1>Ongoing Projects</h1>
        </div>
        {/* <div className="right">
          <button className="homepage-btn">VIEW MORE</button>
        </div> */}
      </div>
      <div className="cards">
        <div className="card">
          <div className="img">
            <img
              src="https://www.safetymint.com/blog/wp-content/uploads/2021/03/real-time-safety-statistics-dashboard.png"
              alt=""
            />
          </div>
          <p className="clip">Abreast Engineering Company</p>
          <h3>Safety Management System, SMS</h3>
        </div>{" "}
        <div className="card hide">
          <div className="img">
            <img
              src="https://www.donesafe.com/wp-content/uploads/2025/06/Donesafe-safety-system-dashboard.png"
              alt=""
            />
          </div>
          <p className="clip">Abreast Engineering Company</p>
          <h3>Contractor Safety Management System, CSMS</h3>
        </div>{" "}
        <div className="card hide">
          <div className="img">
            <img
              src="https://cdn.dribbble.com/userupload/5278140/file/original-81752f5c8887a651a5cf48ec26239658.jpg?format=webp&resize=400x300&vertical=center"
              alt=""
            />
          </div>
          <p className="clip">Abreast Engineering Company</p>
          <h3>E-Learning Application</h3>
        </div>
      </div>
    </div>
  );
}

export default Events;
