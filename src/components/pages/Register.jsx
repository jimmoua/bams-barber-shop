import React, { useState } from "react";
import "../../App.css";
import SignUp from "../SignUp";
import FormSuccess from "../FormSuccess";

/**
 * @function Register
 * 
 * @description
 * Returns the SignUp component if the user has not submitted the form. If the
 * sign up form has been submitted, return the FormSuccess component.
 */
const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * @function submitForm
   * 
   * @description
   * Sets the state isSubmit to true
   */
  function submitForm() {
    setIsSubmitted(true);
  }

  return(
    <>
      { !isSubmitted ? <SignUp submitForm={submitForm}/> : <FormSuccess /> }
    </>
  );
};

export default Register;
