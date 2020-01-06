import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'mock-local-storage';
import DashboardDefault from '../views/Dashboard/index';
import { Dashboard } from '../views/Dashboard/index';
import mockData from '../__mocks__/fileMock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const { signoutProps } = mockData;

let initialState;

describe('Expect signout to be connected with redux and dashboard', () => {
  let wrapper2; let store2; let wrapper3;
  beforeEach(() => {
    initialState = {
      state: {
        signout: true,
        isLoggedin: {},
      },
      isSignout: true,
    };
    store2 = mockStore(initialState);
    wrapper2 = shallow(<DashboardDefault store={store2} {...signoutProps} />);
  });

  it('Expect to render without problem', () => {
    expect(wrapper2).toMatchSnapshot();
  });

  it('Expect to logout by clicking a button', async () => {
    wrapper3 = shallow(<Dashboard {...signoutProps} />);
    const signout = wrapper3.find('.signout');
    signout.simulate('click');
    expect(signout.text()).toBe('Logout');
  });
});
