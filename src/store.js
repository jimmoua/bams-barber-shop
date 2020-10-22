import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import logoutFn from "./api/logout";

const StoreContext = createContext();
const initialState = { loggedIn: localStorage.getItem("loggedIn") ? true : false };

const reducer = (state, action) => {
  switch(action.type) {
    case "login":
      localStorage.setItem("loggedIn", JSON.stringify({
        expiresAt: action.ttl
      }));
      return {
        loggedIn: true
      };
    case "logout":
      logoutFn();
      localStorage.removeItem("loggedIn");
      return {
        loggedIn: false
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

/**
 * @function checkStorage
 * 
 * @description
 * Checks local storage to see if loggedIn has expired. If it has, remove it
 * and go to the home page. This will allow for the applicaiton to remount itself.
 * 
 * We will want to call this function on every component mount that the user is logged into.
 */
export function checkStorage() {
  let expiresAt;
  try {
    expiresAt = JSON.parse(localStorage.getItem("loggedIn")).expiresAt;
  } catch( error ) {
    localStorage.removeItem("loggedIn");
    alert("Could not parse expiresAt in localStorage");
    logoutFn();
    return window.location.replace("/login");
  }
  if(expiresAt) {
    if( new Date().getTime() > expiresAt ) {
      localStorage.removeItem("loggedIn");
      window.location.replace("/login");
    }
  }
}

StoreProvider.propTypes = {
  children: PropTypes.any
};
