import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Services.module.css";

/**
 * @function PriceCard represents a price card
 * @param {Object} haircut represents an object containing name, price, and ETA for a haircut 
 * @returns {React.Component} a react component that will be rendered to the DOM.
 */
function PriceCard({
  haircut,
  className
}) {
  return (
    <div className={className} >
      <span className={styles.bookNow}>Book Now</span>
      <h2>{haircut.name}</h2>
      <span className={styles.servicePrice}>${haircut.price} &bull; {haircut.time} minutes</span>
    </div>
  );
}

PriceCard.propTypes = {
  haircut: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default PriceCard;
