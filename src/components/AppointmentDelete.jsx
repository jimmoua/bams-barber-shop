import React from "react";
import qs from "qs";
import PropType from "prop-types";
import { ClipLoader } from "react-spinners";
import { appointmentConfirmDelete } from "../api/appointments";

const AppointmentDelete = (props) => {
  const [confirmCode, setConfirmCode] = React.useState();
  const [finishedRequest, setFinishedRequest] = React.useState(false);

  React.useEffect(() => {
    const queryString = props?.location?.search;
    const { verification_code } = qs.parse(queryString, { ignoreQueryPrefix: true });
    if(verification_code) {
      setConfirmCode(verification_code);
    }
    appointmentConfirmDelete(verification_code) 
      .then(response => {
        console.log(response);
        setFinishedRequest(true);
      });
  }, []);

  const render = () => {
    if(!confirmCode) {
      return (
        <React.Fragment>
          <p>Unable to fulfill your request. Please make sure the link you clicked on is valid and that your cancellation code is still valid.</p>
        </React.Fragment>
      );
    }
    if(!finishedRequest) {
      return <ClipLoader />;
    }
    return (
      <React.Fragment>
        <p>{confirmCode}</p>
      </React.Fragment>
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
