import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../../../containers/user/signup/signup';
import initialState from '../../../redux/store/initialState';
import {
  redirectInitialState,
  spinnerInitialState,
} from '../../../__mocks__/auth/authMock';

const mockStore = configureStore([]);
let wrapper;
let store;

describe('Test Signup page ', () => {
  it('Test redirect', () => {
    store = mockStore(redirectInitialState);

    wrapper = mount(
      <Router>
        <SignUp
          store={store}
          handleSubmit={async () => {
            jest.fn();
            return jest.fn();
          }}
        />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual(
      '/verify-email',
    );
    expect(wrapper.find('Redirect').length).toEqual(1);
  });
  it('Test spinner action', () => {
    store = mockStore(spinnerInitialState);

    wrapper = mount(
      <Router>
        <SignUp
          store={store}
          handleSubmit={async () => {
            jest.fn();
            return jest.fn();
          }}
        />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Spinner').length).toEqual(1);
  });
  it('Test snapshot using the initial state', () => {
    store = mockStore(initialState);

    wrapper = mount(
      <Router>
        <SignUp
          store={store}
          handleSubmit={async () => {
            jest.fn();
            return jest.fn();
          }}
        />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
