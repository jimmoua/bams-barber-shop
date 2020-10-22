import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import sendUpdate from "../../api/sendUpdate";
import { ClipLoader } from "react-spinners";
import { useStore } from "../../store";
import EditStylesPage from "./EditStylesPage";

/**
 * @param {Object} style The style of the haircut
 */
const EditStyle = ({ style }) => {
  const [formStyle, setFormStyle] = React.useState(style);
  const [isSubmitting, setSubmit] = React.useState(false);
  const { dispatch } = useStore();

  const buttons = () => {
    if(isSubmitting) {
      return <ClipLoader />;
    }
    return (
      <React.Fragment>
        <Button
          onClick={() => alert("delete c:")}
        >
          Delete
        </Button>
        <Button
          onClick={async() => {
            setSubmit(true);
            const status = await sendUpdate(formStyle);
            if(status === 200) {
              alert(`Style ${formStyle.name} has been updated.`);
              return dispatch({ type: "setEmployeeComponent", component: <EditStylesPage /> });
            } else {
              alert(`Error: style ${formStyle.name} could not be updated.`);
            }
            setSubmit(false);
          }}
        >
          Update
        </Button>
      </React.Fragment>
    );
  };

  return(
    <React.Fragment>
      <div>
        <div>
          <label>Style name</label>
          <input type="text" value={formStyle.name} onChange={ ev => setFormStyle({ ...formStyle, name: ev.target.value }) } />
        </div>
        <div>
          <label>Price</label>
          <input type="text" value={formStyle.price} onChange={ ev => setFormStyle({ ...formStyle, price: ev.target.value })} />
        </div>
        <div>
          <label>Estimated time</label>
          <input type="text" value={formStyle.time} onChange={ ev=> setFormStyle({ ...formStyle, time: ev.target.value })} />
        </div>
        <div>
          {buttons()}
        </div>
      </div>
    </React.Fragment>
  );
};

EditStyle.propTypes = {
  style: PropTypes.object.isRequired
};

export default EditStyle;
