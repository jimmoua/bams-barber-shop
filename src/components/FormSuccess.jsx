import React from "react";
import styles from "./styles/SignUp.module.css";
import PropType from "prop-types";

/**
 * @param {String} date - Locale string representing date.
 */
function FormSuccess({ date }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h3>You have an appointment with us at {date}.</h3>
        <img className="form-image" src="formsuccess.jpg" alt="form-success"/>
        {/* TODO: Needs centering on the p tag below. */}
        <p>Questions? Call us at 555-555-5555.</p>
      </div>
    </div>
  );
}

FormSuccess.propTypes = {
  date: PropType.string.isRequired
};

export default FormSuccess;
