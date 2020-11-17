import React from "react";
import "../../App.css";
import HomeSection from "../HomeSection";
import OpeningHours from "../OpeningHours";
import ImageDisplay from "../ImageDisplay";
import AboutUs from "../AboutUs";

function Home() {
  return(
    <>
      <HomeSection/>
      <OpeningHours/>
      <ImageDisplay/>
      <AboutUs/>
    </>
  );
}

export default Home;
