import React from "react";
import PropTypes from "prop-types";
import sendAppointment from "../../api/sendAppointment";
import styles from "../styles/Review.module.css";
import Button from "../Button";
import { ClipLoader } from "react-spinners";

const Review = ({ appointmentDetails }) => {
  const [sent, setSent] = React.useState(false);
  function send() {
    setSent(true);
    sendAppointment(appointmentDetails)
      .then(response => {
        alert(JSON.stringify(response));
        setSent(false);
      });
  }
  return (
    <React.Fragment>
      <div className={styles.box}>
        <div className={styles.spacer}>
          <h2>Name</h2>
          <span>{appointmentDetails.formDetails.firstName + " " + appointmentDetails.formDetails.lastName}</span>
        </div>

        <div className={styles.spacer}>
          <h2>Service</h2>
          <span>{appointmentDetails.service.name} &mdash; {`$${appointmentDetails.service.price}`} &bull; {appointmentDetails.service.time} mins</span>
        </div>

        <div className={styles.spacer}>
          <h2>Date</h2>
          <span>{new Date(appointmentDetails.date.toString()).toLocaleString([], { dateStyle: "short", timeStyle: "short" })}</span>
        </div>

        <div className={styles.spacer}>
          <h2>Additional Information</h2>
          <textarea
            className={styles.textarea}
            disabled
            value={appointmentDetails.formDetails.additionInfo || "N/A"}
          />
        </div>

        <div className={styles.spacer}>
          {sent ? <ClipLoader /> : <Button className={styles.btnSubmit} onClick={send}>Book Now</Button>}
        </div>
      </div>
    </React.Fragment>
  );
};

Review.propTypes = {
  appointmentDetails: PropTypes.object.isRequired
};

export default Review;
