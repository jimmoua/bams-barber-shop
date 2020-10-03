import React from "react";
import "./SignIn.css";
import "../App.css";
import Select from "react-select";
import axios from "axios";
import apiUri from "../helpers/apiUri";

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

  React.useEffect(() => {
    const fetchList = async() => {
      console.log(`${apiUri}/api/styles`);
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
            <Select
              options={getListOfStyles()}
              placeholder="Select a hairstyle"
              onChange={ev => {
                setCurrStyle(stylesList.filter(e => {
                  return ev.value === e.id;
                })[0]);
              }}
            />
            {displayCurrSelectedInfo()}
          </div>

          <div className="loginAccount">
            <button
              type="submit"
              onClick={() => {
                console.log(currStyle);
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
