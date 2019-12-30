import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordView from '../../views/resetPasswordView';
import ForgotPasswordView from '../../views/forgotPasswordView';

describe('Rendering password reset views', () => {
  test('should render ForgotPasswordView without crash', () => {
    const wrapper = shallow(<ResetPasswordView />);
    expect(wrapper.find("[data-testid='resetPassword-View']")).toHaveLength(1);
  });

  test('should render ForgotPasswordView without crash', () => {
    const wrapper = shallow(<ForgotPasswordView />);
    expect(wrapper.find("[data-testid='forgotPassword-View']")).toHaveLength(1);
  });
});
