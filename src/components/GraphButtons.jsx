import { Link } from "react-router-dom";
import "./GraphsButtons.css"; // (optional: move styles to separate file)

const sections = [
  { name: "Education", link: "/education" },
  { name: "Experience", link: "/experience" },
  { name: "Skills", link: "/skills" },
  { name: "Certificates", link: "/certificate" },
  { name: "Projects", link: "/projects" },
];

const GraphButtons = () => {
  return (
    <div className="section-grid-container">
      {sections.map((item, index) => (
        <Link to={item.link} key={index} className="section-tile">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default GraphButtons;
