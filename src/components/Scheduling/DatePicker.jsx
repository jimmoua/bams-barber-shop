import React from "react";
import ReactDatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "../styles/DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = () => {
  const [chosenDate, setChosenDate] = React.useState();
  const [availableTimes, setAvailableTimes] = React.useState([]);

  React.useEffect(() => {
    setAvailableTimes(null);

    setTimeout(() => {
      const mockTimes = [
        new Date(),
        new Date(),
        new Date()
      ];
      mockTimes[0].setUTCMilliseconds(0);
      mockTimes[1].setUTCMilliseconds(0);
      mockTimes[2].setUTCMilliseconds(0);

      mockTimes[0].setUTCSeconds(0);
      mockTimes[1].setUTCSeconds(0);
      mockTimes[2].setUTCSeconds(0);

      mockTimes[0].setUTCMinutes(30);
      mockTimes[1].setUTCMinutes(30);
      mockTimes[2].setUTCMinutes(30);

      mockTimes[0].setUTCHours(14);
      mockTimes[1].setUTCHours(15);
      mockTimes[2].setUTCHours(16);

      const btnArray = [];
      mockTimes.forEach((e, idx) => {
        const s = e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" } );
        btnArray.push(
          <button key={idx}>{s}</button>
        );
      });

      setAvailableTimes(btnArray);
    }, 1000);

  }, [chosenDate]);

  return (
    <div className={styles.container}>
      <ReactDatePicker
        placeholderText="Select a Date"
        selected={chosenDate}
        onChange={date => setChosenDate(date)}
        minDate={new Date()}
        withPortal
        todayButton="Go to Today"
      />
      {availableTimes ? availableTimes : <ClipLoader />}
    </div>
  );
};

export default DatePicker;
