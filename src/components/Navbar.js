import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IoCloseOutline, IoReorderTwoOutline } from "react-icons/io5";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const resetClick = () => {
    if (window.innerWidth > 960) {
      setClick(false);
    }
  };

  window.addEventListener("resize", resetClick);

  if (click) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      <nav id="home" className="navbar">
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
              <a
                href="https://drive.google.com/file/d/1g8ZlfDuLVBhvRJzRqPOsmTzuCmwCT1_h/view?usp=sharing"
                target="blank"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </a>
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
