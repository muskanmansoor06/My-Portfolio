// src/components/Skills.jsx
import React from "react";
import { FaCode, FaWordpress, FaDatabase, FaTools, FaUsers } from "react-icons/fa";
import "./Skills.css";

const Skills = () => (
  <div className="skills-container">
    <h2 className="skills-title">My Skills</h2>
    <div className="skills-grid">
      <div className="skill-card">
        <div className="skill-icon"><FaCode /></div>
        <h3>Front-End</h3>
        <p>HTML5, CSS3, JavaScript, React</p>
        <p className="skill-desc">
          Strong understanding of modern front-end development. Built multiple responsive websites and projects.
        </p>
      </div>
      <div className="skill-card">
        <div className="skill-icon"><FaWordpress /></div>
        <h3>CMS</h3>
        <p>WordPress, Elementor, WPBakery, WooCommerce</p>
        <p className="skill-desc">
          Completed a dedicated WordPress course. Developed and customized several client websites.
        </p>
      </div>
      <div className="skill-card">
        <div className="skill-icon"><FaDatabase /></div>
        <h3>Back-End</h3>
        <p>PHP, MySQL</p>
        <p className="skill-desc">
          Experience creating simple back-end features and integrating databases.
        </p>
      </div>
      <div className="skill-card">
        <div className="skill-icon"><FaTools /></div>
        <h3>Tools</h3>
        <p>MS Office, SEO Basics, Communication</p>
        <p className="skill-desc">
          Good command on productivity tools and basic SEO knowledge.
        </p>
      </div>
      <div className="skill-card">
        <div className="skill-icon"><FaUsers /></div>
        <h3>Sales & Teamwork</h3>
        <p>Sales Experience, Team Management</p>
        <p className="skill-desc">
          Worked in sales and collaborated in teams during projects and competitions.
        </p>
      </div>
    </div>
  </div>
);

export default Skills;
