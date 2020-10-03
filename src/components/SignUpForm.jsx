import React from "react";
import "../App.css";
import "./SignUp.css";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";
import PropTypes from "prop-types";

const SignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form noValidate onSubmit={handleSubmit}>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" 
              className="" 
              placeholder="Enter your email address" 
              name="email"
              value={values.email}
              onChange={handleChange}
              noValidate
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="phone">
            <label htmlFor="phone">Phone</label>
            <input type="tel" 
              className="" 
              placeholder="Enter your phone number" 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" 
              className="" 
              placeholder="Enter a password" 
              name="password"
              value={values.password}
              onChange={handleChange}
              required={true}
              noValidate
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="password2">
            <label htmlFor="password2">Confirm your password</label>
            <input type="password" 
              className="" 
              placeholder="Confirm your password" 
              name="password2"
              value={values.password2}
              onChange={handleChange}
              required={true}
              noValidate
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>

          <div className="createAccount">
            <button type="submit"
              
            > Create an Account</button>

            <Link to ="/Login" style={{ textDecoration: "none" }}>
              <small>Already Have an Account? Log in</small>
            </Link>
          </div>
          
        </form>

      </div>
    </div>
  );
};

SignUp.propTypes = {
  submitForm: PropTypes.func.isRequired
};

export default SignUp;
