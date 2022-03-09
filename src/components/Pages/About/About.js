import React from "react";
import "./About.css";
import { IoChevronDown } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import FadeIn from "react-fade-in";

function About({ welcomeHeader, header2, aboutText }) {
  return (
    <>
      <div id="welcome-section" className="welcome-container">
        <FadeIn>
          <div className="text-wrapper">
            <div className="welcome-text">
              <h1 id="welcome-header">{welcomeHeader}</h1>
              <h1>{header2}</h1>
            </div>

            <div className="about-text">
              <p>{aboutText}</p>
            </div>

            <HashLink id="welcomeArrow" smooth to="#projectSection">
              <IoChevronDown className="welcome-arrow" />
            </HashLink>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default About;
