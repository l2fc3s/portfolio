import React from "react";
import "./About.css";
import { IoChevronDown } from "react-icons/io5";

function About() {
  return (
    <>
      <div id="welcome-section" className="welcome-container">
        <div className="text-wrapper">
          <div className="welcome-text">
            <h1 id="welcome-header">Hi, I'm Larry LaMar—</h1>
            <h1>a web developer, musician, and creative. </h1>
          </div>

          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>

          <div id="welcomeArrow">
            <IoChevronDown className="welcome-arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
