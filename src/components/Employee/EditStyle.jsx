import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import sendUpdate from "../../api/sendUpdate";

/**
 * @param {Object} style The style of the haircut
 */
const EditStyle = ({ style }) => {
  const [formStyle, setFormStyle] = React.useState(style);
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
          <Button>Delete</Button>
          <Button
            onClick={async() => {
              await sendUpdate(formStyle);
            }}
          >Update</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

EditStyle.propTypes = {
  style: PropTypes.object.isRequired
};

export default EditStyle;
