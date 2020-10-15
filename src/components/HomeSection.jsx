import React from "react";
import "../App.css";
import Button from "./Button";
import styles from "./styles/HomeSection.module.css" ;

function HomeSection() {
  return (
    <div className={styles.homeContainer}>
            
      <h1>BAMS BARBER SHOP</h1>
      <p>Come for the freshest trims!!</p>
      <div className={styles.homeBtns}>
        <Button 
          className="btns"
          buttonStye="btn--outline"
          buttonSize="btn--large"
          linkTo="/scheduling"
        >
          BOOK AN APPOINTMENT
        </Button>
      </div>
    </div>
        
  );
}
export default HomeSection;
