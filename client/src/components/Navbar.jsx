import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          Blog Editor
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/editor">New Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">My Blog</Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
