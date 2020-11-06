import React from "react";
import PropType from "prop-types";
import { appointmentCancel } from "../api/appointments";

/**
 * 
 * @param {Object} props We are interested in the location.state that is passed into this prop
 */
const SpecificAppointmentView = (props) => {
  const handleCancelAppointment = async() => {
    const statusCode = await appointmentCancel(props.location.state.dateKey);
    switch(statusCode) {
      case 200:
        return console.log("Passed with 200");
      default:
        return console.log(`Failed with status code ${statusCode}`);
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
          <div>
            <form onSubmit={(ev) => ev.preventDefault()}>
              <p>{props.location.state.customer}</p>
              <p>{props.location.state.date}</p>
              <p>{props.location.state.styleName}</p>
              <button onClick={handleCancelAppointment}>Cancel Appointment</button>
            </form>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <h1>Appointment Details</h1>
      {renderAppointmentDetails()}
    </React.Fragment>
  );
};

SpecificAppointmentView.propTypes = {
  location: PropType.object
};

export default SpecificAppointmentView;
