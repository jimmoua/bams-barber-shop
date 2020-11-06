import React from "react";
import PropType from "prop-types";

/**
 * 
 * @param {Object} props We are interested in the location.state that is passed into this prop
 */
const SpecificAppointmentView = (props) => {
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
              <button>Cancel Appointment</button>
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
