import React from "react";
import AlertMessage from "../AlertMessage";

export const Component404 = () => {
  const [status, setStatusBase] = React.useState("");
  const submitLoginForm = async() => {
    setStatusBase({ msg: "Success", key: Math.random() });
  };
  return (
    <center>
      <h1>404 - Not Found</h1>
      <button onClick={submitLoginForm}>Submit</button>
      {status ? <AlertMessage key={status.key} message={status.msg} /> : null}
    </center>
  );
};
