import React from "react";
import PriceList from "../PriceList";
import styles from "../styles/Services.module.css";

function Services() {
  return(
    <div className={styles.servicePage}>
      <PriceList />
    </div>
  );
}

export default Services;
