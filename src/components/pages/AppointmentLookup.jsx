import React from "react";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { appointmentSearchByPhone } from "../../api/appointments";
import styles from "../styles/AppointmentLookup.module.css";

const AppointmentLookup = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [appointmentList, setAppointmentList] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  /**
   * @function lookupButtonHandler
   * 
   * @description
   * Onclick handler submits axios post to backend
   */
  const lookupButtonHandler = async() => {
    if(phoneNumber.length === 0 || !/^[0-9]\d{9}$/.test(phoneNumber)) {
      return;
    }
    setLoading(true);
    const data = await appointmentSearchByPhone(phoneNumber);
    if(data?.length > 0) {
      setAppointmentList(JSON.stringify(data));
      const newAppointmentList = [];
      data.forEach((e, idx) => {
        newAppointmentList.push(
          <p onClick={() => history.push("/appointment_view", e)} key={idx} className={styles.appointment}>{e.date}</p>
        );
      });
      setAppointmentList(newAppointmentList);
    } else {
      setAppointmentList([]);
    }
    setLoading(false);
  };

  const displayAppointmentList = () => {
    if(appointmentList?.length === 0) {
      return (
        <React.Fragment>
          <p>No results found</p>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {appointmentList}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <h1>Appointment Lookup</h1>
          <div className={styles.searchBar}>
            <form onSubmit={(ev) => ev.preventDefault()}>
              <input
                required
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(ev) => setPhoneNumber(ev.target.value)}
                type="tel"
                pattern="^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$"
                title="##########"
              />
              <button className={styles.buttonLookup} onClick={lookupButtonHandler}>Lookup</button>
            </form>
            {loading ? <ClipLoader /> : displayAppointmentList()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppointmentLookup;
