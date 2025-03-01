import "./AllServices.scss";
import workers from "../../../assets/workers.jpg";

function AllServices() {
  return (
    <div className="all-services">
      <div className="all-services-heading">
        <p className="clip">SERVICES WE OFFER</p>
        <h1>All Services </h1>
      </div>

      <div className="all-services-cards">
        <div className="all-services-cards-card">
          <img
            src={
              "https://www.greavesdesign.co.uk/wp-content/uploads/2015/08/uberski.jpg"
            }
            alt=""
          />
          <div>
            <span className="clip">01.</span>
            <h2>Custom Website Design</h2>
            <p className="description">
              From business websites to portfolio pages, we create websites that are not only visually appealing but also fully functional and responsive across all devices.
            </p>
          </div>
        </div>
        <div className="all-services-cards-card">
          <img
            src="https://www.tlpglobus.com/wp-content/uploads/2021/12/E-Commerce.png"
            alt=""
          />
          <div>
            <span className="clip">02.</span>
            <h2>E-Commerce Solutions</h2>
            <p className="description">
              Transform your online store with our e-commerce website development services.
            </p>
          </div>
        </div>

        <div className="all-services-cards-card">
          <img
            src="https://res.cloudinary.com/apptailors/image/upload/v1668503557/blog/Mobile-app-development-process-01-1-min-1024x770_uznlx9.png"
            alt=""
          />
          <div>
            <span className="clip">03.</span>
            <h2>Mobile App Development</h2>
            <p className="description">
              In today's mobile-first world, having a mobile app is essential.
            </p>
          </div>
        </div>

        <div className="all-services-cards-card">
          <img
            src="https://cdn.intuji.com/2023/08/Custom-software-development.jpg"
            alt=""
          />
          <div>
            <span className="clip">04.</span>
            <h2>Content Management Systems (CMS)
            </h2>
            <p className="description">
              Manage your website effortlessly with a powerful CMS. We offer tailored CMS solutions that allow you to easily update, modify.
            </p>
          </div>
        </div>

        <div className="all-services-cards-card">
          <img
            src="https://s.tmimgcdn.com/scr/800x500/218200/sceo-seo-services-seo-provider-company-and-digital-marketing-agency-elementor-wordpress-theme_218220-original.png"
            alt=""
          />
          <div>
            <span className="clip">05.</span>
            <h2>SEO & Digital Marketing Services</h2>
            <p className="description">
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nobis magni maxime exercitationem natus ab ullam vel quo dicta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices;
