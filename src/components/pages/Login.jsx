import React from "react";
import "../../App.css";
import SignInForm from "../SignInForm";

function Login() {
  return(
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <SignInForm />
        </div>
      </div>
    </>
  );
}

export default Login;
