import React from "react";
import "../App.css";
import {
  Link
} from "react-router-dom";

function SignIn() {
  return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>SIGN IN</h1>
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

           

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" 
              className="" 
              placeholder="Enter a password" 
              name="password"
              noValidate
            />
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
}

export default SignIn;
