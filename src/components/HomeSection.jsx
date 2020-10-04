import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HomeSection.css" ;

function HomeSection() {
  return (
    <div className="home-container">
            
      <h1>BAMS BARBER SHOP</h1>
      <p>Come for the freshest trims!!</p>
      <div className="home-btns">
        <Button 
          className="btns"
          buttonStye="btn--outline"
          buttonSize="btn--large"
          linkTo="/register"
        >
          BOOK AN APPOINTMENT
        </Button>
      </div>
    </div>
        
  );
}
export default HomeSection;
