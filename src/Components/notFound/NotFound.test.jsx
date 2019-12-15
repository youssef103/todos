import React from "react";
import { NotFound } from "./NotFound";
import { shallow } from "enzyme";

test("should render NotFound", () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper).toMatchSnapshot();
});
