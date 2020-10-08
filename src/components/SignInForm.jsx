import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUri from "../api/apiUri";
import "../App.css";
import "./styles/SignIn.css";

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
      <h1>Sign in</h1>
      <form onSubmit={ev => handleFormSubmit(ev)}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email" 
            placeholder="Enter your email address" 
            name="email"
            onChange={ev => {
              setFormData({ ...formData, email: ev.target.value });
            }}
            required
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password" 
            placeholder="Enter a password" 
            name="password"
            onChange={ev => {
              setFormData({ ...formData, password: ev.target.value });
            }}
            required
          />
        </div>

        <p>
          {errorMsg.length > 0 ? errorMsg : ""}
        </p>

        <div className="loginAccount">
          <button type="submit"> Login</button>
          <Link to ="/register" style={{ textDecoration: "none" }}>
            <small>Don&apos;t Have an account? Sign up</small>
          </Link>
        </div>
          
      </form>
    </React.Fragment>
  );
};

export default SignInForm;
