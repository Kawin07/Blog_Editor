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
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-success">Easy to Use</h5>
                <p className="card-text">
                  Our blog editor features an intuitive, clean, and minimal interface that allows you to focus solely on your writing. No distractions, just the pure writing experience.
                </p>
                <ul className="text-left">
                  <li>Drag-and-drop image support</li>
                  <li>WYSIWYG editor for seamless content creation</li>
                  <li>Simple and fast navigation, no steep learning curve</li>
                  <li>Customizable text formatting options</li>
                </ul>
                <a href="#!" className="btn btn-outline-success mt-3">Learn More</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-info">Save Drafts & Autosave</h5>
                <p className="card-text">
                  With our Blog Editor, you can easily save drafts of your blog posts. Work on them at your own pace and publish them when you’re ready. Even if your device crashes, your drafts will be safe!
                </p>
                <ul className="text-left">
                  <li>Auto-save functionality to prevent data loss</li>
                  <li>Resume editing anytime with seamless syncing</li>
                  <li>Save unlimited drafts, no restrictions</li>
                  <li>Option to categorize and organize drafts</li>
                </ul>
                <a href="#!" className="btn btn-outline-info mt-3">Learn More</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-danger">Publish Instantly</h5>
                <p className="card-text">
                  Publish your thoughts with just a click. No complicated steps – just pure convenience. Reach your audience instantly after finishing your blog. Plus, enjoy real-time preview before publishing.
                </p>
                <ul className="text-left">
                  <li>Instant publish feature for quick updates</li>
                  <li>Real-time preview before publishing</li>
                  <li>Easy sharing to social media platforms</li>
                  <li>Schedule posts for future publishing</li>
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
