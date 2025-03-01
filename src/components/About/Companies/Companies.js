import "./Companies.scss";
import { companies_logos as logos } from "../../data";

function Companies() {
  return (
    <div className="companies">
      <div className="companies-left">
        <p className="clip">MEET OUR Clients</p>
        <h1>Our Clients.</h1>
        <p className="description">
          We have a wealth of experience working as software organization
          on all kinds of projects, big and small, from website designing and
          custome software Development according to the business need.
        </p>
      </div>
      <div className="companies-right">
        <div className="companies-right-row">
          {logos.slice(0, 2).map((logo) => (
            <div className="companies-right-row-card">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
        <div className="companies-right-row">
          {logos.slice(2, 4).map((logo) => (
            <div className="companies-right-row-card">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
        <div className="companies-right-row">
          {logos.slice(4).map((logo) => (
            <div className="companies-right-row-card">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
