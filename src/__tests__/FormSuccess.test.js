import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import FormSuccess from "../components/FormSuccess";

describe("FormSuccess", () => {
  const wrapper = shallow(<FormSuccess />);
  it("should have a link to login", () => {
    expect(wrapper.find(Link).props().to).toEqual("/login");
  });
  it("renders the shop logo", () => {
    const imgElement = wrapper.find("img");
    expect(imgElement).toHaveLength(1);
    expect(imgElement.props().src).toEqual("formsuccess.jpg");
  });
  it("shows a warm welcome message", () => {
    expect(wrapper.find("h3").props().children).toEqual("Thank you for joining us!");
  });
});
