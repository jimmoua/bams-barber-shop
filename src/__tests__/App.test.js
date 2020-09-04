import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";

describe("App", () => {
  const wrapper = shallow(<App />);
  it("Renders a React Router component", () => {
    expect(wrapper.find(Router)).toHaveLength(1);
  });

  it("has the proper routes and components", () => {
    expect(wrapper.find(Switch).children()).toHaveLength(4);

    expect(wrapper.find(Switch).children().at(0).prop("path")).toEqual("/");
    expect(wrapper.find(Switch).children().at(0).prop("component")).toEqual(Home);

    expect(wrapper.find(Switch).children().at(1).prop("path")).toEqual("/services");
    expect(wrapper.find(Switch).children().at(1).prop("component")).toEqual(Services);

    expect(wrapper.find(Switch).children().at(2).prop("path")).toEqual("/login");
    expect(wrapper.find(Switch).children().at(2).prop("component")).toEqual(Login);

    expect(wrapper.find(Switch).children().at(3).prop("path")).toEqual("/register");
    expect(wrapper.find(Switch).children().at(3).prop("component")).toEqual(Register);
  });
});
