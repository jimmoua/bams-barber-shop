import React from "react";
import styles from "../styles/AdditionalInfo.module.css";

const AdditionalInfo = () => {
  return(
    <React.Fragment>
      <div className={styles.infoForm}>
        <h3>You are nearly done. Enter your details below </h3>
        <form>

          <div className={styles.phone}>
            <input type="tel" 
              className="" 
              placeholder="Mobile Phone" 
              name="phone"
              required
            />
          </div>

          <div className={styles.email}>
            <input type="email" 
              className="" 
              placeholder="Email" 
              name="email"
              required
            />
          </div>

          <div className={styles.firstName}>
            <input
              type="text" 
              placeholder="First Name" 
              name="firstName"
              required
            />
          </div>

          <div className={styles.lastName}>
            <input
              type="text" 
              placeholder="Last Name" 
              name="lastName"
              required
            />
          </div>

          <div className={styles.textarea}>
            <textarea name="comment" rows="5" cols="138" placeholder="Additional notes (optional)"/> 
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AdditionalInfo;