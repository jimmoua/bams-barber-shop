import React from "react";
import styles from "../styles/AdditionalInfo.module.css";
import PropTypes from "prop-types";

const AdditionalInfo = ({
  formDetails,
  setFormDetails
}) => {

  const [formData, setFormData] = React.useState({
    phoneNumber: formDetails.phoneNumber || "",
    email: formDetails.email || "",
    firstName: formDetails.firstName || "",
    lastName: formDetails.lastName || "",
    additionalInfo: formDetails.additionalInfo || ""
  });

  return(
    <React.Fragment>
      <div className={styles.infoForm}>
        <h3>You are nearly done. Enter your details below </h3>
        <div className={styles.phone}>
          <input type="tel" 
            placeholder="Mobile Phone"
            value={formData.phoneNumber}
            pattern="^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$"
            title="###-###-#### or ##########"
            onChange={ev => {
              setFormData({ ...formData, phoneNumber: ev.target.value });
              setFormDetails({ ...formData, phoneNumber: ev.target.value });
            }}
            required
            formNoValidate
          />
        </div>

        <div className={styles.email}>
          <input type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={ev => {
              setFormData({ ...formData, email: ev.target.value });
              setFormDetails({ ...formData, email: ev.target.value });
            }}
            required
          />
        </div>

        <div className={styles.firstName}>
          <input
            type="text" 
            placeholder="First Name" 
            required
            value={formData.firstName}
            onChange={ev => {
              setFormData({ ...formData, firstName: ev.target.value });
              setFormDetails({ ...formData, firstName: ev.target.value });
            }}
          />
        </div>

        <div className={styles.lastName}>
          <input
            type="text" 
            placeholder="Last Name" 
            value={formData.lastName}
            onChange={ev => {
              setFormData({ ...formData, lastName: ev.target.value });
              setFormDetails({ ...formData, lastName: ev.target.value });
            }}
            required
          />
        </div>

        <div className={styles.textareaDiv}>
          <textarea
            className={styles.textarea}
            rows="5" cols="123456"
            placeholder="Additional notes (optional)"
            onChange={(ev) => {
              setFormData({ ...formData, additionalInfo: ev.target.value });
              setFormDetails({ ...formData, additionalInfo: ev.target.value });
            }}
            value={formData.additionalInfo}
          /> 
        </div>
      </div>
    </React.Fragment>
  );
};

AdditionalInfo.propTypes = {
  formDetails: PropTypes.object.isRequired,
  setFormDetails: PropTypes.func.isRequired
};

export default AdditionalInfo;
