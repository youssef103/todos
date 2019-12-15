import { Admin } from "./Admin";

test("Should render Admin by shalow", () => {
  const wrapper = shallow(<Admin />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render Admin by render", () => {
  const wrapper = render(<Admin />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render Admin by mount", () => {
  const wrapper = mount(<Admin />);
  expect(wrapper).toMatchSnapshot();
  expect(2).toBe(1);
});
