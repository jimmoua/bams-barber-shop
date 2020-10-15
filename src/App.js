import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import { Component404 } from "./components/pages/ErrorPages";
import Scheduling from "./components/Scheduling/Scheduling";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/scheduling" component={Scheduling}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route component={Component404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
