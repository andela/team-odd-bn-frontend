import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Signin from '../containers/user/signin/Signin';
import mockData from '../__mocks__/fileMock';

let wrapper; let
  store;
const mockStore = configureMockStore();
const { signinDummyDataWithErrors } = mockData;


describe('Signin testing', () => {
  beforeEach(() => {
    const initialState = signinDummyDataWithErrors;
    store = mockStore(initialState);
    wrapper = shallow(<Signin store={store} />);
  });

  it('Should render class', () => {
    const wrapper2 = mount(<Signin store={store} />);
    expect(wrapper2).toMatchSnapshot();
  });
});
