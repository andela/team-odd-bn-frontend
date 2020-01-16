import React from 'react';
import { shallow } from 'enzyme';
import Status from '../../components/Status';

describe('First React component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<Status status="pending" className="pending" />)).toMatchSnapshot();
  });
});
