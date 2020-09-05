import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import {
  BrowserRouter as Router
} from "react-router-dom";

describe("App", () => {
  const wrapper = shallow(<App />);
  it("Renders a React Router component", () => {
    expect(wrapper.find(Router)).toHaveLength(1);
  });
});
