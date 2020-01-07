import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import store from '../../../redux/store';
import Login from '../../../containers/user/signin/signin';
import LoginView from '../../../views/auth/LoginView';
import initialState from '../../../redux/store/initialState';
import { loginInitialState, noDataInStore } from '../../../__mocks__/__loginTestMock__/loginMock';

let stores;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>,
      div,
    );
  });
  it('should submit a form', () => {
    const formEventMocked = { preventDefault: jest.fn() };
    const loginAction = jest.fn();
    stores = mockStore(initialState);

    const input = mount(
      <Router>
        <LoginView store={stores} loginAction={loginAction} signInState={initialState} />
      </Router>,
    );
    const form = input.find('form');
    form.simulate('submit', formEventMocked);
    expect(loginAction.mock.calls).toBeDefined();
  });

  it('Should redirect to dashboard', () => {
    stores = mockStore(loginInitialState);

    expect(mount(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
      ,
    )).toMatchSnapshot();
  });
  it('Test spinner action', () => {
    stores = mockStore(noDataInStore);
    const wrapper = mount(
      <Provider store={stores}>
        <Router>
          <Login
            handleSubmit={async () => {
              jest.fn();
              return jest.fn();
            }}
          />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Spinner').length).toEqual(1);
  });
});
