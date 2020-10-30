import "react-square-payment-form/lib/default.css";
import PropType from "prop-types";
import { ClipLoader } from "react-spinners";

import React, { useState } from "react";

import {
  SquarePaymentForm,
  ApplePayButton,
  CreditCardCVVInput,
  CreditCardExpirationDateInput,
  CreditCardNumberInput,
  CreditCardPostalCodeInput,
  CreditCardSubmitButton,
  GooglePayButton,
  MasterpassButton
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
 * @param {Number} price - Price of the style to pay
 * 
 * @description
 * Returns React content for the Square payment stuff.
 */
const PaymentPage = ({ price }) => {
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
   * @param {Object} cardData  - Object containing card information (last four digits, etc)
   * @param {*} buyerVerificationToken 
   */
  function cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken) {
    setPaymentSubmit(true);
    if (errors) {
      setErrorMessages(errors.map(error => error.message));
      setPaymentSubmit(false);
      return;
    }

    setErrorMessages([]);

    // TODO: implemente backend with nonce
    console.log(`nonce created: ${nonce}`);
    console.log(`buyfer id: ${buyerVerificationToken}`);
    // API.post('/payments', data: { nonce: nonce, buyerVerificationToken: buyerVerificationToken }) // implement this
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
        amount: "1",
        pending: false
      },
      lineItems: [
        {
          label: "Subtotal",
          amount: "1",
          pending: false
        }
      ]
    };
  }

  const loadingView = <div className="sq-wallet-loading"></div>;
  const unavailableApple = (
    <div className="sq-wallet-unavailable">Apple pay unavailable. Open safari on desktop or mobile to use.</div>
  );
  const unavailableGoogle = <div className="sq-wallet-unavailable">Google pay unavailable.</div>;
  const unavailableMasterpass = <div className="sq-wallet-unavailable">Masterpass unavailable.</div>;

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
      <CreditCardSubmitButton>Pay ${price}</CreditCardSubmitButton>
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
      <ApplePayButton loadingView={loadingView} unavailableView={unavailableApple} />
      <GooglePayButton loadingView={loadingView} unavailableView={unavailableGoogle} />
      <MasterpassButton loadingView={loadingView} unavailableView={unavailableMasterpass} />

      <div className="sq-divider">
        <span className="sq-divider-label">Or</span>
        <hr className="sq-divider-hr" />
      </div>

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
  price: PropType.number
};

export default PaymentPage;
