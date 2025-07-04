// src/components/Footer.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p><FaEnvelope /> muskanmansoor82@gmail.com</p>
          <p><FaPhone /> +92 3172733083</p>
          <p><FaMapMarkerAlt /> Karachi, Pakistan</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Me</h3>
          <a href="https://www.linkedin.com/in/muskanmansoor01/" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/muskanmansoor06" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>

        
      </div>

      <p className="footer-credit">© {new Date().getFullYear()} Muskan Mansoor. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
