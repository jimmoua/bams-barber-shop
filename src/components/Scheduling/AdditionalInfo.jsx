import React from "react";
import styles from "../styles/AdditionalInfo.module.css";
import PropTypes from "prop-types";

const AdditionalInfo = () => {
  const [formData, setFormData] = React.useState({
    phoneNumber: "",
    email: "",
    firstName: "",
    lastName: "",
    AdditionalInfo: ""
  });

  return(
    <React.Fragment>
      <div className={styles.infoForm}>
        <h3>You are nearly done. Enter your details below </h3>
        <form>

          <div className={styles.phone}>
            <input type="tel" 
              className="" 
              placeholder="Mobile Phone" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={ev => {
                setFormData({ ...formData, phoneNumber:ev.target.value });
              }}
              required
            />
          </div>

          <div className={styles.email}>
            <input type="email" 
              className="" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={ev => {
                setFormData({ ...formData, email:ev.target.value });
              }}
              required
            />
          </div>

          <div className={styles.firstName}>
            <input
              type="text" 
              placeholder="First Name" 
              name="firstName"
              required
              value={formData.firstName}
              onChange={ev => {
                setFormData({ ...formData, firstName:ev.target.value });
              }}
            />
          </div>

          <div className={styles.lastName}>
            <input
              type="text" 
              placeholder="Last Name" 
              name="lastName"
              value={formData.lastName}
              onChange={ev => {
                setFormData({ ...formData, lastName:ev.target.value });
              }}
              required
            />
          </div>

          <div className={styles.textarea}>
            <textarea name="additionalInfo" rows="5" cols="138" placeholder="Additional notes (optional)"/> 
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

AdditionalInfo.propTypes = {
  formDetails: PropTypes.func.isRequired
};

export default AdditionalInfo;