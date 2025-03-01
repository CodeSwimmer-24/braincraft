import "./Timeline.scss";

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline-heading">
                <p className="clip">Our Approach</p>
                <h1>A Step-by-Step Process</h1>
            </div>
            <div className="timeline-cards">
                <div className="timeline-card">
                    <h2 className="year">Planning</h2>
                    <div className="timeline-card-content">
                        <h4>Discovery & Planning</h4>

                        <p className="description">
                            Our process begins with a deep understanding of your goals, target
                            audience, and business challenges.
                        </p>
                    </div>
                </div>
                <div className="timeline-card">
                    <h2 className="year">Prototyping</h2>
                    <div className="timeline-card-content">
                        <h4>Design & Prototyping</h4>

                        <p className="description">
                            Once we have a clear understanding of your requirements, our
                            design team will create wireframes and prototypes that bring your
                            vision to life.
                        </p>
                    </div>
                </div>
                <div className="timeline-card">
                    <h2 className="year">Development</h2>
                    <div className="timeline-card-content">
                        <h4>Development & Testing</h4>

                        <p className="description">
                            With designs in place, our developers begin building your website or app using the latest technologies.


                        </p>
                    </div>
                </div>
                <div className="timeline-card">
                    <h2 className="year">Deployment</h2>
                    <div className="timeline-card-content">
                        <h4>Launch & Optimization</h4>

                        <p className="description">
                            When everything is ready, we’ll launch your site or app. But our job doesn’t end there – we continuously monitor its performance
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
