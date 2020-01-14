import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner';

describe('First React component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });
});
