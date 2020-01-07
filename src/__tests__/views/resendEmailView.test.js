import React from 'react';
import { shallow } from 'enzyme';
import ResendEmailView from '../../views/resendEmailView';

describe('Rendering RESEND EMAIL views', () => {
  test('should render resendEmailView without crash', () => {
    const wrapper = shallow(<ResendEmailView />);
    expect(wrapper.find("[data-testid='resendEmail-View']")).toHaveLength(1);
  });
});
