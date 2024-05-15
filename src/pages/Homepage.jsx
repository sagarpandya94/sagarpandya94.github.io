import React from "react";
import picture from "../displaypicture.png";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "../pagestyle.css";

const HomePage = () => {
  return (
    <div className="container about-me-flex margin-top-2-p">
      {/* <h1>Welcome to Sagar Pandya Portfolio!!</h1> */}
      <div><img src={picture} alt="display"/></div>
      <div className="font-size-14 text-white">
        <h1>Sagar Pandya</h1>
        <p> <h2>Software Development Engineer in Test | Quality Engineering | Software Development Engineer </h2></p>
        <p> As a Software Development Engineer In Test (SDET) at Informatica, I ensure the quality and performance of cloud-based data integration products, using various tools and frameworks such as RestAssured, Selenium, Testrail, Jenkins, and Jira. I work with a cross-functional team of developers, operations, and product managers, following agile methodology and sprint planning.</p>
        <p> I have a Master of Science in Computer Science from San Francisco State University, where I learned and applied skills in react.js, redux, javascript, node.js, express.js, HTML, and cucumber. I have completed multiple certifications in ISTQB Foundation Level and Selenium Essential Training. I am passionate about software engineering and quality engineering, and I am always eager to learn new technologies and best practices.</p>
        <p> <MdPhone /> (415)712-5855</p>
        <p> <a href="https://www.linkedin.com/in/sagarpandya94/" className="text-golden font-size-24"> <SiLinkedin /> </a>
        <a href="https://github.com/sagarpandya94" className="text-golden font-size-24"> <FaGithub /> </a></p>
        <NavLink className="text-golden" to="/resume - Sagar Pandya.pdf" target="_blank" download>
              Download resume
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
