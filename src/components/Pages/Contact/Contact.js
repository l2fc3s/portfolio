import React from "react";
import "./Contact.css";
import { IoMailOutline, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <>
      <div id="contactSection" className="contact-section">
        <Fade>
          <div className="contact-container">
            <div className="contact-headline">
              <h1>Contact</h1>
            </div>

            <div className="">
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
        </Fade>
      </div>
    </>
  );
}

export default Contact;
