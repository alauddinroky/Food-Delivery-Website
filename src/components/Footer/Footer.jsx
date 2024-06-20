import React from "react";
import "./Footer.css"; // Create a CSS file for styling
import { logo } from "../../img";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-section footer-branding">
        <img src={logo} alt="Fudo Logo" className="footer-logo" />
        <p>
          Our job is to fill your tummy with delicious food and with fast and
          free delivery.
        </p>
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-section footer-links">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Features</a>
        <a href="#">News</a>
        <a href="#">Menu</a>
      </div>
      <div className="footer-section footer-links">
        <h4>Company</h4>
        <a href="#">Why Fudo?</a>
        <a href="#">Partner With Us</a>
        <a href="#">FAQ</a>
        <a href="#">Blog</a>
      </div>
      <div className="footer-section footer-links">
        <h4>Support</h4>
        <a href="#">Account</a>
        <a href="#">Support Center</a>
        <a href="#">Feedback</a>
        <a href="#">Contact Us</a>
        <a href="#">Accessibility</a>
      </div>
      <div className="footer-section footer-contact">
        <h4>Get in Touch</h4>
        <p>Question or feedback? We'd love to hear from you</p>
        <div className="footer-email">
          <input type="email" placeholder="Email Address" />
          <button type="submit">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
