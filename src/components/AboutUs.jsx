import React from "react";
import "./styles/AboutUs.css";

function AboutUs() {
  return(
    <div className="container">
      <div className="leftComponent">
        <h1>Contact Us :</h1>
        
        <p><i className="fa fa-map-marker"></i>: 600 Main St, K</p>
        <p> HOT SPRINGS,AT 71913-8996</p>
        <p><i className="fa fa-envelope"></i>: bamsbarbershop1@gmail.com</p>
        <p><i className="fa fa-phone"></i>: (501) 318-3142)</p>
       
      </div>

      <div className="rightComponent">
        <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.5848441089565!2d-93.07820148537603!3d34.488054602086095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cd2ac0ea0ddeff%3A0xbb4dbf3e79080fb1!2s600%20Main%20St%2C%20Hot%20Springs%2C%20AR%2071913!5e0!3m2!1sen!2sus!4v1605649719279!5m2!1sen!2sus" width="600" height="300" frameBorder="0" style={{ border:0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    </div>
  );
}

export default AboutUs;
