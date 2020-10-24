import React from "react";
import ReactDatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

import styles from "../styles/DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

const createMockTime = (hh, mm = 0) => {
  const foo = new Date();
  foo.setUTCMilliseconds(0);
  foo.setUTCSeconds(0);
  foo.setUTCHours(hh);
  foo.setUTCMinutes(mm);
  return foo;
};

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
      setTimeout(() => {
        const mockTimes = [
          createMockTime(14, 30),
          createMockTime(15),
          createMockTime(16, 30),
          createMockTime(18),
          createMockTime(21)
        ];

        const btnArray = [];
        mockTimes.forEach((e, idx) => {
          const s = e.toLocaleTimeString([], { timeStyle: "short" } );
          btnArray.push(
            <button key={idx} className={styles.dateBtn} onClick={() => setDate(e.toISOString())}>{s}</button>
          );
        });
        setAvailableTimes(btnArray);
        setLoading(false);
      }, 300);
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
          <h3 className={styles.selectTimeTitle}>select a time slot</h3>
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
