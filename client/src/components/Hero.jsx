// client/src/components/Hero.jsx
import banner from '../assets/banner.png'; // Hero section background image
import './Hero.css'; // Custom styles for hero title and section

const Hero = () => {
  return (
    <section
      className="text-center hero-section"
      style={{
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container bg-opacity-75 p-4 rounded">
        <h1 className="hero-title">Welcome to the Blog Editor</h1>
        <p className="lead text-black">
          Create, save drafts, and publish your blogs effortlessly.
        </p>
        <a href="/editor" className="btn btn-light btn-lg mt-3">
          Write Your First Blog
        </a>
      </div>
    </section>
  );
};

export default Hero;
