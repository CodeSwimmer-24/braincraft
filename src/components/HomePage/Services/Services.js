import React from "react";
import card1 from "../../../assets/services-card1.png";

import card2 from "../../../assets/services-card2.png";
import card3 from "../../../assets/services-card3.png";
import card4 from "../../../assets/services-card4.png";
import card5 from "../../../assets/services-card45.png";
import card6 from "../../../assets/services-card6.png";
import "./Services.scss";

function Services() {
  return (
    <div className="services">
      <div className="services-top">
        <div className="services-top-left">
          <p className="clip">WHAT WE OFFER</p>
          <h1 className="services-heading">Our Clients</h1>
          <p className="services-para">
            We have a wealth of experience working as software organization
            on all kinds of projects, big and small, from website designing and
            custome software Development according to the business need.
          </p>

        </div>
        <div className="services-top-right">
          <div className="card services-top-card">
            <p className="clip index">01.</p>
            <img
              src="https://t4.ftcdn.net/jpg/02/88/39/29/360_F_288392925_iR4n7yqD05GfdlmSkq6gJurui6MPODxx.jpg"
              style={{ width: "30%", height: "20%" }}
            />
            <h4>SH CONSTRUCCTION CO.</h4>
          </div>
          <div className="card services-top-card">
            <p className="clip index">02.</p>

            <img
              src="data:image/jpeg;base64,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"
              style={{ width: "30%", height: "20%" }}
            />
            <h4>CENTURY BUILDERS</h4>

          </div>
        </div>
      </div>

      <div className="services-bottom">
        <div className="card">
          <p className="clip index">03.</p>

          <img
            src="https://d1rbiogke1jwo5.cloudfront.net/wp-content/uploads/2021/12/Vedanta-Logo-PNG.png"
            style={{ width: "100%" }}
          />
          <h4>BLUE PETER</h4>
          <a className="clip">

            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49889 0.96674C8.48052 0.691209 8.24227 0.482738 7.96674 0.501107L3.47671 0.800443C3.20118 0.818811 2.99271 1.05706 3.01107 1.33259C3.02944 1.60813 3.2677 1.8166 3.54323 1.79823L7.53437 1.53215L7.80044 5.52329C7.81881 5.79882 8.05706 6.00729 8.3326 5.98893C8.60813 5.97056 8.8166 5.7323 8.79823 5.45677L8.49889 0.96674ZM1.37629 9.32925L8.37629 1.32925L7.62371 0.670747L0.623712 8.67075L1.37629 9.32925Z"
                fill="#CA3D00"
              />
            </svg>
          </a>
        </div>
        <div className="card">
          <p className="clip index">04.</p>

          <img
            src="https://getvectorlogo.com/wp-content/uploads/2019/03/jsw-group-vector-logo.png"
            style={{ width: "40%" }}
          />
          <h4>VIBRATION</h4>

        </div>
        <div className="card">
          <p className="clip index">05.</p>

          <img
            src="https://www.bmwventures.com/datafiles/brand/95_img.jpg"
            style={{ width: "50%" }}
          />
          <h4>DIGIMAZDOOR</h4>

        </div>
        <div className="card">
          <p className="clip index">06.</p>
          <img
            src="https://i.etsystatic.com/21350830/r/il/2e8031/4117394112/il_fullxfull.4117394112_8ahi.jpg"
            style={{ width: "30%" }}
            alt=""
          />
          <h4>AMBIENTE APL</h4>

        </div>
      </div>
    </div>
  );
}

export default Services;
