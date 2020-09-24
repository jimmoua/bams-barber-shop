import React from "react";
import "../App.css";
import "./SignIn.css";
import { Link } from "react-router-dom";
import useFormSignIn from "./useFormSignIn";
import validate from "./validateInfoSignIn";


// eslint-disable-next-line react/prop-types
const SignIn = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useFormSignIn(
    submitForm,
    validate
  );
  return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>SIGN IN</h1>
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

           

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" 
              className="" 
              placeholder="Enter a password" 
              name="password"
              value={values.password}
              onChange={handleChange}
              noValidate
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="loginAccount">
            <button type="submit"> Login</button>
            <Link to ="/Register" style={{ textDecoration: "none" }}>
              <small>Dont Have an account? Sign up</small>
            </Link>
          </div>
          
        </form>

      </div>
    </div>
  );
};

export default SignIn;
