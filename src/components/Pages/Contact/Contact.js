import React from "react";
import "./Contact.css";
import {
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoChevronUp,
} from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Contact() {
  const showArrow = () => {
    if (window.scrollY >= 1000) {
      document.getElementById("arrowLink").style.visibility = "visible";
      document.getElementById("arrowLink").style.opacity = "1";
      document.getElementById("arrowLink").style.color =
        "rgba(255, 255, 255, 0.473)";
    } else if (window.scrollY < 1000) {
      document.getElementById("arrowLink").style.visibility = "hidden";
      document.getElementById("arrowLink").style.opacity = "0";
    }
  };

  const mouseOver = () => {
    document.getElementById("arrowLink").style.color = "#fff";
  };
  const mouseOut = () => {
    document.getElementById("arrowLink").style.color =
      "rgba(255, 255, 255, 0.473)";
  };

  window.addEventListener("scroll", showArrow);

  return (
    <>
      <div id="contactSection" className="contact-section">
        <ScrollAnimation animateIn="animate__fadeIn">
          <div className="contact-container">
            <div className="contact-headline">
              <h1>Contact</h1>
            </div>

            <div className="contact-links">
              <a target="_blank" href="mailto:lmrlrry@gmail.com">
                <IoMailOutline className="contact-icon" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/llamar7/">
                <IoLogoLinkedin className="contact-icon" />
              </a>
              <a target="_blank" href="https://github.com/l2fc3s">
                <IoLogoGithub className="contact-icon" />
              </a>
            </div>
          </div>
        </ScrollAnimation>
        <div id="arrowDiv">
          <HashLink
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            id="arrowLink"
            className="arrow-up"
            smooth
            to="#home"
          >
            <IoChevronUp />
          </HashLink>
        </div>
      </div>
    </>
  );
}

export default Contact;
