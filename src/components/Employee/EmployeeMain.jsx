import React from "react";
import { useStore } from "../../store";

const EmployeeMain = () => {
  const { state } = useStore();
  return (
    <React.Fragment>
      {state.currentEmployeeComponent}
    </React.Fragment>
  );
};

export default EmployeeMain;
