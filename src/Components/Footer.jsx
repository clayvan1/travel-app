import './Footer.scss'; // Import the SCSS file for styling
import { BiLogoMediumOld } from 'react-icons/bi';
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container centered-content'>
        <div className='footer-top'>
          <div className='footer-socials'>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <ImFacebook className='icon' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <ImTwitter className='icon' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <ImInstagram className='icon' />
            </a>
          </div>
        </div>

        <div className='footer-middle'>
          <div className='footer-links-column'>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className='footer-links-column'>
            <h3>Support</h3>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/support">Customer Support</Link></li>
            </ul>
          </div>

          <div className='footer-contact'>
            <h3>Contact</h3>
            <p>Nairobi, Nairobi County, Kenya</p>
            <p>Email: info@outrips.com</p>
            <p>Phone: +254 7XX XXX XXX</p>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>&copy; {new Date().getFullYear()} OU-Trips. All rights reserved.</p>
          <p>Designed & Developed by Your Name/Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;