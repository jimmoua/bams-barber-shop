import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./SignIn.css";

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

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    alert(`${formData.email} ${formData.password}`);
  };

  return(
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>SIGN IN</h1>
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
            />
          </div>

          <div className="loginAccount">
            <button type="submit"> Login</button>
            <Link to ="/register" style={{ textDecoration: "none" }}>
              <small>Don&apos;t Have an account? Sign up</small>
            </Link>
          </div>
          
        </form>

      </div>
    </div>
  );
};

export default SignInForm;
