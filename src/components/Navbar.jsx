import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useStore } from "../store";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { state } = useStore();

  /**
   * @function renderLinks
   * 
   * @description
   * Determines the links to render based on the whether a login state is
   * present or not.
   */
  function renderLinks() {
    if(state.loggedIn) {
      return (
        <React.Fragment>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
                Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/scheduling" className="nav-links" onClick={closeMobileMenu}>
                Schedule
            </Link>
          </li>
        </React.Fragment>
      );
    }
  }

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BAMS BARBER <i className="fa fa-scissors "/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}/>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {renderLinks()}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
