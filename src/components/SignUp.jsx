import React from "react";
import "../App.css";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form noValidate >

          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" 
              className="" 
              placeholder="Enter your email address" 
              name="email"
              noValidate
            />
          </div>

          <div className="phone">
            <label htmlFor="phone">Phone</label>
            <input type="tel" 
              className="" 
              placeholder="Enter your phone number (optional)" 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" 
              className="" 
              placeholder="Enter a password" 
              name="password"
              noValidate
            />
          </div>

          <div className="createAccount">
            <button type="submit"> Create an Account</button>
            <Link to ="/Login" style={{ textDecoration: "none" }}>
              <small>Already Have an Account? Log in</small>
            </Link>
          </div>
          
        </form>

      </div>
    </div>
  );
}


export default SignUp;
