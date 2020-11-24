import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  transitions,
  positions,
  Provider as AlertProvider
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Configuration for alert
const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: "100px",
  transition: transitions.SCALE
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);

