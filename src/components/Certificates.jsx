import React from "react";
import "./Certificates.css";

import cert1 from "../assets/cert1.PNG";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
import cert4 from "../assets/cert4.jpeg";
import cert5 from "../assets/cert5.jpeg";

const certificates = [
  {
    title: "Participation – TechWiz 4",
    description: "StreamEase website development project.",
    image: cert1,
  },
  {
    title: "Outstanding Achievement in Project Exhibition",
    description: "PetBot Ecommerce Website Designing at Aptech Pakistan.",
    image: cert3,
  },
   {
    title: "Participation Aptech TechFest 2024",
    description: "Collaborative web development event participation(Using PHP Msql).",
    image: cert4,
  },
  
  {
    title: "Best Student of the Month May 2024",
    description: "Recognized for consistent performance and dedication.",
    image: cert5,
  },
  {
    title: "Full Attendance Record",
    description: "Certificate of Achievement for full attendance.",
    image: cert2,
  },
 
];

const Certificates = () => (
  <div className="certificates-container">
    <h2 className="certificates-title">My Certificates</h2>
    <div className="certificates-grid">
      {certificates.map((cert, index) => (
        <div className="certificate-card" key={index}>
          <a href={cert.image} target="_blank" rel="noopener noreferrer">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
          </a>
          <div className="certificate-content">
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certificates;
