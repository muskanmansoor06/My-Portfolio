import { FaBriefcase, FaUsers, FaHome } from "react-icons/fa";
import "./Experience.css";

const Experience = () => (
  <div className="experience-container">
    <h2 className="experience-title">Professional Experience</h2>

    <div className="exp-cards-wrapper">
       {/* 2. Team Collaboration */}
      <div className="exp-card">
        <div className="exp-icon"><FaUsers /></div>
        <div className="exp-content">
          <h3>Freelance Web Developer</h3>
          <p>
            Worked on various real time development projects for different clients.
Gained hands on experience in building complete web solutions from scratch.
Focused on writing clean code and delivering projects on time.
          </p>
        </div>
      </div>


      <div className="exp-card">
        <div className="exp-icon"><FaBriefcase /></div>
        <div className="exp-content">
          <h3>Sales Executive Innovega</h3>
          <p className="exp-duration">Duration: 3 Months</p>
          <p>
           Worked as a Sales Executive where I communicated
with clients via LinkedIn and social media. This role
helped me understand client needs, build trust, and
improved my customer dealing skills that now support
my freelancing career as a developer
          </p>
        </div>
      </div>

     

    </div>
  </div>
);

export default Experience;
