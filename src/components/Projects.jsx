import "./project.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.PNG";


const projects = [
  {
    title: "React Dice Game Application",
    image: project4,
    description:
      "This is an interactive dice game built with React.js and Styled Components.The game includes features like score tracking, win/lose messages, responsive design for all devices, and a rules guide with reset functionality.",
    link: "https://dicegamereactproject.netlify.app",
  },
  {
    title: "PetBot Ecommerce Website (Using Html,Css,Js)",
    image: project1,
    description:
      "A complete ecommerce front-end built using HTML, CSS, and JavaScript. Includes product listings, cart UI, and responsive design.",
    link: "https://petbot1.netlify.app",
  },
  {
    title: "Guess The Number Game(using Html,Css,Js)",
    image: project2,
    description:
      "A simple number guessing game developed with JavaScript. User tries to guess the number and gets feedback.",
    link: "https://numberguessing-gameee.netlify.app/",
  },
  {
    title: "StreamEase Team Project",
    image: project3,
    description:
      "A collaborative front-end project created during TechWiz competition using HTML, CSS, and JavaScript.",
    link: "https://aptechtechwiz.netlify.app",
  },
];

const Projects = () => (
  <div className="projects-container">
    <h2 className="projects-title">My Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
