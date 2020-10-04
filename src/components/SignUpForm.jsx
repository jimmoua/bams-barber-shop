import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import apiUri from "../helpers/apiUri";
import PropTypes from "prop-types";
import "../App.css";
import "./SignUp.css";

/**
 * @function SignUpForm
 * 
 * @description
 * The form for registering
 */
const SignUpForm = ({ submitForm }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password1: "",
    password2: "",
    phoneNum: ""
  });

  /**
   * @constant formErrors
   * 
   * @description
   * Denotes which input in the forms are no valid. Is the flag is set to true,
   * the input for the form is not valid.
   */
  const formErrors = {
    email: false,
    password: false,
    phone: false
  };

  /**
   * @constant [errorMsg, setErrorMsg]
   * 
   * @description
   * React state denoting the error message to display upon form submission.
   */
  const [errorMsg, setErrorMsg] = React.useState("");

  /**
   * @function checkForErrors
   * 
   * @description
   * Validates our form data
   */
  const checkForErrors = () => {
    formErrors.email = !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email);
    formErrors.password = formData.password1 !== formData.password2;
    formErrors.phone = formData.phoneNum.length !== 10 && formData.phoneNum.length !== 0;
  };

  /**
   * @function handleSubmitForm
   * 
   * @param {Object} ev denotes the event for the HTML form submit.
   * 
   * @description
   * Validates our form data first by calling checkForErrors. If there are
   * errors, set the message.
   * 
   * If there are no validation errors, POST the data to the server. If errors
   * come from the server, set the error message the server gives us or set the
   * error message based on the HTTP status code.
   */
  const handleSubmitForm = async(ev) => {
    ev.preventDefault();
    checkForErrors();
    let noErrors = true;
    for (const [key, value] of Object.entries(formErrors)) {
      if(value) {
        noErrors = false;
        switch(key) {
          case "email":
            setErrorMsg("Email is not valid.");
            break;
          case "password":
            setErrorMsg("Passwords do not match.");
            break;
          case "phone":
            setErrorMsg("Phone format is not valid.");
            break;
          default:
            console.log("foo");
        }
      }
    }
    if(noErrors) {
      await axios.post(`${apiUri}/api/register`, formData)
        .then(() => {
          submitForm();
        }).catch(err => {
          if(err.response) {
            switch(err.response.status) {
              case 409:
                setErrorMsg("A user with that email already exists!");
                break;
              case 500:
                setErrorMsg("Something went wrong. Please refresh the page or try again later.");
                break;
              case 400:
                setErrorMsg(err.response.data.msg);
                break;
              default:
                break;
            }
          } else {
            setErrorMsg("An error occurred. Please try again later.");
          }
        });
    }
  };

  return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form onSubmit={ev => {
          handleSubmitForm(ev);
        }}>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" 
              className="" 
              placeholder="Enter your email address" 
              name="email"
              value={formData.email}
              onChange={ev => {
                setFormData({ ...formData, email: ev.target.value });
              }}
              required
            />
          </div>

          <div className="phone">
            <label htmlFor="phone">Phone</label>
            <input type="tel" 
              className="" 
              placeholder="Enter your phone number" 
              name="phone"
              onChange={ev => {
                setFormData({ ...formData, phoneNum: ev.target.value });
              }}
              value={formData.phone}
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password" 
              placeholder="Enter a password" 
              name="password1"
              value={formData.password}
              onChange={ev => {
                setFormData({ ...formData, password1: ev.target.value });
              }}
              required
            />
          </div>

          <div className="password2">
            <label htmlFor="password2">Confirm your password</label>
            <input
              type="password" 
              placeholder="Confirm your password" 
              name="password2"
              onChange={ev => {
                setFormData({ ...formData, password2: ev.target.value });
              }}
              value={formData.password2}
              required
            />
          </div>

          <p>
            { errorMsg }
          </p>

          <div className="createAccount">
            <button type="submit">Create an Account</button>

            <Link to ="/Login" style={{ textDecoration: "none" }}>
              <small>Already Have an Account? Log in</small>
            </Link>
          </div>
        </form>

      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  submitForm: PropTypes.func.isRequired
};

export default SignUpForm;
