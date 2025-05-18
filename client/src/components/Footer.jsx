import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Navigation Links */}
        <div className="footer-column">
          <h5>Quick Links</h5>
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/editor">New Blog</Link></li>
            <li><Link className="nav-link" to="/list">My Blog</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-column">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://wa.me/+919551630758" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h5>Contact Information</h5>
          <ul>
            <li>Address: 123 Street, Chennai, India</li>
            <li>Email: kawin0275@gmail.com</li>
            <li>Phone: +91 95516 30758</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-column">
          <h5>Subscribe to Our Newsletter</h5>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
