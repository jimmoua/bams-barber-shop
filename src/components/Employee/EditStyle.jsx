import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

/**
 * @param {Object} style The style of the haircut
 */
const EditStyle = ({ style }) => {
  return(
    <React.Fragment>
      <div>
        <div>
          <label>Style name</label>
          <input type="text" value={style.name} />
        </div>
        <div>
          <label>Price</label>
          <input type="text" value={style.price} />
        </div>
        <div>
          <label>Estimated time</label>
          <input type="text" value={style.time} />
        </div>
        <div>
          <Button>Delete</Button>
          <Button>Update</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

EditStyle.propTypes = {
  style: PropTypes.object.isRequired
};

export default EditStyle;
