import React from "react";
import axios from "axios";

/**
 * @function Foo is a dummy component used for manual testing
 */
const Foo = () => {
  const [header, setHeader] = React.useState("");

  return(
    <React.Fragment>
      <center>
        <h1>{header}</h1>
        <br/>
        <button type="submit"
          onClick={async(e) => {
            e.preventDefault();
            const data = await axios.get("http://localhost:5000");
            setHeader(data.data.message);
          }}
        >
        Click me!
        </button>
      </center>
    </React.Fragment>
  );
};

export default Foo;
