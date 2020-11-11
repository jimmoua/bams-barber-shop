import React from "react";
import "../../App.css";
import HomeSection from "../HomeSection";
import OpeningHours from "../OpeningHours";
import FromOwner from "../FromOwner";

function Home() {
  return(
    <>
      <HomeSection/>
      <OpeningHours/>
      <FromOwner/>
    </>
  );
}

export default Home;
