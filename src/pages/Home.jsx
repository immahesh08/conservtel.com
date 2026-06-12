import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="page-container home">

      {/* ================= HERO SECTION ================= */}
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-left">
          <h1>
            Engineering the Future of
            <span className="highlight"> Fiber Optic Networks</span>
          </h1>

          <p className="hero-subtitle">
            Delivering end-to-end Telecom Engineering & Design services using
            advanced GIS and CAD workflows for major telecom providers across
            North America & Europe.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="btn-primary">
              Our Services
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>4+ Years</h3>
              <p>Telecom Experience</p>
            </div>
            <div className="stat-card">
              <h3>65+</h3>
              <p>Engineering Professionals</p>
            </div>
            <div className="stat-card">
              <h3>Tier-1 Clients</h3>
              <p>AT&T · Verizon · Google Fiber</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <motion.div
            className="hero-tool-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3>Engineering Platforms</h3>
            <p>ArcGIS Pro · QGIS · 3-GIS · Vetro</p>
            <p>AutoCAD · ARAMIS</p>
            <p>O-Calc · SPIDA-Calc · Katapult</p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= WORKFLOW SECTION ================= */}
      <section className="workflow-section">
        <h2>Fiber Optic Network Design Workflow</h2>

        <p className="workflow-intro">
          Designing a fiber optic network involves a synergistic workflow
          between GIS platforms for planning and analysis and CAD software
          for detailed construction drawings, documentation, and as-built
          delivery.
        </p>

        <div className="workflow-grid">

          {/* Phase 1 */}
          <motion.div
            className="workflow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Phase 1: Planning & Data Gathering (GIS)</h3>
            <ul>
              <li>Define project objectives, coverage area & bandwidth demand</li>
              <li>Import base maps, poles, conduits, roads & address points</li>
              <li>Perform feasibility studies & right-of-way analysis</li>
              <li>Design network topology (GPON / FTTH / Ring / Tree)</li>
              <li>Optimize fiber routes using GIS network analysis tools</li>
            </ul>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            className="workflow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Phase 2: Detailed Design & Drafting (CAD)</h3>
            <ul>
              <li>Export GIS routes into AutoCAD (DWG / DXF)</li>
              <li>Create construction-ready duct & fiber layouts</li>
              <li>Place standardized blocks for FDH, OLT, splice closures</li>
              <li>Generate splice diagrams & in-building schematics</li>
              <li>Perform clash detection & design validation</li>
            </ul>
          </motion.div>

          {/* Phase 3 */}
          <motion.div
            className="workflow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Phase 3: Documentation & Implementation</h3>
            <ul>
              <li>Generate BoM & BoQ from AutoCAD measurements</li>
              <li>Prepare permit drawings & approval documentation</li>
              <li>Support field construction & installation teams</li>
              <li>Update drawings to reflect as-built conditions</li>
              <li>Import as-built data back into GIS for lifecycle management</li>
            </ul>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Home;
