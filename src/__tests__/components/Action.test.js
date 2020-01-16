import React from 'react';
import { shallow } from 'enzyme';
import Action from '../../components/Action';

describe('First React component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<Action action="view" url="/" background="red" />)).toMatchSnapshot();
  });
});
