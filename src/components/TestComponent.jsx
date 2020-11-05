import React from "react";
import AppointmentLookup from "./pages/AppointmentLookup";

const TestComponent = () => {
  const [testComponent, setTestComponent] = React.useState(
    <React.Fragment>
      <h1>Component Test Links</h1>
      <button onClick={() => setTestComponent(AppointmentLookup)}>Appointment Lookup</button>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {testComponent}
    </React.Fragment>
  );
};

export default TestComponent;
