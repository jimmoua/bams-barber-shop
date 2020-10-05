import React from "react";
import axios from "axios";
import apiUri from "../../api/apiUri";
import StylesSelect from "./StylesSelect";

/**
 * @function Scheduling
 * 
 * @description
 * The scheduling component
 * 
 * @returns
 * React stuff
 */
const Scheduling = () => {

  const [stylesList, setStylesList] = React.useState([]);
  const [currStyle, setCurrStyle] = React.useState();
  const [noSelectionSubmitFlag, setNoSelectionSubmitFlag] = React.useState(false);

  React.useEffect(() => {
    const fetchList = async() => {
      let data;
      try {
        data = await (await axios.get(`${apiUri}/api/styles`)).data;
        setStylesList(data);
      } catch(err) {
        console.log(err);
      }
    };
    fetchList();
  }, []);

  const shouldDisplayMessageNoSelection = () => {
    if(noSelectionSubmitFlag) {
      return(
        <React.Fragment>
          <p>Please select a style!</p>
        </React.Fragment>
      );
    }
  };

  /**
   * @function getListOfStyles
   * 
   * @returns a data mapping of the styles
   */
  const getListOfStyles = () => {
    return stylesList.map(e => ({
      value: e.id,
      label: e.styleName
    }));
  };

  /**
   * @function displayCurrSelectedInfo
   * 
   * @description
   * The function decides whether or not to display the message denoting user to choose a style.
   */
  const displayCurrSelectedInfo = () => {
    if(!currStyle) {
      return (<React.Fragment></React.Fragment>);
    }
    return (
      <React.Fragment>
        <p>Price: $ <strong>{currStyle.price}</strong></p>
        <p>Time: <strong>{currStyle.ect}</strong> mins</p>
      </React.Fragment>
    );
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Schedule an Appointment</h1>
        <form noValidate onSubmit={e => e.preventDefault()}>

          <div className="date">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              className=""
              placeholder="Pick an appointment date"
              name="date"
              noValidate
            />
          </div>

          <div className="time">
            <label htmlFor="time">Time: </label>
            <input type="time"
              className=""
              placeholder="Choose a time"
              name="time"
              min="5:00" max="09:00" required
              noValidate
            />

          </div>
          <br></br>

          <div className="hairstyle">
            <StylesSelect options={getListOfStyles()} onChangeStyle={(id) => {
              if(noSelectionSubmitFlag) setNoSelectionSubmitFlag(false);
              setCurrStyle(stylesList.filter(e => {
                return id === e.id;
              })[0]);
            }} />
            {displayCurrSelectedInfo()}
          </div>

          {shouldDisplayMessageNoSelection()}

          <div className="loginAccount">
            <button
              type="submit"
              onClick={() => {
                if(!currStyle) {
                  setNoSelectionSubmitFlag(true);
                } else {
                  console.log(currStyle);
                }
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default Scheduling;
