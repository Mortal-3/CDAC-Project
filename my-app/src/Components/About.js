import React from "react";
import "./../StyleComponent/About.css";
function About() {
  return (
    <div className="about" id="about">
      <h1>
        <u>About: Technologies Used:</u>
      </h1>
      <p>
        This is a HPC-Simulator app created with the following technologies:{" "}
      </p>
      <ul>
        <li>Html5 </li>
        <li>CSS</li>
        <li>ReactJS- A JavaScript library for building user interfaces.</li>
        <li>Jsx</li>
        <li>FLask Framework</li>
        <li>Python</li>
      </ul>
    </div>
  );
}

export default About;
