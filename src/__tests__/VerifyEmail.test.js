import React from 'react';
import { shallow } from 'enzyme';
import VerifyEmail from '../views/auth/VerifyEmail';

describe('Verify email test suite', () => {
  test('renders without crashing', () => {
    expect(shallow(<VerifyEmail />)).toMatchSnapshot();
  });
});
