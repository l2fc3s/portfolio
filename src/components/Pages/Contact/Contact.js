import React from "react";
import "./Contact.css";
import { IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoChevronUp } from "react-icons/io5";
import { Fade } from "react-reveal";
import { HashLink } from 'react-router-hash-link';

function Contact() {

  const showArrow = () => {
 
    if(window.scrollY >= 1000){
      document.getElementById('arrow').style.visibility = 'visible'
    } else if (window.scrollY < 1000) {
      document.getElementById('arrow').style.visibility = 'hidden';
    }
  }

  window.addEventListener("scroll", showArrow);

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
        <HashLink id='arrow' smooth to='#welcome-section' className='arrow-up'>
          <IoChevronUp />
        </HashLink>
      </div>
      
    </>
  );
}

export default Contact;
