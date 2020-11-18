import React from "react";
import styles from "./styles/ImageDisplay.module.css" ;
import { Link } from "react-router-dom";

function ImageDisplay() {
  return(
    <div className={styles.container}>
      <h1>Our Works</h1>
      <div className={styles.firstRow}>
        <div> <img src="gallery/1.jpg" alt="image1" height="200px" width="190px"></img></div>
        <div><img src="gallery/6.jpg" alt="image1" height="200px" width="190px"></img></div>
        <div><img src="gallery/3.jpg" alt="image1" height="200px" width="190px"></img></div>
        <div><img src="gallery/7.jpg" alt="image1" height="200px" width="190px"></img></div>
        <div><img src="gallery/5.jpg" alt="image1" height="200px" width="190px"></img></div>
      </div>
      <div className={styles.buttonBody}>
        <Link to="/gallery" >
          <button>See More</button> 
        </Link>
      </div>
    </div>
  );
}

export default ImageDisplay;