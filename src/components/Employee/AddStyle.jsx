import React from "react";
import Button from "../Button";
import { addStyle } from "../../api/styles";
import { ClipLoader } from "react-spinners";
import { useStore } from "../../store";
import styles from "../styles/EditStyle.module.css";
import { useAlert } from "react-alert";
import EditStylesPage from "./EditStylesPage";
import { checkStorage } from "../../store";

/**
 * @param {Object} style The style of the haircut
 */
const AddStyle = () => {
  const { dispatch } = useStore();
  const [isSubmitting, setSubmit] = React.useState(false);
  const alert = useAlert();
  const [newStyle, setNewStyle] = React.useState({
    styleName: "",
    price: "",
    ect: ""
  });

  React.useEffect(() => {
    checkStorage();
  });

  const buttons = () => {
    if(isSubmitting) {
      return <ClipLoader />;
    }
    return (
      <React.Fragment>
        <Button
          buttonStyle="btn--edit"
          onClick={async() => {
            if(newStyle.styleName.length === 0) {
              return alert.show("Please provide a style name");
            }
            if(Number.isNaN(parseFloat(newStyle.price))) {
              return alert.show("Please make sure price is a number");
            }
            if(Number.isNaN(parseFloat(newStyle.ect))) {
              return alert.show("Please make sure estimated time is a number");
            }
            setSubmit(true);
            const retCode = await addStyle(newStyle);
            switch(retCode) {
              case 200:
                setSubmit(false);
                alert.success(`${newStyle.styleName} has been added.`);
                return dispatch({ type: "setEmployeeComponent", component: <EditStylesPage /> });
              default:
                alert.error(`${retCode}: Could not add the style.`);
            }
            setSubmit(false);
          }}
        >
                Add
        </Button>
      </React.Fragment>
    );
  };

  return(
    <React.Fragment>
      <div className={styles.body}>
        <div className={styles.inner}>
          <form onSubmit={ev => ev.preventDefault()}>
            <div className={styles.label}>
              <label>Style name : </label>
              <input required type="text" value={newStyle.styleName} onChange={ ev => setNewStyle({ ...newStyle, styleName: ev.target.value }) } />
            </div>
            <div className={styles.label}>
              <label>Price : </label>
              <input required type="text" value={newStyle.price} onChange={ ev => setNewStyle({ ...newStyle, price: ev.target.value })} />
            </div>
            <div className={styles.label}>
              <label>Estimated time :</label>
              <input required type="text" value={newStyle.ect} onChange={ ev=> setNewStyle({ ...newStyle, ect: ev.target.value })} />
            </div>
            <br/>
            <div className={styles.buttons}>
              {buttons()}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddStyle;
