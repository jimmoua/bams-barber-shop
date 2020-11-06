import React from "react";
import { appointmentSearchByPhone } from "../../api/appointments";
import styles from "../styles/AppointmentLookup.module.css";

const AppointmentLookup = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [appointmentList, setAppointmentList] = React.useState([]);

  /**
   * @function lookupButtonHandler
   * 
   * @description
   * Onclick handler submits axios post to backend
   */
  const lookupButtonHandler = async() => {
    const data = await appointmentSearchByPhone(phoneNumber);
    if(data?.length > 0) {
      // console.log(JSON.stringify(data));
      setAppointmentList(JSON.stringify(data));
      const newAppointmentList = [];
      data.forEach((e, idx) => {
        newAppointmentList.push(
          <p key={idx} className={styles.appointment}>{e.date}</p>
        );
      });
      setAppointmentList(newAppointmentList);
    } else {
      setAppointmentList([]);
    }
  };
  return (
    <React.Fragment>
      <h1>Appointment Lookup</h1>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <input value={phoneNumber} placeholder="Phone Number" onChange={((ev) => setPhoneNumber(ev.target.value))} type="tel"/>
        <button onClick={lookupButtonHandler}>Lookup</button>
      </form>
      {appointmentList}
    </React.Fragment>
  );
};

export default AppointmentLookup;
