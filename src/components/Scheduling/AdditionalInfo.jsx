import React from "react";
import styles from "../styles/AdditionalInfo.module.css";

const AdditionalInfo = () => {
  return(
    <React.Fragment>
      <div className={styles.textarea}>
        <form action="/form/submit" > 
          <textarea name="comment" rows="12" cols="35" placeholder="Any Additional Requests"/> <br></br>
          <input type="submit" name="submitInfo" value="Submit"></input>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AdditionalInfo;