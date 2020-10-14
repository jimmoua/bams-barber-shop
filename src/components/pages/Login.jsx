import React from "react";
import "../../App.css";
import SignInForm from "../SignInForm";
import styles from "../styles/SignIn.module.css";

function Login() {
  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <SignInForm />
        </div>
      </div>
    </>
  );
}

export default Login;
