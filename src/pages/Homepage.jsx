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
