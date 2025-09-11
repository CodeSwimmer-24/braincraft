import "./Container.scss";

function Container() {
  const fakeUrls = [
    "https://source.unsplash.com/?fruit",
    "https://source.unsplash.com/?cars",
    "https://source.unsplash.com/?construction",
    "https://source.unsplash.com/?nature",
    "https://source.unsplash.com/?city,night",
    "https://source.unsplash.com/?city,day",
    "https://source.unsplash.com/?people",
    "https://source.unsplash.com/?countries",
    "https://source.unsplash.com/random/?city,night",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
  ];

  return (
    <div className="csr-container">
      <div className="heading">
        <p className="clip">HOW WE HELP</p>
        <h1>Corporate Social Responsibility</h1>
      </div>

      <div className="csr-images">
        <div className="csr-row">
          <div className="csr-image">
            <img
              src="https://abreastenggco.com/assets/images/csr/IMG-20250805-WA0007.jpg"
              alt=""
            />
            <div>
              <p>
                A PCPF block pathway was constructed within the school premises
                to improve accessibility and infrastructure.
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="https://abreastenggco.com/assets/images/csr/IMG-20250805-WA0010.jpg"
              alt=""
            />
            <div>
              <p>
                New Year celebration was organized for the employees and
                workers.
              </p>
            </div>
          </div>
        </div>

        <div className="csr-row csr-row-more">
          <div className="csr-image">
            <img
              src="https://abreastenggco.com/assets/images/csr/IMG-20250805-WA0008.jpg"
              alt=""
            />
            <div>
              <p>
                Additionally, refreshments including sweets and snacks were
                distributed during the visit as a gesture of goodwill and
                community engagement.
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="	https://abreastenggco.com/assets/images/csr/IMG-20250805-WA0009.jpg"
              alt=""
            />
            <div>
              <p>
                Additionally, refreshments including sweets and snacks were
                distributed during the visit as a gesture of goodwill and
                community engagement.
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="https://abreastenggco.com/assets/images/csr/IMG-20250805-WA0012.jpg"
              alt=""
            />
            <div>
              <p>
                New Year celebration was organized for the employees and
                workers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
