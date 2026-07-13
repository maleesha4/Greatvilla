import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer gradient-dark">
      <div className="footer-container">
        <div className="footer-info">
          <h3>GREATVILLA</h3>
          <p>Experience ultra-luxury villa stays with premium comfort and custom wellness services.</p>
        </div>
        <div className="footer-links-group">
          <h4>Explore</h4>
          <ul>
            <li><a href="/rooms">Our Rooms</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4>Support</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Greatvilla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
