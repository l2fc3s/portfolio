import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <HashLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p>LL</p>
          </HashLink> */}

          <div className="mobile-icon" onClick={handleClick}>
            {click ? (
              <IoMdClose className="times" />
            ) : (
              <IoIosMenu className="bars" />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="#project-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="#resume-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="#connect-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Connect
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
