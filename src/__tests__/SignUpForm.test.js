import React from "react";
import { shallow } from "enzyme";
import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

const mockFn = jest.fn();

describe("The SignUpForm component", () => {
  const wrapper = shallow(<SignUpForm submitForm={mockFn} />);

  const inputElements = wrapper.find("input").map(element => element.props());

  it("has a form element", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  describe("four input fields", () => {
    it("actually has four input fields", () => {
      expect(inputElements).toHaveLength(4);
    });
    test("the first element is an email and it is set up correctly", () => {
      expect(inputElements[0].type).toEqual("email");
      expect(inputElements[0].name).toEqual("email");
      expect(inputElements[0].required).toEqual(true);
    });
    test("the second element is telephone and it set up correctly", () => {
      expect(inputElements[1].type).toEqual("tel");
      expect(inputElements[1].name).toEqual("phone");
      expect(inputElements[1].required).not.toBeDefined();
    });
    test("the third element is the first password field and it set up correctly", () => {
      expect(inputElements[2].type).toEqual("password");
      expect(inputElements[2].name).toEqual("password1");
      expect(inputElements[2].required).toEqual(true);
    });
    test("the fourth element is the second password field and it set up correctly", () => {
      expect(inputElements[3].type).toEqual("password");
      expect(inputElements[3].name).toEqual("password2");
      expect(inputElements[3].required).toEqual(true);
    });
  });

  it("has a submit button", () => {
    expect(wrapper.find("button").props().type).toEqual("submit");
  });

  test("There is a link at the bottom leading to the login page", () => {
    expect(wrapper.find(Link).props().to).toEqual("/login");
  });
});
