import "./Stats.scss";

function Stats() {
  return (
    <div className="stats p-2">
      <div className="left">
        <p className="clip">WHO WE ARE</p>
        <h1>Software Development company to provide the best software solution.</h1>

      </div>
      <div className="right">
        <div className="row">
          <div className="stats-card">
            <div className="stats-card-top">
              <h1>
                22<sup>+</sup>
              </h1>
              <p>Projects</p>
            </div>
            <div className="stats-card-bottom clip">
              <p>
                We have a wealth of experience working as software development
              </p>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-card-top">
              <h1>
                10<sup>+</sup>
              </h1>
              <p>Clients</p>
            </div>
            <div className="stats-card-bottom clip">
              <p>
                We have clients all over India with strong brand value.
              </p>
            </div>
          </div>
        </div>
        <div className="row row-2">

          <div className="stats-card hidden-card">
            <div className="stats-card-top">
              <h1>
                98<sup>%</sup>
              </h1>
              <p>Satisfaction</p>
            </div>
            <div className="stats-card-bottom clip">
              <p>
                We prioritize client satisfaction by delivering high-quality solutions tailored to their needs.
              </p>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-card-top">
              <h1>
                98<sup>%</sup>
              </h1>
              <p>Satisfaction</p>
            </div>
            <div className="stats-card-bottom clip">
              <p>
                We have a wealth of experience working as main building
                contractors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
