import React from "react";
import PropType from "prop-types";
import { appointmentCancel } from "../api/appointments";
import { ClipLoader } from "react-spinners";
import styles from "../components/styles/SpecificAppointmentView.module.css";

/**
 * 
 * @param {Object} props We are interested in the location.state that is passed into this prop
 */
const SpecificAppointmentView = (props) => {
  const [cancelSubmit, setCancelSubmit] = React.useState(false);
  const handleCancelAppointment = async() => {
    setCancelSubmit(true);
    const statusCode = await appointmentCancel(props.location.state.dateKey);
    setCancelSubmit(false);
    switch(statusCode) {
      case 200:
        return alert("To finalize your cancellation, please check your email or text message.");
      default:
        return alert("Unable to process your cancellation request.");
    }
  };
  const renderAppointmentDetails = () => {
    if (!props.location.state) {
      return (
        <React.Fragment>
          <p>Unable to find any appointments matching the provided details.</p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className={styles.buttonSubmit}>
            <form onSubmit={(ev) => ev.preventDefault()}>
              <p>{props.location.state.customer}</p>
              <p>Date:{props.location.state.date}</p>
              <p>{props.location.state.styleName}</p>
              {cancelSubmit ? <ClipLoader /> : <button onClick={handleCancelAppointment}>Cancel Appointment</button>}
            </form>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <h1>Appointment Details</h1>
          {renderAppointmentDetails()}
        </div>
      </div>
    </React.Fragment>
  );
};

SpecificAppointmentView.propTypes = {
  location: PropType.object
};

export default SpecificAppointmentView;
