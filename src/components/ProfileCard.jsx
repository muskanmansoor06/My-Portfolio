import profileImage from "../assets/profile.png";
import cvFile from "../assets/my-cv.pdf";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <a href={cvFile} target="_blank" rel="noopener noreferrer" className="cv-button">
        CV
      </a>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2>Muskan Mansoor</h2>
      <p> I am a passionate and dedicated Front-End Developer with strong expertise in React.js. 
showcasing my ability to turn ideas into functional and scalable applications. Beyond React, I also have hands on experience with JavaScript, HTML/CSS, and have worked on WordPress and PHP based sites, including WooCommerce stores.

<span>I am highly committed to my work, constantly learning and evolving with new technologies. Whether working individually or in a team, I approach every project with a problem solving mindset and a passion for clean, user focused design.</span>
 </p>
    </div>
  );
};

export default ProfileCard;
