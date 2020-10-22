import React from "react";
import axios from "axios";
import apiUri from "../../api/apiUri";
import { Step, Stepper } from "react-form-stepper";
import ServiceList from "../ServiceList";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../Button";
import styles from "../styles/Scheduling.module.css";
import DatePicker from "./DatePicker";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";

/**
 * @function Scheduling
 * 
 * @description
 * The scheduling component. This component contains a plethora of other components.
 * 
 * @returns
 * React stuff
 */
const Scheduling = () => {

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

  React.useEffect(() => {
    // Define a function to fetch the data from our API
    const fetchData = async() => {
      await axios.get(`${apiUri}/api/styles`)
        .then(response => {
          setServiceList(response.data);
        });
    };

    // TODO: replace with their appropriate components later.
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
      <Review appointmentDetails={appointmentDetails} key={3} />
    ];

    // Determine the which component to render based on which step we are in.
    setStepComponent(stepComponentMap[step]);

    // This conditional if should allow us to perform the fetch just once.
    // Otherwise, we will be infinitely looping the useEffect.
    if(!serviceList) {
      fetchData();
    }
  }, [serviceList, step, appointmentDetails]);

  /**
   * @function buttonContinueHandler
   * 
   * @description
   * Handles the actions for when the continue button is pressed
   */
  const buttonContinueHandler = () => {
  
    if(step == 1 && appointmentDetails.date != null) {
      if(step >= 0 && step < 3 ) {
        setStep(step + 1);
      }
    }
    
    else if(step <= 0 ) {
      setStep(step + 1);
    }
  };

  /**
   * @function buttonBackHandler
   * 
   * @description
   * Handles the action for when the back button is pressed
   */
  const buttonBackHandler = () => {
    if(step > 0 && step < 4) {
      setStep(step - 1);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className="pageHeader">Scheduling</h1>
        <Stepper activeStep={step} >
          <Step label="Select a Service" onClick={() => setStep(0)} />
          <Step label="Select a date" onClick={() => setStep(1)} />
          <Step label="Additional Information" onClick={() => setStep(2)} />
          <Step label="Review" onClick={() => setStep(3)} />
        </Stepper>
      </div>
      <div className={styles.schedulingBody}>
        {stepComponent}
      </div>
      <div className={styles.buttonBody}>
        <span className={styles.leftAlignedBtn}><Button onClick={buttonBackHandler}>Back</Button></span>
        <span className={styles.rightAlignedBtn}><Button onClick={buttonContinueHandler}>Continue</Button></span>
      </div>
    </React.Fragment>
  );
};

export default Scheduling;
