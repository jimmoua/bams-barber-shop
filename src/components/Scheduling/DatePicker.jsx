import React from "react";
import ReactDatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

import styles from "../styles/DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { fetchAppointmentTimeSlots } from "../../api/appointments";
import moment from "moment-timezone";
import { getDay } from "date-fns";

/**
 * 
 * @param {Function} setDate - sets the time state for scheduling component or parent component
 */
const DatePicker = ({ setDate }) => {
  const [loading, setLoading] = React.useState(false);
  const [chosenDate, setChosenDate] = React.useState(null);
  const [availableTimes, setAvailableTimes] = React.useState([]);

  React.useEffect(() => {
    if(loading) {
      const m = moment(chosenDate);
      const btnArray = [];
      fetchAppointmentTimeSlots(m.year(), m.month(), m.date())
        .then(response => {
          console.log(response);
          response.forEach((e, idx) => {
            const s = moment(e).toDate().toLocaleTimeString([], { timeStyle: "short" });
            btnArray.push(
              <button key={idx} className={styles.dateBtn} onClick={() => setDate(moment(e).toISOString())}>{s}</button>
            );
          });
          setAvailableTimes(btnArray);
          setLoading(false);
        });
    }
  }, [setDate, chosenDate, loading]);

  const renderDates = () => {
    if(availableTimes.length === 0 && loading) {
      return (
        <div className={styles.selectTimeTitle}>
          <ClipLoader />
        </div>
      );
    } else if(availableTimes.length > 0) {
      return (
        <React.Fragment>
          <h3 className={styles.selectTimeTitle}>Select a time slot</h3>
          {availableTimes}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment></React.Fragment>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <ReactDatePicker
          placeholderText="Select a Date"
          selected={chosenDate}
          onChange={date => {
            setLoading(true);
            setChosenDate(date);
            setAvailableTimes([]);
          }}
          minDate={new Date()}
          withPortal
          todayButton="Go to Today"
          required
          filterDate={(date) => {
            // 0 -> Sunday
            // 1 -> Monday
            // Return the days that are not these two
            const day = getDay(date);
            return day !== 0 && day !== 1;
          }}
        />
      </div>
      <div className={styles.timeContainer}>
        {renderDates()}
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  setDate: PropTypes.func
};

export default DatePicker;
