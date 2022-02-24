import React from "react";
import "./About.css";
import { IoChevronDown } from "react-icons/io5";

function About(
  {welcomeHeader,
  header2,
  aboutText,}
) {
  return (
    <>
      <div id="welcome-section" className="welcome-container">
        <div className="text-wrapper">
          <div className="welcome-text">
            <h1 id="welcome-header">{welcomeHeader}</h1>
            <h1>{header2}</h1>
          </div>

          <div className="about-text">
            <p>
              {aboutText}
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
