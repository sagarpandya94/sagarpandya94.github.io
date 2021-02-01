import React from "react";
import picture from "../displaypicture.png";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import "../pagestyle.css";

const HomePage = () => {
  return (
    <div className="container about-me-flex margin-top-2-p">
      {/* <h1>Welcome to Sagar Pandya Portfolio!!</h1> */}
      <div><img src={picture} alt="display"/></div>
      <div className="font-size-14 text-white">
        <h1>Sagar Pandya</h1>
        <p> <h2>Full Stack Developer | Quality Engineering | Software Engineer </h2></p>
        <p> I have completed Master's in Computer Science from San Francisco State University. I am currently seeking full-time opportunities in Software Engineering and Quality Engineering area.</p>
        <p> <MdEmail /> sagarpandy94@gmail.com </p>
        <p> <MdPhone /> (415)712-5855</p>
      </div>
    </div>
  );
};

export default HomePage;