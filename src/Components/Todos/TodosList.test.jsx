import React from "react";
import { shallow } from "enzyme";
import { TodosListComponent } from "./TodosListComponent";
import { todos } from "../../../fixture/todos";

beforeEach(() => {});

test("should render TodosList correctly", () => {
  const wapper = shallow(<TodosListComponent todos={todos} />);

  expect(wapper).toMatchSnapshot();
});

test("should render TodosList with empty message", () => {
  const wapper = shallow(<TodosListComponent todos={[]} />);

  expect(wapper).toMatchSnapshot();
});
