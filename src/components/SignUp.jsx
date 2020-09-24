import React from "react";
import "../App.css";
import "./SignUp.css";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";



// eslint-disable-next-line react/prop-types
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
          
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input type="text" 
              className="" 
              placeholder="First Name" 
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              noValidate/>
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" 
              className="" 
              placeholder="Last Name" 
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              noValidate
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>

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

          <div className="password1">
            <label htmlFor="password1">Password</label>
            <input type="password" 
              className="" 
              placeholder="Enter a password" 
              name="password1"
              value={values.password}
              onChange={handleChange}
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


export default SignUp;
