import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Component404 from "./components/404/404";
import Foo from "./components/component_testers/cors";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route exact path="/foo" component={Foo} />
          <Route component={Component404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
