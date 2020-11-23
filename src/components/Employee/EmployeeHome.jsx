import React from "react";
import { checkStorage } from "../../store";
import styles from "../styles/EmployeeHome.module.css";
import ReactDatePicker from "react-datepicker";
import moment from "moment-timezone";
import ClipLoader from "react-spinners/ClipLoader";
import getDay from "date-fns/getDay";
import { getAppointmentByDate } from "../../api/appointments";
import MaterialTable from "material-table";
import Popup from "reactjs-popup";
import Button from "@material-ui/core/Button";
import "reactjs-popup/dist/index.css";

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
  const [appointments, setAppointments] = React.useState([]);

  const displayData = () => {
    if(loading) {
      return <ClipLoader />;
    }
    const rowData = [];
    for(let i = 0; i < appointments.length; i++) {
      const fd = appointments[i]?.formDetails;
      rowData.push({
        key: appointments[i],
        firstName: fd?.firstName,
        lastName: fd?.lastName,
        phoneNumber: fd?.phoneNumber,
        email: fd?.email,
        date: moment(appointments[i].date).toDate().toLocaleTimeString("en-US", { timeStyle: "short" }),
        payment: appointments[i].transactionId ? "Paid online" : "Not paid",
        status: appointments[i].status ? "FINISHED" : "NOT FINISHED"
      });
    }

    /**
     * @param {Object} rowData 
     * 
     * @description
     * acts as the renderer for out MaterialUi table
     */
    const render = rowData => {
      const { formDetails: fd } = rowData.key;
      return (
        <Popup modal nested open>
          {close => (
            <div className={styles.modal}>
              {/* Close on the top right corner */}
              <button className={styles.close} onClick={close}>
                &times;
              </button>
              <div className={styles.header}>Additional Information for {fd.firstName} {fd.lastName}</div>
              <div className={styles.content}>
                <p style={{ textAlign: "center" }}>
                  {fd.additionalInfo?.length > 0 ? fd.additionalInfo : "N/A"}
                </p>
              </div>
              <div className={styles.actions}>
                <Button
                  className={styles.button}
                  onClick={() => {
                    close();
                  }}
                >
                  close
                </Button>
              </div>
            </div>
          )}
        </Popup>
      );
    };

    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Phone Number", field: "phoneNumber", type: "string" },
            { title: "Appointment Time", field: "date", type: "string" },
            { title: "Payment", field: "payment", type: "string" },
            { title: "First Name", field: "firstName", type: "string" },
            { title: "Last Name", field: "lastName", type: "string" },
            { title: "Email", field: "email", type: "string" },
            { title: "Status", field: "status", type: "string" }
          ]}
          data={rowData}
          title={`Appointments for ${chosenDate.toLocaleDateString("en-US", { dateStyle: "full" })}`}
          options={{
            search: true
          }}
          detailPanel={[
            {
              tooltip: "View Additional Information",
              icon: "preview",
              openIcon: "preview",
              render
            }
          ]}
          onRowClick={(ev, rowData, togglePanel) => {togglePanel();}}
        />
      </div>

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
            setAppointments(apts);
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
