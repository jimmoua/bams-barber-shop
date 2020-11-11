import React from "react";
import { fetchStyles } from "../../api/styles";
import { Step, Stepper } from "react-form-stepper";
import ServiceList from "../ServiceList";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../styles/Scheduling.module.css";
import DatePicker from "./DatePicker";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";
import PayDecision from "./PayDescision";
import PropType from "prop-types";
import { useAlert } from "react-alert";

/**
 * @function Scheduling
 * 
 * @description
 * The scheduling component. This component contains a plethora of other components.
 * 
 * @returns
 * React stuff
 */
const Scheduling = ( props ) => {
  const alert = useAlert();
  const [serviceList, setServiceList] = React.useState();
  const [step, setStep] = React.useState(0);
  const [stepComponent, setStepComponent] = React.useState(<ClipLoader />);
  const [appointmentDetails, setAppointmentDetails] = React.useState({
    service: null,
    date: null,
    formDetails: {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      additionalInfo: null
    }
  });
  const [appointmentSubmit, setAppointmentSubmit] = React.useState(false);
  const [status, setStatusBase] = React.useState("");

  React.useEffect(() => {
    // Define a function to fetch the data from our API
    const fetchData = async() => {
      setServiceList(await fetchStyles());
    };

    const stepComponentMap = [
      <ServiceList key={0} serviceList={serviceList} displayScheduleNow={false} setService={(service) => {
        setAppointmentDetails({
          ...appointmentDetails,
          service: service
        });
        setStep(step + 1);
      }} />,
      <DatePicker key={1} setDate={(date) => {
        setAppointmentDetails({
          ...appointmentDetails,
          date: date
        });
        setStep(step + 1);
      }}/>,
      <AdditionalInfo key={2} formDetails={appointmentDetails.formDetails} setFormDetails={(formDetails) => {
        setAppointmentDetails({
          ...appointmentDetails,
          formDetails: formDetails
        });
      }}/>,
      <Review appointmentDetails={appointmentDetails} setAppointmentSubmit={setAppointmentSubmit} key={3} />
    ];

    // Determine the which component to render based on which step we are in.
    setStepComponent(stepComponentMap[step]);

    // If there isn't a service list AND we were NOT redirected from the services page, fetch data.
    if(!serviceList) {
      fetchData();
    }
    else if(props?.location?.state?.service && !appointmentDetails.service) {
      setAppointmentDetails({
        ...appointmentDetails,
        service: props.location.state.service
      });
      setStep(1);
    }
  }, [serviceList, step, appointmentDetails, appointmentSubmit, props]);

  /**
   * @function buttonContinueHandler
   * 
   * @description
   * Handles the actions for when the continue button is pressed
   */
  const buttonContinueHandler = () => {
    switch(step) {
      case 0:
        if(!appointmentDetails.service) {
          alert.show("Please select a service");
          return;
        }
        break;
      case 1:
        if(appointmentDetails.date) break;
        else return;
      case 2: {
        let fd = appointmentDetails.formDetails;
        if(fd.firstName && fd.lastName && fd.email && fd.phoneNumber) break;
        else return;
      }
      default: return;
    }
    setStep(step + 1);
  };

  /**
   * @function buttonBackHandler
   * 
   * @description
   * Handles the action for when the back button is pressed
   */
  const buttonBackHandler = () => {
    switch(step) {
      case 1: {
        setStep(step - 1);
        return setAppointmentDetails({
          ...appointmentDetails,
          date: null
        });
      }
      case 2: {
        setStep(step - 1);
        return setAppointmentDetails({
          ...appointmentDetails,
          date: null
        });
      }
      case 3: {
        return setStep(step - 1);
      }
      default: return;
    }
  };

  /**
   * @schedulingContainer
   * 
   * @description
   * Returns body for the scheduling wizard.
   */
  const schedulingContainer = (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className="pageHeader">Scheduling</h1>
        <Stepper activeStep={step}>
          <Step
            label="Select a Service"
            onClick={() => {
              setStep(0);
              setAppointmentDetails({
                ...appointmentDetails,
                date: null
              });
            }} />
          <Step label="Select a date" onClick={() => {
            setStep(1);
            setAppointmentDetails({
              ...appointmentDetails,
              date: null
            });
          }} />
          <Step label="Additional Information" onClick={() => {
            setStep(2);
          }} />
          <Step label="Review" onClick={() => setStep(3)} />
        </Stepper>
      </div>
      <form className={styles.schedulingBody} onSubmit={ev => ev.preventDefault()}>
        {stepComponent} 
        <div className={styles.buttonBody}>
          <span className={styles.leftAlignedBtn}><button type="submit" onClick={buttonBackHandler}>Back</button></span>
          <span className={styles.rightAlignedBtn}><button type="submit" onClick={buttonContinueHandler}>Continue</button></span>
        </div>
      </form>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      { appointmentSubmit ? <PayDecision appointmentDetails={appointmentDetails} /> : schedulingContainer }
    </React.Fragment>
  );
};

Scheduling.propTypes = {
  location: PropType.object
};

export default Scheduling;
