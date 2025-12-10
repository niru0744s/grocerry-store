import React from "react";
import "./footer.css";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Footer() {
  return (
    <footer className="site-footer m-2 rounded">

      <div className="footer-inner container">

        {/* LEFT SIDE */}
        <div className="footer-left">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-circle">
              <LocalGroceryStoreIcon className="logo-icon" />
            </div>
            <h3 className="footer-brand-name">Grocery.</h3>
          </div>

          {/* Description */}
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </p>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="#" className="social-link"><FacebookIcon /></a>
            <a href="#" className="social-link"><WhatsAppIcon /></a>
            <a href="#" className="social-link"><TelegramIcon /></a>
            <a href="#" className="social-link"><EmailIcon /></a>
          </div>
        </div>

        {/* MIDDLE SECTION - NAVIGATION */}
        <div className="footer-middle">
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Customer Services</h4>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Return</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Our Information</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">User Terms & Conditions</a></li>
              <li><a href="#">Return Policy</a></li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="footer-right">
          <h4 className="footer-title">Contact Info</h4>

          <ul className="contact-list">
            <li>+0123-456-789</li>
            <li>example@gmail.com</li>
            <li>
              8502 Preston Rd,<br />
              Inglewood, Maine 98380
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Grocery Website — All rights reserved</small>
      </div>

    </footer>
  );
}
