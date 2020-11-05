import React from "react";
import { appointmentSearchByPhone } from "../../api/appointments";

const AppointmentLookup = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [appointmentList, setAppointmentList] = React.useState();

  /**
   * @function lookupButtonHandler
   * 
   * @description
   * Onclick handler submits axios post to backend
   */
  const lookupButtonHandler = async() => {
    const data = await appointmentSearchByPhone(phoneNumber);
    if(data?.length > 0) {
      console.log(JSON.stringify(data));
      setAppointmentList(JSON.stringify(data));
    } else {
      setAppointmentList("");
    }
  };
  return (
    <React.Fragment>
      <h1>Appointment Lookup</h1>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <input value={phoneNumber} onChange={((ev) => setPhoneNumber(ev.target.value))} type="text"/>
        <button onClick={lookupButtonHandler}>Lookup</button>
      </form>
      <p>{appointmentList}</p>
    </React.Fragment>
  );
};

export default AppointmentLookup;
