import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SocialAuthenticate, { SocialLogin } from '../containers/user/social/SocialAuthLogin';
import mockData from '../__mocks__/fileMock';
import socialReducer from '../redux/reducers/socialAuthReducer';
import extractQueryInfo from '../helpers/extractQueryInfo';

let wrapper; let
  store;

const { destructLocationData, socialAuthDummyData, socialAuthReducer } = mockData;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test social login', () => {
  JSON.parse = jest.fn().mockImplementationOnce(() => 'I am token');
  const wrapper = mount(
    <Router>
      <SocialLogin {...socialAuthDummyData} />
    </Router>,
  );

  it('Should mount component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe('Test social login state', () => {
  beforeEach(() => {
    const initialState = socialAuthDummyData;
    store = mockStore(initialState);
    wrapper = shallow(<SocialAuthenticate store={store} />);
  });

  it('Expect test map dispatch to props', () => {
    expect(wrapper.props().store.getState().location.search).toEqual('https://dummy.example.url/?info=Iamtoken');
    expect(wrapper.props().authUserData('I am tken')).toBeDefined();
  });
});


describe('Destruct social authenticate data', () => {
  const { location } = destructLocationData;
  it('Expect to parse URL', () => {
    JSON.parse = jest.fn().mockImplementationOnce(() => 'I am token');
    const result = extractQueryInfo(location);
    expect(result).toEqual('I am token');
  });
});

describe('Test social login reducers', () => {
  const action = socialAuthReducer;
  it('Expect social logind to update', () => {
    const reducer = socialReducer(true, action);
    expect(reducer).toEqual({ type: 'SOCIAL_AUTH_SUCCESS', payload: 'successfuly authenticate' });
  });
});
