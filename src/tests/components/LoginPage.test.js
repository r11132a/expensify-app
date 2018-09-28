import React from 'react';
import {LoginPage} from "../../components/LoginPage";
import { shallow } from 'enzyme';

test("Should render LoginPage",() => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
})

test("Should call startLogin on click",() => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
  wrapper.find("button").simulate("click");
  expect(startLoginSpy).toHaveBeenCalled();
});