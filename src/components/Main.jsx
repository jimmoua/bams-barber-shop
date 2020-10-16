import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Scheduling from "./Scheduling/Scheduling";
import Gallery from "./Gallery/Gallery";

const Main = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/scheduling" component={Scheduling}/>
      <Route exact path="/gallery" component={Gallery}/>
    </React.Fragment>
  );
};

export default Main;
