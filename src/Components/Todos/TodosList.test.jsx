import React from "react";
import { shallow } from "enzyme";
import { TodosComponent } from "./TodosComponent";
import { todos } from "../../../fixture/todos";

beforeEach(() => {});

test("should render TodosList correctly", () => {
  const wapper = shallow(<TodosComponent todos={todos} />);

  expect(wapper).toMatchSnapshot();
});

test("should render TodosList with empty message", () => {
  const wapper = shallow(<TodosComponent todos={[]} />);

  expect(wapper).toMatchSnapshot();
});
