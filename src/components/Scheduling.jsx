import React, { Component } from "react";
import "./SignIn.css";
import "../App.css";
import Select from "react-select";
import axios from "axios";
import apiUri from "../helpers/apiUri";

export default class Scheduling extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      selectOptions : [],
      id: "",
      styleName: " ",
      price: " ",
      ect: " "
    };
  }

  async getOptions() {
    let data;
    await axios.get(`${apiUri}/api/styles`)
      .then(results => {
        data = results.data;
      }).catch(err => {
        console.log(err);
      });
    
    const options = data.map(e => ({
      id: e.id,
      styleName: e.styleName,
      price: e.price,
      ect: e.ect
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    this.setState({ id:e.id, styleName:e.styleName, price:e.price, ect:e.ect });
  }

  componentDidMount() {
    this.getOptions();
  }

  async handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Schedule an Appointment</h1>
          <form noValidate onSubmit={this.handleSubmit}>

            <div className="date">
              <label htmlFor="date">Date: </label>
              <input type="date"
                className=""
                placeholder="Pick an appointment date"
                name="date"
                noValidate />
            </div>

            <div className="time">
              <label htmlFor="time">Time: </label>
              <input type="time"
                className=""
                placeholder="Choose a time"
                name="time"
                min="5:00" max="09:00" required
                noValidate />

            </div>
            <br></br>

            <div className="hairstyle">
              <Select options={this.state.selectOptions} placeholder="Select a hairstyle" onChange={this.handleChange.bind(this)} />
              <p>Price: $<strong>{this.state.price}</strong></p>
              <p>Time: <strong>{this.state.ect}</strong> mins</p>

            </div>

            <div className="loginAccount">
              <button type="submit"> Confirm</button>

            </div>

          </form>

        </div>
      </div>

    );
  }
}
