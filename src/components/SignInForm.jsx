import React from "react";
import axios from "axios";
import apiUri from "../api/apiUri";
import styles from "./styles/SignIn.module.css";

/**
 * @function SignIn
 * 
 * @description
 */
const SignInForm = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });

  const [errorMsg, setErrorMsg] = React.useState("");

  /**
   * @function handleFormSubmit
   * 
   * @param {Object} ev is an HTML event coming from onClick
   * 
   * @description
   * Will post to server login information.
   */
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    axios.post(`${apiUri}/api/login`, formData, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    }).then(results => {
      // TODO: login state
      console.log(results.status);
      console.log(results.data);
    }).catch(errors => {
      if(errors.response) {
        switch(errors.response.status) {
          case 401:
            setErrorMsg("Wrong password or username.");
            break;
          case 400:
            setErrorMsg(errors.response.data);
            break;
          default:
            break;
        }
      } else {
        setErrorMsg("Could not reach servers. Please try again later.");
      }
    });
  };

  return(
    <React.Fragment>
      <h1 className={styles.h1}>Employee Login</h1>
      <form onSubmit={ev => handleFormSubmit(ev)}>
        <div className={styles.input}>
          <input
            placeholder="username" 
            name="email"
            onChange={ev => {
              setFormData({ ...formData, email: ev.target.value });
            }}
            required
          />
        </div>

        <div className={styles.input}>
          <input
            type="password" 
            placeholder="password" 
            onChange={ev => {
              setFormData({ ...formData, password: ev.target.value });
            }}
            required
          />
        </div>

        <p>
          {errorMsg.length > 0 ? errorMsg : ""}
        </p>

        <div className={styles.loginAccount}>
          <button type="submit"> Login</button>
        </div>
          
      </form>
    </React.Fragment>
  );
};

export default SignInForm;
