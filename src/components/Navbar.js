import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IoCloseOutline, IoReorderTwoOutline } from "react-icons/io5";
import "./Navbar.css";
import resume from "../resume/Larry LaMar Resume 2022.pdf";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          

          <div className="mobile-icon" onClick={handleClick}>
            {click ? (
              <IoCloseOutline className="times" />
            ) : (
              <IoReorderTwoOutline className="bars" />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="#projectSection"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                to={resume}
                download
                target="blank"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="#musicSection"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Music
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="#contactSection"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
