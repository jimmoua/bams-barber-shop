import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { updateStyle, deleteStyle } from "../../api/styles";
import { ClipLoader } from "react-spinners";
import { useStore } from "../../store";
import EditStylesPage from "./EditStylesPage";
import styles from "../styles/EditStyle.module.css";
import { useAlert } from "react-alert";
import { checkStorage } from "../../store";

/**
 * @param {Object} style The style of the haircut
 */
const EditStyle = ({ style }) => {
  React.useEffect(() => {
    checkStorage();
  });
  const [formStyle, setFormStyle] = React.useState(style);
  const [isSubmitting, setSubmit] = React.useState(false);
  const { dispatch } = useStore();
  const alert = useAlert();

  const buttons = () => {
    if(isSubmitting) {
      return <ClipLoader />;
    }
    return (
      <React.Fragment>
        <Button 
          buttonStyle="btn--delete"
          onClick={async() => {
            const ans = window.confirm(`Delete the service ${style.name}?`);
            if(!ans) {
              return;
            }
            setSubmit(true);
            const status = await deleteStyle(formStyle.key);
            if(status === 200) {
              alert.success(`Style ${formStyle.name} has been deleted`);
              return dispatch({ type: "setEmployeeComponent", component: <EditStylesPage /> });
            } else if (status === 409) {
              alert.error(`Error ${status}: appointments currently exist with that style.`);
            } else {
              alert.error("Error: failed to delete the style.");
            }
            setSubmit(false);
          }}
        >
          Delete
        </Button>
        <Button
          buttonStyle="btn--edit"
          onClick={async() => {
            if(formStyle.name.length === 0) {
              return alert.show("Please fill out style name.");
            }
            if(Number.isNaN(parseFloat(formStyle.price)) || Number.isNaN(formStyle.ect)) {
              return alert.error("Please make sure that price and estimated time are numbers");
            }
            setSubmit(true);
            const status = await updateStyle(formStyle);
            if(status === 200) {
              alert.success(`Style ${formStyle.name} has been updated.`);
              return dispatch({ type: "setEmployeeComponent", component: <EditStylesPage /> });
            } else if (status === 409) {
              alert.error(`Error ${status}: appointments currently exist with that style.`);
            } else {
              console.log(status);
              alert.error(`Error: style ${formStyle.name} could not be updated.`);
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
      <div className={styles.body}>
        <div className={styles.inner}>
          <div className={styles.label}>
            <label>Style name : </label>
            <input required type="text" value={formStyle.name} onChange={ ev => setFormStyle({ ...formStyle, name: ev.target.value }) } />
          </div>
          <div className={styles.label}>
            <label>Price : </label>
            <input required type="text" value={formStyle.price} onChange={ ev => setFormStyle({ ...formStyle, price: ev.target.value })} />
          </div>
          <div className={styles.label}>
            <label>Estimated time :</label>
            <input required type="text" value={formStyle.time} onChange={ ev=> setFormStyle({ ...formStyle, time: ev.target.value })} />
          </div>
          <br/>
          <div className={styles.buttons}>
            {buttons()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

EditStyle.propTypes = {
  style: PropTypes.object.isRequired
};

export default EditStyle;
