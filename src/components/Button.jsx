import React from "react";
import "./styles/Button.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const STYLES = ["btn--primary", "btn--outline", "btn--delete", "btn--edit"];

const SIZES = ["btn--medium", "btn--large"];

/**
 * @function Button
 * 
 * @param {Function} onClick is a function to handle on click events.
 * @param {String} buttonStyle is a string denoting class name for CSS.
 * @param {String} buttonSize is a string denoting class name for CSS.
 * @param {Object} children is a children of the element being wrapped.
 * @param {String} linkTo the link that the clicking the button goes to.
 * 
 * @description
 * Returns an a link wrapper around an HTML button with certain styles and
 * attributes.
 */
const Button = ({
  onClick,
  buttonStyle,
  buttonSize,
  children,
  linkTo
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={linkTo || "#"} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string
};

export default Button;
