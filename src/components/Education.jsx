// components/Education.jsx
import React from "react";
import { FaGraduationCap, FaUniversity, FaBook } from "react-icons/fa";
import "./Education.css";

const Education = () => (
  <div className="education-container">
    <h2 className="education-title">Education</h2>
    <div className="education-list">
      <div className="education-item">
        <span><FaGraduationCap /></span>
        Diploma – ACCP Prime 2.0 (Aptech, final semester)
      </div>
      <div className="education-item">
        <span><FaUniversity /></span>
        Intermediate – Govt. Girls Degree College
      </div>
      <div className="education-item">
        <span><FaBook /></span>
        Matriculation – Aminnah Secondary School
      </div>
    </div>
  </div>
);

export default Education;
