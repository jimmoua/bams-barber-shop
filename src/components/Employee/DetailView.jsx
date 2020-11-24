import React from "react";
import { fetchStyle } from "../../api/styles";
import Cliploader from "react-spinners/ClipLoader";
import PropType from "prop-types";
import styles from "../styles/EmployeeHome.module.css";
import Button from "@material-ui/core/Button";

/**
 * 
 * @param {Function} close function from reactjs-popup that closes the modal
 * @param {Object} fd form details
 * @param {String} serviceKey uuid of the style
 */
const DetailView = ({ close, fd, serviceKey }) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetchStyle(serviceKey)
      .then(results => {
        setData(results[0]);
      });
  }, [serviceKey]);

  const displayData = () => {
    if(!data) {
      return <Cliploader />;
    }
    return (
      <React.Fragment>
        <b>{data.styleName} &bull; $ {data.price} &bull; {data.ect} mints</b>
        <br/>
        <b>Additional Information:</b> {fd.additionalInfo?.length > 0 ? fd.additionalInfo : "N/A"}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className={styles.modal}>
        {/* Close on the top right corner */}
        <button className={styles.close} onClick={close}>
                &times;
        </button>
        <div className={styles.header}>Information for {fd.firstName} {fd.lastName}</div>
        <div className={styles.content}>
          <div style={{ textAlign: "center" }}>
            {displayData()}
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            className={styles.button}
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

DetailView.propTypes = {
  close: PropType.func.isRequired,
  fd: PropType.object.isRequired,
  serviceKey: PropType.string.isRequired
};

export default DetailView;
