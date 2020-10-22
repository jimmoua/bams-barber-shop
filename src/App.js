import React from "react";
import { StoreProvider } from "./store";
import Main from "./Main";
import "./App.css";

const App = () => {
  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
};

export default App;
