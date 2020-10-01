import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom" ;

function FormSuccess() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h3>Thank you for joining us!</h3>
        <img className="form-image" src="formsuccess.jpg" alt="form-success"/>
        <Link to ="/Login" style={{ textDecoration: "none" }}>
          <div className="gotologin">
          
            <button type="submit"> Go To Login</button>
          
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FormSuccess;