import React, { useState } from "react";
import "../../App.css";
import SignUp from "../SignUp";
import FormSuccess from "../FormSuccess";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return(
    <>
      {!isSubmitted ? <SignUp submitForm=
        {submitForm}/> : <FormSuccess/>}
    </>
  );
};

export default Register;
