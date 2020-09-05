import { shallow } from "enzyme";
import React from "react";
import Home from "../components/Home";

describe("Home component", () => {
  it("should render the text `Home Component`", () => {
    const wrapper = shallow(<Home />);
    const item = wrapper.find("#header");
    expect(item.props().children).toEqual("Home Component");
  });
});
