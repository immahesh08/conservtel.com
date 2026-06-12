// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <div className="page-container about-container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Conservtel Engineering
      </motion.h2>
      <motion.p
        className="about-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We are providing <strong>Telecom Engineering &amp; Design services</strong> to
        customers primarily across <strong>North America &amp; Europe</strong> for the past{" "}
        <strong>4 years</strong>. Our team of 65 professionals has deep experience across
        the entire lifecycle of fiber and tower engineering projects.
      </motion.p>

      <section className="about-section">
        <h3>Fiber Engineering Services</h3>
        <p>
          We provide the complete suite of <strong>Fiber Engineering</strong> services,
          including:
        </p>
        <ul>
          <li>Fiber Designing</li>
          <li>Drafting</li>
          <li>Construction Drawing</li>
          <li>Permitting</li>
          <li>Pole Loading Analysis</li>
          <li>Make Ready Engineering</li>
        </ul>
        <p>
          In addition, we also provide <strong>Tower Structural &amp; Mount Analysis</strong>,
          supporting both new deployments and upgrades to existing infrastructure.
        </p>
      </section>

      <section className="about-section">
        <h3>Customers We Work With</h3>
        <p>
          We are working / have worked on projects for many of the major Telecom customers,
          including:
        </p>
        <div className="about-tags">
          <span>AT&amp;T</span>
          <span>Verizon</span>
          <span>Frontier</span>
          <span>CenturyLink</span>
          <span>Google Fiber</span>
          <span>CCI</span>
          <span>American Towers</span>
          <span>Trueline Infrastructure Solutions</span>
          <span>Atlantic Engineering Group</span>
          <span>and many others…</span>
        </div>
      </section>

      <section className="about-section">
        <h3>Platforms &amp; Engineering Tools</h3>
        <p>
          Our team has extensive experience performing Fiber Designing on various platforms,
          such as:
        </p>
        <ul>
          <li>AT&amp;T ARAMIS</li>
          <li>ArcGIS Pro</li>
          <li>QGIS</li>
          <li>3-GIS</li>
          <li>Vetro</li>
          <li>AutoCAD</li>
        </ul>
        <p>
          For <strong>Pole Loading Analysis &amp; Make Ready Engineering</strong>, we use:
        </p>
        <ul>
          <li>O-Calc Pro</li>
          <li>SPIDA-Calc</li>
          <li>Katapult</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Our Commitment</h3>
        <p>
          We combine strong domain expertise, mature processes and best-in-class tools to
          deliver accurate, constructible and scalable designs. Our focus is on
          <strong> quality, on-time delivery and long-term partnerships</strong> with our
          customers.
        </p>
      </section>
    </div>
  );
};

export default About;
