// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner page-container">
        
        {/* Company Info */}
        <div className="footer-column">
          <h3 className="footer-logo">Conservtel Engineering</h3>
          <p className="footer-text">
            Providing Telecom Engineering & Design services across North America 
            & Europe for 4+ years, specializing in Fiber and Tower engineering.
          </p>
          <p className="footer-text small">
            65+ professionals delivering Fiber Designing, Drafting, Construction 
            Drawings, Permitting, Pole Loading Analysis, Make Ready Engineering, 
            and Tower Structural & Mount Analysis.
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            <li>Fiber Network Design & Drafting</li>
            <li>Construction Drawings & Permitting</li>
            <li>Pole Loading Analysis</li>
            <li>Make Ready Engineering</li>
            <li>Tower Structural & Mount Analysis</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="footer-column">
          <h4 className="footer-heading">Platforms & Tools</h4>
          <p className="footer-text small">
            <strong>Fiber Design:</strong> AT&amp;T ARAMIS, ArcGIS Pro, QGIS, 
            3-GIS, Vetro, AutoCAD.
          </p>
          <p className="footer-text small">
            <strong>Pole Loading:</strong> O-Calc Pro, SPIDA-Calc, Katapult.
          </p>
          <p className="footer-text small">
            Experience with major Telecom customers such as AT&amp;T, Verizon, 
            Frontier, CenturyLink, Google Fiber, CCI, American Towers, 
            Trueline Infrastructure, AEG, and others.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text small">
            Email:{" "}
            <a href="mailto:Geetanshu@conservtel.com">
              Geetanshu@conservtel.com
            </a>
            <br />
            Mobile No.: +1 950-372-9176
          </p>
          <p className="footer-text small">
            We’d be glad to discuss your next Telecom or Fiber project.
          </p>

          {/* Social Links */}
          <div className="footer-social">
            <a
              href="mailto:Geetanshu@conservtel.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/company/conservtel-engineering-llp/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
href="https://x.com/conservtel"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="page-container footer-bottom-inner">
          <span>© {currentYear} Conservtel Engineering. All rights reserved.</span>
          <span className="footer-bottom-note">
            Telecom Engineering & Design · Fiber · Towers
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
