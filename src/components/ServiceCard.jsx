import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Services.module.css";
import { useStore } from "../store";

/**
 * @function ServiceCard
 * @param {Object} haircut represents an object containing name, price, and ETA for a haircut 
 * @returns {React.Component} a react component that will be rendered to the DOM.
 */
function ServiceCard({
  haircut,
  display = false,
  setService
}) {
  const { state, dispatch } = useStore();
  /**
   * @function determine
   * 
   * @description
   * Determines whether we should edit the style (employee) or go to a "book now"
   */
  const determine = (id) => {
    if(state.loggedIn) {
      alert("Hello, employee");
    }
    else alert(id);
  };
  return (
    <div key={haircut.key} className={styles.serviceCard} onClick={
      setService ? () => setService(haircut) : () => determine(haircut.key)
    }>
      { display && <span className={styles.bookNow}>Schedule Now</span>}
      <h2>{haircut.name}</h2>
      <span className={styles.servicePrice}>${haircut.price} &bull; {haircut.time} minutes</span>
    </div>
  );
}

ServiceCard.propTypes = {
  haircut: PropTypes.object.isRequired,
  display: PropTypes.bool,
  setService: PropTypes.func
};

export default ServiceCard;
