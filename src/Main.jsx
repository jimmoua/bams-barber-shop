import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Scheduling from "./components/Scheduling/Scheduling";
import Gallery from "./components/Gallery/Gallery";
import { Component404 } from "./components/pages/ErrorPages";
import { useStore } from "./store";
import Navbar from "./components/Navbar";
import EmployeeMain from "./components/Employee/EmployeeMain";

const Main = () => {
  const { state } = useStore();
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={state.loggedIn ? EmployeeMain : Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/scheduling" component={Scheduling}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/login" component={Login} />
        <Route component={Component404} />
      </Switch>
    </Router>
  );
};

export default Main;
