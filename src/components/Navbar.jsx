import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useStore } from "../store";
import PropTypes from "prop-types";
import EditStylesPage from "./Employee/EditStylesPage";
import EmployeeHome from "./Employee/EmployeeHome";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { state, dispatch } = useStore();

  /**
   * @function LinkWrapper
   *
   * @description
   * Returns a Link component with onClick and className attributes.
   */
  const LinkWrapper = ({ to, children }) => {
    return (
      <li className="nav-item">
        <Link to={to} className="nav-links" onClick={closeMobileMenu}>
          { children }
        </Link>
      </li>
    );
  };
  LinkWrapper.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
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
      /**
       * Employee render links
       */
      return (
        <React.Fragment>
          <span onClick={() => {
            if(state.loggedIn) {
              dispatch({ type: "setEmployeeComponent", component: <EmployeeHome /> });
            }
          }}>
            <LinkWrapper to="#">Home</LinkWrapper>
          </span>
          <span onClick={() => dispatch({ type: "setEmployeeComponent", component: <EditStylesPage /> })}>
            <LinkWrapper to="#">Edit Styles</LinkWrapper>
          </span>
          <span onClick={() => dispatch({ type: "logout" })}>
            <LinkWrapper to="#">Logout</LinkWrapper>
          </span>
        </React.Fragment>
      );
    } else {
      /**
       * Non-employee render links
       */
      return (
        <React.Fragment>
          <LinkWrapper to="/">Home</LinkWrapper>
          <LinkWrapper to="/services">Services</LinkWrapper>
          <LinkWrapper to="/gallery">Gallery</LinkWrapper>
          <div className = "dropdownMenu" onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <LinkWrapper to="/scheduling" 
            >Schedule <i className="fa fa-caret-down" /> {dropdown && <Dropdown />}</LinkWrapper>  </div>
          <div className="lookup"><LinkWrapper to="/appointment_Lookup">Lookup</LinkWrapper></div>
        </React.Fragment>
      );
    }
  }

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <span onClick={() => {
            if(state.loggedIn) {
              dispatch({ type: "setEmployeeComponent", component: <EmployeeHome /> });
            }
          }}>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BAMS BARBER <i className="fa fa-scissors "/>
            </Link>
          </span>
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
