import React from "react";
import qs from "qs";
import PropType from "prop-types";
import { ClipLoader } from "react-spinners";
import { appointmentConfirmDelete } from "../api/appointments";

/**
 * @param {props} props React props, obviously. history.push(URL, state) is why we use this.
 */
const AppointmentDelete = (props) => {
  // REACT STATES
  const [confirmCode, setConfirmCode] = React.useState();
  const [finishedRequest, setFinishedRequest] = React.useState(false);
  const [statusCode, setStatusCode] = React.useState(null);

  // On component mount:
  // 1. extract the parameters from the query string
  // 2. send a request to our API using the query string
  // 3. if 200 status, appointment was removed, otherwise appointment could not be removed for other reasons (not found or server down)
  React.useEffect(() => {
    const queryString = props?.location?.search;
    const { verification_code } = qs.parse(queryString, { ignoreQueryPrefix: true });
    if(verification_code) {
      setConfirmCode(verification_code);
    }
    appointmentConfirmDelete(verification_code) 
      .then(response => {
        console.log(response);
        setStatusCode(response);
        setFinishedRequest(true);
      });
  }, [props?.location?.search]);

  // Render conditions
  // 1. If the API request has not responded with an http code, return the spinner
  // 2. Return an error message is the query string does not contain the confirmation code OR we've received a response code that isn't 200.
  // 3. Return successful appointment deletion if none above is met
  const render = () => {
    if(!finishedRequest) {
      return <ClipLoader />;
    }
    if(!confirmCode || (statusCode !== 200 && finishedRequest)) {
      return (
        <React.Fragment>
          <p>Appointmentment cancellation request had failed.</p>
          <p>Please ensure that you are clicking on the link through your email/ text message.</p>
          <p>If you believe this is an error, please contact us at 501-318-3142</p>
        </React.Fragment>
      );
    }
    return (
      <p>Your appointment has been successfully cancelled.</p>
    );
  };
  return (
    <React.Fragment>
      <h1>Appointment Cancellation</h1>
      {render()}
    </React.Fragment>
  );
};

AppointmentDelete.propTypes = {
  location: PropType.object
};

export default AppointmentDelete;
