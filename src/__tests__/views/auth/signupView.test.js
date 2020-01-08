import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import SignupView from '../../../views/auth/SignupView';
import initialState from '../../../redux/store/initialState';
import { socialData, extraInfoData } from '../../../constants/signUp';

describe('Test Sign up view page ', () => {
  it('should render', () => {
    expect(
      shallow(
        <Router>
          <SignupView
            socialData={socialData}
            extraInfoData={extraInfoData}
            stateObject={initialState}
          />
        </Router>,
      ),
    ).toMatchSnapshot();
  });

  it('should submit a form', () => {
    const formEventMocked = { preventDefault: jest.fn() };
    const signupAction = jest.fn();

    const input = mount(
      <Router>
        <SignupView
          socialData={socialData}
          extraInfoData={extraInfoData}
          signupAction={signupAction}
          stateObject={initialState}
        />
      </Router>,
    );
    const form = input.find('form');
    form.simulate('submit', formEventMocked);

    expect(signupAction.mock.calls).toBeDefined();
  });
});
