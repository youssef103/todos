import { Admin } from "./Admin";

test("Should render Admin", () => {
  const wrapper = shallow(<Admin />);
  expect(wrapper).toMatchSnapshot();
});
