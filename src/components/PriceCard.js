import React from "react";
import PropTypes from "prop-types";

/**
 * @function PriceCard represents a price card
 * @param {Object} haircut represents an object containing name, price, and ETA for a haircut 
 * @returns {React.Component} a react component that will be rendered to the DOM.
 */
function PriceCard({ haircut }) {
  return (
    <div className="price-card">
      <h1>{haircut.name}</h1>
      <p>{haircut.price } . {haircut.time}</p>
      <hr/>
    </div>
  );
}

PriceCard.propTypes = {
  haircut: PropTypes.object.isRequired
};

export default PriceCard;
