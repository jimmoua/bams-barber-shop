import React from "react";
import ServiceList from "../ServiceList";
import styles from "../styles/Services.module.css";

function Services() {
  return(
    <div className={styles.servicePage}>
      <h1>Services Offered</h1>
      <ServiceList displayScheduleNow={true}/>
    </div>
  );
}

export default Services;
