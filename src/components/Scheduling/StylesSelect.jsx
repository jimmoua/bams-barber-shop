import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const StylesSelect = ({ options, onChangeStyle }) => {
  return (
    <React.Fragment>
      <Select
        options={options}
        placeholder="Select a hairstyle"
        onChange={ev => {
          onChangeStyle(ev.value);
        }}
      />
    </React.Fragment>
  );
};

StylesSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChangeStyle: PropTypes.func.isRequired
};

export default StylesSelect;
