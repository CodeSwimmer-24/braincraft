import "./Services.scss";

function Projects() {
  return (
    <div className="projects">
      <div className="left">
        <p className="clip">Bringing the Offline and Online worlds together</p>
        <h1>WHAT WE BUILD</h1>
        <p className="description">
          At Abreast Consultancy Services, we specialize in crafting custom
          websites, e-commerce platforms, mobile apps, and tailored web
          solutions to meet the unique needs of your business. Whether you're
          looking to create a stunning website, build a powerful online store,
          or develop a mobile app that connects with your audience, we’ve got
          you covered.
        </p>
      </div>
      <div className="right">
        <div className="project-card">
          <p className="clip">01.</p>
          <h1>Smart Attendance System</h1>
          <p className="description">
            Automate attendance tracking for employees or students with
            real-time data and analytics.
            <ul>
              <li>Face recognition or Geo fencing</li>
              <li>Real-time attendance reports</li>
              <li>Leave & shift management</li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <p className="clip">02.</p>
          <h1>Warehouse Management Platform</h1>
          <p className="description">
            Efficiently monitor and control inventory, orders, and stock
            locations in one central system.
            <ul>
              <li>Inventory tracking & control</li>
              <li>Critical Tools calibration Tracking</li>
              <li>Stock alerts & supplier integration</li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <p className="clip">03.</p>
          <h1>Human Resource Management Suite</h1>
          <p className="description">
            Streamline HR operations from hiring to payroll in an intuitive
            dashboard.
            <ul>
              <li>Employee onboarding & directory</li>
              <li>Payroll & leave automation</li>
              <li>Performance & appraisal tools</li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <p className="clip">04.</p>
          <h1>E-Learning Mobile Application</h1>
          <p className="description">
            A complete learning app for schools, coaching centers, or corporates
            with user engagement tools.
            <ul>
              <li>Video courses & quizzes</li>
              <li>Progress tracking & leaderboards</li>
              <li>Instructor/employees dashboard</li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <p className="clip">05.</p>
          <h1>Google Ads & Analytics Dashboard</h1>
          <p className="description">
            Visualize and manage ad campaign performance with an interactive
            analytics dashboard.
            <ul>
              <li>Live campaign metrics</li>
              <li>Google Ads integration</li>
              <li>Custom report generation</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
