import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Scheduling from "../components/Scheduling/Scheduling";

describe("App", () => {
  const wrapper = shallow(<App />);
  it("Renders a React Router component", () => {
    expect(wrapper.find(Router)).toHaveLength(1);
  });

  it("has the proper routes and components", () => {
    const switchComponent = wrapper.find(Switch);
    expect(switchComponent).toBeDefined();
    expect(switchComponent.children().at(0).prop("path")).toEqual("/");
    expect(switchComponent.children().at(0).prop("component")).toEqual(Home);

    expect(switchComponent.children().at(1).prop("path")).toEqual("/services");
    expect(switchComponent.children().at(1).prop("component")).toEqual(Services);

    expect(switchComponent.children().at(2).prop("path")).toEqual("/scheduling");
    expect(switchComponent.children().at(2).prop("component")).toEqual(Scheduling);
  });
});
