import React from 'react';
import { shallow } from 'enzyme';
import VerifyEmailView from '../../../views/auth/verifyEmailView';

describe('Rendering RESEND EMAIL views', () => {
  test('should render verifyEmailView without crash', () => {
    const wrapper = shallow(<VerifyEmailView />);
    expect(wrapper.find("[data_testid='verifyEmail-View']")).toHaveLength(1);
  });
});
