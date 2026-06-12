import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import "../styles/Employ.css";


const Employ = () => {
return (
<div className="page-container employ-container">
<motion.div
className="employ-card"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
<div className="employ-left">
<div className="employ-icon-container">
<FaUsers className="employ-icon" />
</div>
</div>


<div className="employ-right">
<h2>Meet Our Engineering Team</h2>
<p>
Our team consists of <strong>65+ highly skilled Fiber & Tower Engineers</strong>
with deep domain knowledge in Telecom infrastructure. Every engineer brings
expertise, precision and commitment to delivering world‑class engineering
solutions for our clients.
</p>
<ul>
<li>Certified Fiber & Tower Engineering Specialists</li>
<li>Expertise in ARAMIS, ArcGIS Pro, QGIS, 3‑GIS & AutoCAD</li>
<li>Advanced skills in O‑Calc, SPIDA‑Calc & Katapult</li>
<li>End‑to‑end design, drafting & analysis capabilities</li>
</ul>
</div>
</motion.div>
</div>
);
};
export default Employ;