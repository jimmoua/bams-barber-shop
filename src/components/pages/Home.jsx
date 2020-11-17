import React from "react";
import "../../App.css";
import HomeSection from "../HomeSection";
import OpeningHours from "../OpeningHours";
import ImageDisplay from "../ImageDisplay";

function Home() {
  return(
    <>
      <HomeSection/>
      <OpeningHours/>
      <ImageDisplay/>
    </>
  );
}

export default Home;
