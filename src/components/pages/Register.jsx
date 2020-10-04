import React, { useState } from "react";
import "../../App.css";
import SignUpForm from "../SignUpForm";
import FormSuccess from "../FormSuccess";

/**
 * @function Register
 * 
 * @description
 * Returns the SignUpForm component if the user has not submitted the form. If the
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
      { !isSubmitted ? <SignUpForm submitForm={submitForm} /> : <FormSuccess /> }
    </>
  );
};

export default Register;
