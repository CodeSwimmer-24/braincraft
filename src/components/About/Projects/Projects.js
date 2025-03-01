import "./Projects.scss";

function Projects() {
  return (
    <div className="projects">
      <div className="left">
        <p className="clip">BrainCraft - Bringing the Offline and Online worlds together</p>
        <h1>
          WHAT WE OFFER
        </h1>
        <p className="description">
          At BrainCraft, we specialize in crafting custom websites, e-commerce platforms, mobile apps, and tailored web solutions to meet the unique needs of your business. Whether you're looking to create a stunning website, build a powerful online store, or develop a mobile app that connects with your audience, we’ve got you covered.
        </p>
      </div>
      <div className="right">
        <div className="project-card">
          <p className="clip">01.</p>
          <h1>Custom Website Design</h1>
          <p className="description">
            From business websites to portfolio pages, we create websites that are not only visually appealing but also fully functional and responsive across all devices. Whether you need a sleek one-page website or a multi-page platform, we’ve got you covered.
          </p>
        </div>
        <div className="project-card">
          <p className="clip">02.</p>
          <h1>E-Commerce Solutions</h1>
          <p className="description">
            Transform your online store with our e-commerce website development services. We build user-friendly and secure e-commerce platforms that make shopping a breeze for your customers. Integrated with the latest payment gateways and custom features, your online store will deliver a seamless shopping experience.
          </p>
        </div>
        <div className="project-card">
          <p className="clip">03.</p>
          <h1>Mobile App Development</h1>
          <p className="description">
            In today's mobile-first world, having a mobile app is essential. Our team designs and develops mobile apps for iOS and Android that offer a perfect blend of design, functionality, and performance, tailored to your business needs.
          </p>
        </div>
        <div className="project-card">
          <p className="clip">04.</p>
          <h1>Content Management Systems (CMS)</h1>
          <p className="description">
            Manage your website effortlessly with a powerful CMS. We offer tailored CMS solutions that allow you to easily update, modify, and control your website’s content without needing technical knowledge. WordPress, Joomla, or custom-built CMS – we offer a variety of options that suit your business.
          </p>
        </div>
        <div className="project-card">
          <p className="clip">05.</p>
          <h1>SEO & Digital Marketing Services</h1>
          <p className="description">
            It's not just about having a website – it's about making sure people can find it! We help optimize your website with SEO strategies that drive traffic, boost visibility, and increase engagement. From content creation to link building, we offer end-to-end digital marketing services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
