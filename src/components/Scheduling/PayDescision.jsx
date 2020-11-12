import React from "react";
import FormSuccess from "../FormSuccess";
import PropType from "prop-types";
import PaymentPage from "../PaymentPage";
import styles from "../styles/PayDecision.module.css" ;

/**
 * @param {Objectl} appointmentDetails - The style ID that will be used to fetch the price.
 */
const PayDecision = ({ appointmentDetails }) => {

  const [display, setDisplay] = React.useState(
    <React.Fragment>

      <div className={styles.PaymentOption}>
        <h1> Choose a Payment Option</h1>
        <div className={styles.wrapper}>
          <div className={styles.CashOption}>
            <h1>Pay with Cash</h1>
            <div className={styles.imgContainer}>
              <img className={styles.formImage} src="cash.png" alt="cash-icon"/>
            </div>
            <div className={styles.button}>
              <button type="submit" onClick={handleNoBtnSubmit}>Pay by Cash</button>
            </div>
          </div>
          <div className={styles.CardOption}>
            <h1>Pay with Card</h1>
            <div className={styles.imgContainer}>
              <img className={styles.formImage} src="card.png" alt="card-icon"/>
            </div>
            <div className={styles.button}>

              <button type="submit" onClick={handleYesFunction}>Pay by Card</button> 
            </div>  
          </div>
        </div>
      </div>
     
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
      <PaymentPage appointmentDetails={appointmentDetails} setDisplayCallback={setDisplayCallback} />
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
