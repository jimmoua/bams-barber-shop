import { shallow } from "enzyme";
import React from "react";
import StylesSelect from "../components/Scheduling/StylesSelect";
import Select from "react-select";

const onChangeMock = jest.fn();

describe("StylesSelect component", () => {
  describe("If no options", () => {
    const wrapper = shallow(<StylesSelect options={[]} onChangeStyle={onChangeMock} />);
    it("should have no options", () => { 
      const foo = wrapper.find(Select);
      expect(foo.props().options).toHaveLength(0);
    });
  });
  describe("If options are available", () => {
    const mockOptions = [
      { id: 1, label: "foo" },
      { id: 2, label: "bar" },
      { id: 3, label: "baz" }
    ];
    const wrapper = shallow(<StylesSelect options={mockOptions} onChangeStyle={onChangeMock} />);
    it("should have the correct number of styles and their names", () => {
      const options = wrapper.find(Select).props().options;
      expect(options).toHaveLength(mockOptions.length);
      for(let i = 0; i < mockOptions.length ; i++) {
        expect(options[i]).toEqual(mockOptions[i]);
      }
    });
  });
});
