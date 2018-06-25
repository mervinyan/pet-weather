import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './home-page';

it('renders welcome message', () => {
  const wrapper = shallow(<HomePage />);
  const welcome = <div>Welcome to the Pet Weather!</div>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
