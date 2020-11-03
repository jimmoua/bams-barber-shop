import "react-square-payment-form/lib/default.css";
import PropType from "prop-types";
import { ClipLoader } from "react-spinners";
import { createPayment } from "../api/payment";

import React, { useState } from "react";

import {
  SquarePaymentForm,
  CreditCardCVVInput,
  CreditCardExpirationDateInput,
  CreditCardNumberInput,
  CreditCardPostalCodeInput,
  CreditCardSubmitButton
} from "react-square-payment-form";
import "react-square-payment-form/lib/default.css";

/**
 * @function determineAppId
 * 
 * @description
 * Returns Square Application ID based on environment.
 */
const determineAppId = () => {
  if(process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_SQUARE_APPLICATION_ID_PRODUCTION;
  }
  return process.env.REACT_APP_SQUARE_APPLICATION_ID_STAGING;
};

/**
 * @function determineLocationId
 * 
 * @description
 * Returns Square Location ID based on environment.
 */
const determineLocationId = () => {
  if(process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_SQUARE_LOCATION_ID_PRODUCTION;
  }
  return process.env.REACT_APP_SQUARE_LOCATION_ID_STAGING;
};

const APPLICATION_ID = determineAppId();
const LOCATION_ID = determineLocationId();

/**
 * @function PaymentPage
 * 
 * @param {Object} appointmentDetails - Appointment details contain the appointment details, which contain price.
 * @param {Funtion} setDisplayCallback - function to set the display component after a successful payment.
 * 
 * @description
 * Returns React content for the Square payment stuff.
 */
const PaymentPage = ({ appointmentDetails, setDisplayCallback }) => {
  const [errorMessages, setErrorMessages] = useState([]);
  const [paymentSubmit, setPaymentSubmit] = useState(false);

  /**
   * @function cardNonceResponseReceived
   * 
   * @description
   * this function is required for all features and is invoked with payment
   * form receives result of nonce generation
   * 
   * @param {Array} errors - self explanatory
   * @param {String} nonce  - nonce that is generated to send to the backend for Square payment
   */
  function cardNonceResponseReceived(errors, nonce) {
    setPaymentSubmit(true);
    if (errors) {
      console.log(errors);
      setErrorMessages(errors.map(error => error.message));
      setPaymentSubmit(false);
      return;
    }

    setErrorMessages([]);

    createPayment(nonce, appointmentDetails)
      .then(response => {
        if(response.errors) {
          setErrorMessages(["Unable to complete transaction. Please see below: ", ...response.errors.map(e => e.code)]);
          setPaymentSubmit(false);
        } else {
          return setDisplayCallback();
        }
      }).catch(err => {
        console.error(err);
        setPaymentSubmit(false);
      });
  }

  /**
   * @function createPaymentRequest
   *
   * @description
   * Invoked when digital wallet payment button is pressed.
   */
  function createPaymentRequest() {
    return {
      requestShippingAddress: false,
      requestBillingInfo: true,
      currencyCode: "USD",
      countryCode: "US",
      total: {
        label: "Bam's Barber Shop",
        amount: appointmentDetails.service.price.toString(),
        pending: false
      },
      lineItems: [
        {
          label: "Subtotal",
          amount: appointmentDetails.service.price.toString(),
          pending: false
        }
      ]
    };
  }

  /**
   * @function submitPayButton
   * 
   * @description
   * Determines whether to render the Square submit button or a spinner.
   * 
   * Return the spinner if they have decided to pay, and a nonce has been generated.
   */
  const submitPayButton = () => {
    if(paymentSubmit) {
      return (
        <ClipLoader />
      );
    }
    return (
      <CreditCardSubmitButton>Pay ${appointmentDetails.service.price}</CreditCardSubmitButton>
    );
  };

  return (
    <SquarePaymentForm
      formId="squarePaymentForm"
      sandbox={process.env.NODE_ENV === "production" ? false : true}
      applicationId={APPLICATION_ID}
      locationId={LOCATION_ID}
      cardNonceResponseReceived={cardNonceResponseReceived}
      createPaymentRequest={createPaymentRequest}
      focusField={() => { return "cardNumber"; }}
    >
      <fieldset className="sq-fieldset">
        <CreditCardNumberInput />

        <div className="sq-form-third">
          <CreditCardExpirationDateInput />
        </div>

        <div className="sq-form-third">
          <CreditCardPostalCodeInput />
        </div>

        <div className="sq-form-third">
          <CreditCardCVVInput />
        </div>
      </fieldset>

      { submitPayButton() }

      <div className="sq-error-message">
        {errorMessages.map(errorMessage => (
          <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
        ))}
      </div>
    </SquarePaymentForm>
  );
};

PaymentPage.propTypes = {
  appointmentDetails: PropType.object.isRequired,
  setDisplayCallback: PropType.func.isRequired
};

export default PaymentPage;
