import React from "react";
import { checkStorage } from "../../store";

/**
 * @function EmployeeHome
 * 
 * @description
 * The React component for the home page of an emloyee view
 */
const EmployeeHome = () => {
  /**
   * Everytime the component mounts, check the storage for the expiration date.
   * Once the local storage logged in state is removed, the component will
   * re-render.
   */
  React.useEffect(() => {
    checkStorage();
  });

  return (
    <React.Fragment>
      <h1>Employee Homepage</h1>
    </React.Fragment>
  );
};

export default EmployeeHome;
