import React from "react";
import { shallow } from "enzyme";
import SignInForm from "../components/SignInForm";
import { Link } from "react-router-dom";

describe("The SignInForm component", () => {
  const wrapper = shallow(<SignInForm />);

  test("The link should be set to go to '/register'", () => {
    expect(wrapper.find(Link).props().to).toEqual("/register");
  });

  it("Should have a login button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").props().type).toEqual("submit");
  });

  describe("The input elements", () => {
    const inputElements = wrapper.find("input").map(e => e.props());
    it("should have two inputs elements", () => {
      expect(inputElements).toHaveLength(2);
    });
    it("should be marked as required", () => {
      inputElements.forEach(input => {
        expect(input.required).toEqual(true);
      });
    });
    it("has onChange events", () => {
      inputElements.forEach(input => {
        expect(input.onChange).toBeDefined();
      });
    });
  });
});
