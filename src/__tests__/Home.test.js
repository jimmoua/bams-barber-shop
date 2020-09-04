import { shallow } from "enzyme";
import React from "react";
import Home from "../components/pages/Home";
import HomeSection from "../components/HomeSection";

describe("Home component", () => {
  const wrapper = shallow(<Home />);
  it("renders a HomeSection component", () => {
    expect(wrapper.find(HomeSection)).toHaveLength(1);
  });

});
