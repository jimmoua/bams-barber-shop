import React from "react";
import styles from "./styles/SignUp.module.css";
import { Link } from "react-router-dom" ;

function FormSuccess() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h3>Thank you for joining us!</h3>
        <img className="form-image" src="formsuccess.jpg" alt="form-success"/>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className={styles.gotologin}>
            <button type="submit">Go To Login</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FormSuccess;
