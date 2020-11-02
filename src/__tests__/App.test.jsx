import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  const wrapper = shallow(<App />);
  it("renders Main", () => {
    expect(wrapper.find("Main")).toHaveLength(1);
  });
  test("SessionStore wraps Main", () => {
    const sp = wrapper.find("StoreProvider");
    expect(wrapper.find("StoreProvider")).toHaveLength(1);
    expect(sp.children().name()).toEqual("Main");
  });
});
