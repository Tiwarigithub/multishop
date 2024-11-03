import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>MultiShop</h2>
          <p>Your go-to destination for food and grocery needs.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.instagram.com/anujtiwari4708/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/anuj-tiwari%F0%9F%87%AE%F0%9F%87%B3-a9a086222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLl9brU2STAeanwWp6dWbRA%3D%3D" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://github.com/Tiwarigithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            <li><a href="https://x.com/AnujTiwari22061" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Anuj Tiwari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
