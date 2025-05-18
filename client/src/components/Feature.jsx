import '../App.css';

const Feature = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5 text-primary">Why Use Our Blog Editor?</h2>
        <p className="lead mb-5">
          Our Blog Editor is built with simplicity and functionality in mind. It helps you to streamline your writing process while ensuring a great user experience.
        </p>

        <div className="row">
          {/* Feature Card 1: Easy to Use */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-success">Easy to Use</h5>
                <p className="card-text">
                  Clean and minimal interface focused on writing without distractions.
                </p>
                <ul className="text-left">
                  <li>Drag-and-drop image support</li>
                  <li>WYSIWYG editor for seamless content creation</li>
                  <li>Fast navigation, no steep learning curve</li>
                  <li>Customizable text formatting</li>
                </ul>
                <a href="#!" className="btn btn-outline-success mt-3">Learn More</a>
              </div>
            </div>
          </div>

          {/* Feature Card 2: Draft Saving */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-info">Save Drafts & Autosave</h5>
                <p className="card-text">
                  Work at your own pace with autosave and draft-saving features.
                </p>
                <ul className="text-left">
                  <li>Auto-save to prevent data loss</li>
                  <li>Resume editing with syncing</li>
                  <li>Unlimited draft storage</li>
                  <li>Categorize and organize drafts</li>
                </ul>
                <a href="#!" className="btn btn-outline-info mt-3">Learn More</a>
              </div>
            </div>
          </div>

          {/* Feature Card 3: Publishing */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-danger">Publish Instantly</h5>
                <p className="card-text">
                  Share your blog with the world instantly and effortlessly.
                </p>
                <ul className="text-left">
                  <li>One-click instant publishing</li>
                  <li>Real-time preview feature</li>
                  <li>Social media sharing options</li>
                  <li>Schedule future posts</li>
                </ul>
                <a href="#!" className="btn btn-outline-danger mt-3">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
