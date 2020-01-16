import React from 'react';
import { shallow } from 'enzyme';
import {
  SuccessfulEmailVerification,
  mapStateToProps,
} from '../../containers/user/email/successfulVerification';


describe('Resend Email test suite', () => {
  const props = {
    verifyEmailAction: jest.fn(),
    location: {
      search: 'verifiedToken',
    },
  };
  it('should check `componentDidMount()`', () => {
    const wrapper = shallow(<SuccessfulEmailVerification {...props} />);
    expect(wrapper.find('[data-testid="verifiedEmail-Container"]').length).toBe(1);
  });
  it('should map state to props', () => {
    const initialState = {};
    expect(mapStateToProps(initialState).stateObject).toBeDefined();
  });
});
