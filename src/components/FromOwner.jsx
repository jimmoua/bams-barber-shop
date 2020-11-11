import React from "react";
import styles from "./styles/FromOwner.module.css";

function FromOwner() {
  return (
    <div className = {styles.FromOwner}>

      <div className ={styles.OwnerImage}></div>
      <img className={styles.image} src="owner.jpg" alt="owner"/>
      <div className={styles.OwnerComment}>
        <h1>From The Owner</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate suscipit imperdiet. Donec vulputate odio vel turpis ullamcorper, in auctor tortor bibendum. Pellentesque ac porttitor lorem, at placerat tellus. Pellentesque laoreet, ligula et sollicitudin pharetra, metus justo laoreet massa, non rutrum risus diam at leo. Etiam non elementum mi. Suspendisse et accumsan lectus. Sed eleifend mi vestibulum auctor venenatis. Nam nisi erat, accumsan sed metus ut, mattis fringilla sem. Phasellus quis volutpat tortor. Phasellus non neque vitae ligula mollis malesuada. Quisque tincidunt vestibulum venenatis. Donec imperdiet molestie blandit. Aenean venenatis nunc vitae tellus finibus, sit amet imperdiet augue efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare diam eget tellus euismod, ac fringilla risus lacinia. Mauris scelerisque ultrices massa quis rhoncus.</p>
      </div>
    </div>
    
  );
}
export default FromOwner;
