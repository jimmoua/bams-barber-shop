import React from "react";
import { checkStorage } from "../../store";
import styles from "../styles/EmployeeHome.module.css";
import ReactDatePicker from "react-datepicker";
import moment from "moment-timezone";
import ClipLoader from "react-spinners/ClipLoader";
import getDay from "date-fns/getDay";
import { appointmentCancelEmployee, getAppointmentByDate } from "../../api/appointments";
import MaterialTable from "material-table";
import Popup from "reactjs-popup";
import Button from "@material-ui/core/Button";
import "reactjs-popup/dist/index.css";
import { useAlert } from "react-alert";
import DetailView from "./DetailView";

/**
 * @function EmployeeHome
 * 
 * @description
 * The React component for the home page of an emloyee view
 */
const EmployeeHome = () => {
  const [chosenDate, setChosenDate] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [appointments, setAppointments] = React.useState([]);
  const [popupComponent, setPopupComponent] = React.useState(<React.Fragment></React.Fragment>);
  const alert = useAlert();

  /**
   * Everytime the component mounts, check the storage for the expiration date.
   * Once the local storage logged in state is removed, the component will
   * re-render.
   */
  React.useEffect(() => {
    checkStorage();
  });

  const displayData = () => {
    if(loading) {
      return <ClipLoader />;
    }
    if(!chosenDate) {
      return <React.Fragment></React.Fragment>;
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
      const { service } = rowData.key;
      return (
        <Popup modal nested open closeOnDocumentClick={false} closeOnEscape={false}>
          {(close) => {
            return <DetailView close={close} fd={fd} serviceKey={service} />;
          }}
        </Popup>
      );
    };

    /**
     * @description
     * cancels the appointment immediately from the backend
     */
    const requestCancelAppointment = (date) => {
      appointmentCancelEmployee(date)
        .then(status => {
          if(status === 200) {
            alert.success("The appointment was canceled.");
          } else {
            alert.error("The appointment could not be canceled.");
          }
          setPopupComponent(<React.Fragment></React.Fragment>);
        });
    };

    const handleCancelBtnPress = (close, rowData) => {
      const { date } = rowData.key;
      return (
        <React.Fragment>
          <Button
            className={styles.button}
            onClick={() => {
              setPopupComponent(<React.Fragment></React.Fragment>);
              close();
            }}
          >
            No
          </Button>
          <Button
            className={styles.button}
            onClick={() => {
              setPopupComponent(
                <Popup modal open closeOnDocumentClick={false} closeOnEscape={false}>
                  {() => {
                    requestCancelAppointment(date);
                    return (
                      <div className={styles.modal}>
                        <div className={styles.header}>Canceling Appointment...</div>
                        <div className={styles.content}>
                          <div style={{ textAlign: "center" }}>
                            <ClipLoader />
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Popup>
              );
            }}
          >
            Yes
          </Button>
        </React.Fragment>
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
          actions={[
            {
              icon: "clear",
              tooltip: "Cancel Appointment",
              onClick: (ev, rowData) => {
                setPopupComponent(
                  <Popup open closeOnDocumentClick={false} closeOnEscape={false}>
                    {(close) => (
                      <div className={styles.modal}>
                        <button className={styles.close} onClick={() => {
                          setPopupComponent(<React.Fragment></React.Fragment>);
                          close();
                        }}>&times;</button>
                        <div className={styles.header}>Cancel Appointment</div>
                        <div className={styles.content}>
                          <p style={{ textAlign: "center" }}>
                            Are you sure you want to cancel the appointment?
                          </p>
                        </div>
                        <div className={styles.actions}>
                          {handleCancelBtnPress(close, rowData)}
                        </div>
                      </div>
                    )}
                  </Popup>
                );
              }
            }
          ]}
        />
      </div>

    );
  };

  return (
    <React.Fragment>
      {popupComponent}
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
