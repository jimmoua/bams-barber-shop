import React from "react";
import FormSuccess from "../FormSuccess";
import PropType from "prop-types";
import PaymentPage from "../PaymentPage";

/**
 * @param {Objectl} appointmentDetails - The style ID that will be used to fetch the price.
 */
const PayDecision = ({ appointmentDetails }) => {

  const [display, setDisplay] = React.useState(
    <React.Fragment>
      <h1>Would you like to pay now?</h1>
      <p>If you plan to pay in person, please select &quot;no&quot;.</p>
      <button type="submit" onClick={handleNoBtnSubmit}>No</button>
      <button type="submit" onClick={handleYesFunction}>Yes</button>
    </React.Fragment>
  );

  /**
   * @function handleNoBtnSubmit
   * 
   * @description
   * If the user clicks "No" button, run this function
   */
  function handleNoBtnSubmit() {
    setDisplay(
      <FormSuccess
        date={new Date(appointmentDetails.date).toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "short"
        })}
      />
    );
  }

  /**
   * @function setDisplayCallback
   */
  function setDisplayCallback() {
    setDisplay(
      <FormSuccess
        date={new Date(appointmentDetails.date).toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "short"
        })}
      />
    );
  }

  /**
   * @function handleYesBtnSubmit
   * 
   * @description
   * If the user clicks "Yes" button, run this function
   */
  function handleYesFunction() {
    setDisplay(
      <PaymentPage price={appointmentDetails.service.price} setDisplayCallback={setDisplayCallback} />
    );
  }

  return (
    display
  );
};

PayDecision.propTypes = {
  appointmentDetails: PropType.object.isRequired
};

export default PayDecision;
