import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './not-found-page';

it('renders welcome message', () => {
  const wrapper = shallow(<NotFoundPage />);
  const message_summary = <h1>404 - Page Not Found</h1>;
  expect(wrapper.contains(message_summary)).toEqual(true);

  const message_detail = <p>I'm sorry, the page you were looking for cannot be found!</p>;
  expect(wrapper.contains(message_detail)).toEqual(true);

});
