import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/SignInForm";
import { Component404 } from "./components/pages/ErrorPages";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Main />
          <Route component={Component404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
