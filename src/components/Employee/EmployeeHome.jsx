import React from "react";
import { checkStorage } from "../../store";
import styles from "../styles/EmployeeHome.module.css";
import ReactDatePicker from "react-datepicker";
import moment from "moment-timezone";
import ClipLoader from "react-spinners/ClipLoader";
import getDay from "date-fns/getDay";
import { getAppointmentByDate } from "../../api/appointments";

/**
 * @function EmployeeHome
 * 
 * @description
 * The React component for the home page of an emloyee view
 */
const EmployeeHome = () => {
  /**
   * Everytime the component mounts, check the storage for the expiration date.
   * Once the local storage logged in state is removed, the component will
   * re-render.
   */
  React.useEffect(() => {
    checkStorage();
  });

  const [chosenDate, setChosenDate] = React.useState(moment().toDate());
  const [loading, setLoading] = React.useState(false);
  const [appointments, setAppointments] = React.useState();

  const displayData = () => {
    if(loading) {
      return <ClipLoader />;
    }
    return (
      <div className={styles.aptListContainer}>{appointments}</div>
    );
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1>Employee Homepage</h1>
        <ReactDatePicker
          placeholderText="Select a Date"
          selected={chosenDate}
          onChange={async(date) => {
            setLoading(true);
            setChosenDate(date);
            const apts = await getAppointmentByDate(date);
            const aptList = [];
            for(let i = 0; i < apts.length; i++) {
              aptList.push(
                <p key={i} className={styles.aptListItem}>Hello</p>
              );
            }
            setAppointments(aptList);
            setLoading(false);
          }}
          // minDate={new Date()}
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
        {displayData()}
      </div>
    </React.Fragment>
  );
};

export default EmployeeHome;
