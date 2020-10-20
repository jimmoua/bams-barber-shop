import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useStore } from "../store";
import PropTypes from "prop-types";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { state } = useStore();

  /**
   * @function LinkWrapper
   *
   * @description
   * Returns a Link component with onClick and className attributes.
   */
  const LinkWrapper = ({ to, children }) => {
    return (
      <Link to={to} className="nav-links" onClick={closeMobileMenu}>
        { children }
      </Link>
    );
  };
  LinkWrapper.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  };

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
            <LinkWrapper to="/">Home</LinkWrapper>
          </li>
          <li className="nav-item">
            <LinkWrapper to="/services">Services</LinkWrapper>
          </li>
          <li className="nav-item">
            <LinkWrapper to="/gallery">Gallery</LinkWrapper>
          </li>
          <li className="nav-item">
            <LinkWrapper to="/scheduling">Schedule</LinkWrapper>
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
