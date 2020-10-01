import React from "react";
import "./SignIn.css";
import "../App.css";

const Scheduling = () => {

  const handleSubmit = async(e) => {
    e.preventDefault();
  };

  return (   
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Schedule an Appointment</h1>
        <form noValidate onSubmit={handleSubmit}>
        
          <div className="date">
            <label htmlFor="date">Date: </label>
            <input type="date" 
              className="" 
              placeholder="Pick an appointment date" 
              name="date"
              noValidate
            />
          </div>

          <div className="time">
            <label htmlFor="time">Time: </label>
            <input type="time" 
              className="" 
              placeholder="Choose a time" 
              name="time"
              noValidate
            />
         
          </div>

          <div className="loginAccount">
            <button type="submit"> Confirm</button>
          
          </div>
        
        </form>

      </div>
    </div>
        
  );
};
export default Scheduling;
