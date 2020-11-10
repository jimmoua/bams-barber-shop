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
        <div className={styles.OpeningTime}>
          <h1>Opening Hours</h1>
          <table>
            <tbody>
              <tr><th>Sunday: </th><td>Closed</td></tr>
              <tr><th>Monday: </th><td>Closed</td></tr>
              <tr><th>Tuesday: </th><td>9am - 6pm</td></tr>
              <tr><th>Wednesday: </th><td>9am - 6pm</td></tr>
              <tr><th>Thursday:</th><td>9am - 6pm</td></tr>
              <tr><th>Friday:</th><td>9am - 6pm</td></tr>
              <tr><th>Saturday:</th><td>9am - 3pm</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        
  );
}
export default HomeSection;
