import './Values.scss';

function Values() {
  return (
    <div className='values'>
      <div className="values-container">
        <div className="values-container-head">
          <p className="clip">OUR VALUES AND MISSION</p>
          <h1>We help you with your next project.</h1>
        </div>

        <div className="values-container-row">
          <div className="item">
            <div className="symbol">
              <i class="fas fa-award"></i> {/* Award icon for proven track record */}
            </div>
            <div className="content">
              <h3>Proven Track Records</h3>
              <p>With years of experience in the industry, we have successfully delivered hundreds of custom websites, mobile apps, and e-commerce platforms. Our work speaks for itself, and our satisfied clients are a testament to our dedication and expertise.</p>
            </div>
          </div>

          <div className="item">
            <div className="symbol">
              <i class="fas fa-cogs"></i> {/* Cogs icon for end-to-end solutions */}
            </div>
            <div className="content">
              <h3>End-to-End Solutions</h3>
              <p>We don't just build websites – we provide a comprehensive service from start to finish. From initial consultation, design, and development, to post-launch support and maintenance, we ensure that you get a seamless, hassle-free experience.</p>
            </div>
          </div>
        </div>

        <div className="values-container-row">
          <div className="item">
            <div className="symbol">
              <i class="fas fa-chart-line"></i> {/* Chart icon for scalability */}
            </div>
            <div className="content">
              <h3>Scalable Solutions for Growth</h3>
              <p>As your business grows, so should your website. We provide scalable solutions that evolve with your company, ensuring that your digital presence remains strong and effective no matter how much your business expands.</p>
            </div>
          </div>

          <div className="item">
            <div className="symbol">
              <i class="fas fa-clock"></i> {/* Clock icon for fast turnaround */}
            </div>
            <div className="content">
              <h3>Fast Turnaround Times</h3>
              <p>We understand that time is money. Our streamlined processes ensure that your project is completed on time, with no compromises on quality. We pride ourselves on delivering fast, reliable results that meet your business goals.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Values;
