import React from "react";
import { shallow } from "enzyme";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const mockFn = jest.fn();

describe("Button component", () => {
  const wrapper = shallow(
    <Button
      onClick={mockFn}
      buttonStyle="foo"
      buttonSize="bar"
      linkTo="/someLink"
    >
      pizza is great
    </Button>
  );
  it("leads to the link", () => {
    expect(wrapper.find(Link).props().to).toEqual("/someLink");
  });
  test("the Link cocmponent has a button element as a child", () => {
    expect(wrapper.find(Link).children().name()).toEqual("button");
  });
  it("Creates a standard button with the style, size, link, children, and onClick function", () => {
    const btnElement = wrapper.find("button");
    expect(btnElement.props().className).toEqual("btn btn--primary btn--medium");
    expect(btnElement.props().children).toEqual("pizza is great");
    expect(btnElement.props().onClick).toBeDefined();
  });
});
