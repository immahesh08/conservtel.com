import React from "react";
import { motion } from "framer-motion";
import { 
  FaNetworkWired, 
  FaMapMarkedAlt, 
  FaTools, 
  FaCalculator, 
  FaDraftingCompass 
} from "react-icons/fa";

import { MdCellTower } from "react-icons/md"; // ✅ FIXED — working tower icon

import "../styles/OurServices.css";

const services = [
  {
    title: "Fiber Engineering",
    description: "Complete fiber network design, drafting, and construction drawings for telecom infrastructure.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Tower Structural Analysis",
    description: "Expert tower mounting and structural analysis for new deployments and upgrades.",
    icon: <MdCellTower />, // ✅ FIXED ICON
  },
  {
    title: "Pole Loading Analysis",
    description: "Comprehensive pole loading and make-ready engineering for fiber deployments.",
    icon: <FaCalculator />,
  },
  {
    title: "GIS Mapping & Design",
    description: "Advanced GIS mapping using ArcGIS Pro, QGIS, and 3-GIS for precise network planning.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Permitting Services",
    description: "Full permitting support and documentation for telecom construction projects.",
    icon: <FaDraftingCompass />,
  },
  {
    title: "Engineering Tools Integration",
    description: "Expert use of ARAMIS, O-Calc Pro, SPIDA-Calc, Katapult, and AutoCAD for analysis.",
    icon: <FaTools />,
  }, {
    title: "Fiber Designing",
    description:
      "Our team has vast experience performing Fiber Designing on platforms such as AT&T ARAMIS, ArcGIS Pro, QGIS, 3-GIS, Vetro, and AutoCAD. We specialize in both High Level Design (HLD) including address curation, and Low Level Design (LLD). We have delivered designs for AT&T, Verizon, Frontier, CenturyLink, Google Fiber, and many others.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Drafting & Permitting",
    description:
      "We prepare Construction Drawings and Permitting packages for all major telecom companies. Our expertise in county-specific permitting requirements ensures faster approvals, accelerating the Fiber Build process. Our drawings are clean, concise, and easy for construction crews to understand, minimizing confusion on site.",
    icon: <FaDraftingCompass />,
  },
  {
    title: "Pole Loading Analysis & Make Ready Engineering",
    description:
      "Equipped with O-Calc Pro, SPIDA-Calc, and Katapult tools, we perform comprehensive Pole Loading Analysis and Make Ready Engineering. We have years of experience supporting major telecom service providers across the USA.",
    icon: <FaCalculator />,
  },
  {
    title: "Structural & Mount Analysis",
    description:
      "We perform Tower, Rooftop, and Non-Tower Structural Analysis using TnxTower and STAAD-Pro. We also perform Mount Analysis using RISA-3D and STAAD-Pro. We have long-term experience supporting projects for CCI, AT&T, and American Tower.",
    icon: <MdCellTower />,
  },
  
];

const OurServices = () => {
  return (
    <div className="page-container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Comprehensive telecom engineering services for fiber networks and tower infrastructure.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.12)" }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
