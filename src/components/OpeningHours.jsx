import React from "react";
import "../App.css";
import styles from "./styles/OpeningHours.module.css" ;

function OpeningHours() {
  return (
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
  );
}

export default OpeningHours;
