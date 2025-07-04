import { FaBriefcase, FaUsers, FaHome } from "react-icons/fa";
import "./Experience.css";

const Experience = () => (
  <div className="experience-container">
    <h2 className="experience-title">Professional Experience</h2>

    <div className="exp-cards-wrapper">
      {/* 1. Sales */}
      <div className="exp-card">
        <div className="exp-icon"><FaBriefcase /></div>
        <div className="exp-content">
          <h3>Sales Executive – Innovega</h3>
          <p className="exp-duration">Duration: 3 Months</p>
          <p>
            Communicated with clients via LinkedIn & social media. Developed client-handling and communication skills that now support my freelance development work.
          </p>
        </div>
      </div>

      {/* 2. Team */}
      <div className="exp-card">
        <div className="exp-icon"><FaUsers /></div>
        <div className="exp-content">
          <h3>Team Collaboration at Aptech</h3>
          <p>
            Participated in internal competitions and events like TechFest and PetBot Exhibition. Worked with teams using Git and collaborated on large-scale websites.
          </p>
        </div>
      </div>

     
    </div>
  </div>
);

export default Experience;
