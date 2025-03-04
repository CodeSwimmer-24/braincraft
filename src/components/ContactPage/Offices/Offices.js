import "./Offices.scss";

function Offices() {
  return (
    <div className="offices">
      <div className="offices-heading">
        <p className="clip">CONTACT DETAILS</p>
        <h1>Company Offices</h1>
      </div>

      <div className="offices-cards">
        <div className="offices-cards-card">
          <h3>Jamshedpur Office</h3>
          <div className="card-content">
            <div>
              <i className="fas fa-location-dot location"></i>{" "}
              <p>
                G12 Sahara City, <br /> Jamshedpur, India 831005
              </p>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>{" "}
              <p>
                +91-7272977850 <br /> info@braincraft.in
              </p>
            </div>

            <div>
              <i className="fa-solid fa-clock"></i>
              <p>
                Monday - Friday <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>

        <div className="offices-cards-card">
          <h3>Delhi Office</h3>
          <div className="card-content">
            <div>
              <i className="fas fa-location-dot location"></i>{" "}
              <p>
                G15/5 Shaheen Bagh,
                <br /> New Delhi, India 110025
              </p>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>{" "}
              <p>
                +91-123-4567 <br /> danish@braincraft.in
              </p>
            </div>

            <div>
              <i className="fa-solid fa-clock"></i>
              <p>
                Monday - Friday <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>

        <div className="offices-cards-card">
          <h3>Kolkata Office</h3>
          <div className="card-content">
            <div>
              <i className="fas fa-location-dot location"></i>{" "}
              <p>
                B15 Vecctoria Hall
                <br /> Kolkata, India 700014
              </p>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>{" "}
              <p>
                +91-123-4567 <br /> fahad@braincraft.in
              </p>
            </div>

            <div>
              <i className="fa-solid fa-clock"></i>
              <p>
                Monday - Friday <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offices;
