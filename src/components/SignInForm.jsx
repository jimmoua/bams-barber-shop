import React from "react";
import axios from "axios";
import apiUri from "../api/apiUri";
import styles from "./styles/SignIn.module.css";
import { ClipLoader } from "react-spinners";

/**
 * @function SignIn
 * 
 * @description
 */
const SignInForm = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = React.useState("");
  const [btnClick, setBtnClick] = React.useState(false);

  /**
   * @function handleFormSubmit
   * 
   * @param {Object} ev is an HTML event coming from onClick
   * 
   * @description
   * Will post to server login information.
   */
  const handleFormSubmit = (ev) => {
    setBtnClick(true);
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
            setErrorMsg(errors.response.data);
            break;
        }
      } else {
        setErrorMsg("Could not reach servers. Please try again later.");
      }
    }).finally(() => {
      setBtnClick(false);
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
              setFormData({ ...formData, username: ev.target.value });
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

        <div className={styles.err}>
          {errorMsg.length > 0 ? errorMsg : ""}
        </div>

        <div className={styles.loginAccount}>
          { btnClick ? <ClipLoader/> : <button type="submit"> Login</button> }
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignInForm;
