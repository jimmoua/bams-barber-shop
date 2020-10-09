import React from "react";
import styles from "./styles/OpeningHours.module.css";

function OpeningHours() {
  return(
    <div>
      <div className={styles.sign}>
        <span className={styles.fastFlicker}>BAMS</span>BARBER<span className={styles.flicker}>SHOP</span>
      </div>
    </div>

  );
}

export default OpeningHours;