import React from "react";
import { shallow } from "enzyme";
import Login from "../components/pages/Login";
import SignInForm from "../components/SignInForm";

describe("The Login page component", () => {
  const wrapper = shallow(<Login />);
  it("Should have a SignInForm component", () => {
    expect(wrapper.find(SignInForm)).toHaveLength(1);
  });
});
