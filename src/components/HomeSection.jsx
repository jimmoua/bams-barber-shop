import React from "react";
import "../App.css";
import Button from "./Button";
import styles from "./styles/HomeSection.module.css" ;

function HomeSection() {
  return (
    <div>
      <div className={styles.homeContainer}>
            
        <h1>BAMS BARBER SHOP</h1>
        <p><i className="fa fa-large fa-phone" aria-hidden="true"></i> :501-318-3142</p>
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
      <div className={styles.OpeningHourBody}>
        <div className={styles.sign}>
          <span className={styles.fastFlicker}>BAMS</span>BARBER<span className={styles.flicker}>SHOP</span>
        </div>
      </div>
    </div>
        
  );
}
export default HomeSection;
