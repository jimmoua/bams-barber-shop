import React from "react";
import { useStore, checkStorage } from "../../store";
import { useHistory } from "react-router-dom";

const EmployeeHome = () => {
  const { dispatch } = useStore();
  const history = useHistory();
  React.useEffect(() => {
    checkStorage();
  });
  return (
    <React.Fragment>
      <h1>Employee Homepage</h1>
      <button
        onClick={() => {
          dispatch({ type: "logout" });
          history.push("/");
        }}
      >
        Logout
      </button>
    </React.Fragment>
  );
};

export default EmployeeHome;
