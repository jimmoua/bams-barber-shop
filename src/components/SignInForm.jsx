import React from "react";
import axios from "axios";
import apiUri from "../api/apiUri";
import styles from "./styles/SignIn.module.css";
import { ClipLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import { useStore } from "../store";

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
  const history = useHistory();
  const { dispatch } = useStore();

  /**
   * @function handleFormSubmit
   * 
   * @param {Object} ev is an HTML event coming from onClick
   * 
   * @description
   * Will post to server login information.
   */
  const handleFormSubmit = async(ev) => {
    setBtnClick(true);
    ev.preventDefault();
    let response;
    try {
      response = await axios.post(`${apiUri}/api/login`, formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if(response.status === 200) {
        if(!response.data.ttl) {
          console.error("Error: no ttl was set by the server");
        }
        dispatch({ type: "login", ttl: response.data.ttl });
        return history.push("/");
      }
    } catch(err) {
      console.log(err);
      if(err.response) {
        switch(err.response.status) {
          case 401:
            setErrorMsg("Incorrect credentials");
            break;
          case 400:
            setErrorMsg(response.data);
            break;
          default:
            setErrorMsg(response.data);
        }
      } else {
        setErrorMsg("Could not reach servers. Please try again later.");
      }
    }
    setBtnClick(false);
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
          {errorMsg.length > 0 ? errorMsg : <></>}
        </div>

        <div className={styles.loginAccount}>
          { btnClick ? <ClipLoader/> : <button type="submit"> Login</button> }
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignInForm;
