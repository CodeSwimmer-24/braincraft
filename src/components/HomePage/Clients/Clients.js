import "./Clients.scss";

function Clients() {
  return (
    <div className="clients p-2">
      <div className="clients-left">
        <img
          src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/dots.png"
          alt=""
        />
        <p className="clip">WHAT PEOPLE SAY</p>
        <h1>Client's Talk</h1>
        <p className="clients-para">
          We have extensive experience working as a leading technology software
          company, delivering solutions for projects of all sizes—from software
          maintenance and enhancements to system upgrades, integrations, and
          custom software development.
        </p>
        {/* <button className="homepage-btn">
          VIEW MORE{" "}
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
        </button> */}
      </div>
      <div className="clients-right">
        <div className="card">
          <div class="card-content">
            <p>
              Working with BrainCraft was a game-changer for our business. The
              team took the time to understand our needs and delivered a
              beautiful website that perfectly represents our brand." – Ajay
              Singh
            </p>
          </div>

          <div class="user-data">
            <div class="author-image">
              <img
                width="70"
                height="70"
                src="https://img.freepik.com/premium-photo/young-indian-man-with-eyeglasses-nature_75648-1879.jpg?semt=ais_hybrid"
                class="attachment-thumbnail size-thumbnail wp-post-image"
                alt=""
                loading="lazy"
                style={{
                  borderRadius: 50,
                  objectFit: "cover",
                }}
              />{" "}
            </div>
            <div class="author-data">
              <div class="title">
                <h4>Ajay Singh</h4>
              </div>
              <div class="position">
                <p className="clip">SH Constructions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
