import React from "react";
import PropTypes from "prop-types";
import sendAppointment from "../../api/sendAppointment";
import styles from "../styles/Review.module.css";
import Button from "../Button";
import { ClipLoader } from "react-spinners";
import { useAlert } from "react-alert";

/**
 * @param {Object} appointmentDetails - object containing customer appointment details
 * @param {Function} setAppointmentSubmit - used to set the submit flag so we can display a redirect component to payment
 */
const Review = ({ appointmentDetails, setAppointmentSubmit }) => {
  const [sent, setSent] = React.useState(false);
  const alert = useAlert();
  async function send() {
    setSent(true);
    const statusCode = await sendAppointment(appointmentDetails);
    switch(statusCode) {
      case 200:
        alert.success("Appointment Booked!");
        setAppointmentSubmit(true);
        return;
      case 409:
        alert.error("Appointment conflict!");
        break;
      case 500:
      default:
        alert.error(`Something went wrong: ${statusCode}`);
        break;
    }
    setSent(false);
  }
  return (
    <React.Fragment>
      <div className={styles.box}>
        <div className={styles.spacer}>
          <h2>Name and Contact</h2>
          <div>{appointmentDetails.formDetails.firstName + " " + appointmentDetails.formDetails.lastName}</div>
          <div>{appointmentDetails.formDetails.email}</div>
          <div>{appointmentDetails.formDetails.phoneNumber}</div>
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
            value={appointmentDetails.formDetails.additionalInfo || "N/A"}
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
  appointmentDetails: PropTypes.object.isRequired,
  setAppointmentSubmit: PropTypes.func.isRequired
};

export default Review;
