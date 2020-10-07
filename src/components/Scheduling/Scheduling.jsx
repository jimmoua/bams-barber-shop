import React from "react";
import axios from "axios";
import apiUri from "../../api/apiUri";
import { Step, Stepper } from "react-form-stepper";
import ServiceList from "../ServiceList";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../Button";
import styles from "../styles/Scheduling.module.css";

/**
 * @function Scheduling
 * 
 * @description
 * The scheduling component
 * 
 * @returns
 * React stuff
 */
const Scheduling = () => {

  const [serviceList, setServiceList] = React.useState([]);
  const [step, setStep] = React.useState(0);
  const [stepComponent, setStepComponent] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async() => {
      await axios.get(`${apiUri}/api/styles`)
        .then(response => {
          setServiceList(response.data);
        });
    };
    fetchData();
  }, []);

  const renderStep = () => {
    switch(step) {
      case 0:
        return <ServiceList serviceList={serviceList} displayScheduleNow={false} />;
      case 1:
        return <ClipLoader />;
      case 2:
        return <ClipLoader />;
      case 3:
        return <ClipLoader />;
      default:
        return <ClipLoader />;
    }
  };

  const buttonContinueHandler = () => {
    if(step >= 0 && step < 3) {
      setStep(step + 1);
    }
  };
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
        {renderStep()}
      </div>
      <div className={styles.buttonBody}>
        <span className={styles.leftAlignedBtn}><Button onClick={buttonBackHandler}>Back</Button></span>
        <span className={styles.rightAlignedBtn}><Button onClick={buttonContinueHandler}>Continue</Button></span>
      </div>
    </React.Fragment>
  );
};

export default Scheduling;
