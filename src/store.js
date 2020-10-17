import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

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
 */
export function checkStorage() {
  const { expiresAt } = JSON.parse(localStorage.getItem("loggedIn"));
  if(expiresAt) {
    if( new Date().getTime() > expiresAt ) {
      localStorage.removeItem("loggedIn");
      window.location.replace("/");
    }
  }
}

StoreProvider.propTypes = {
  children: PropTypes.any
};
