import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import MainProfile, { Profile, mapStatetoProps } from '../../components/Profile';
import rootReducer from '../../redux/reducers/index';
import mockData from '../../__mocks__/fileMock';

const middlewares = [thunk];
let store;

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

const setUp = (initialState = {}) => {
  store = testStore(initialState);
  const wrapper = shallow(
    <Profile {...mockData.props} store={store} />,
  );
  return wrapper;
};

describe('Profile Test Suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mockData.profileMainState);

    component.instance().handleFiles(['hola']);

    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    const firstName = { target: { name: 'firstName', value: 'Ivy' } };
    const lastName = { target: { name: 'lastName', value: 'league' } };
    const gender = { target: { name: 'gender', value: 'female' } };
    const birthDate = { target: { name: 'birthDate', value: '2019-01-01' } };
    const address = { target: { name: 'address', value: 'Kigali' } };
    const department = { target: { name: 'department', value: 'Finance' } };
    const bio = { target: { name: 'bio', value: 'Work hard play hard' } };

    component.find('[data_test="editButton"]').simulate('click');
    component.find('[data_test="firstName"]').simulate('change', firstName);
    component.find('[data_test="lastName"]').simulate('change', lastName);
    component.find('[data_test="gender"]').simulate('change', gender);
    component.find('[data_test="birthDate"]').simulate('change', birthDate);
    component.find('[data_test="address"]').simulate('change', address);
    component.find('[data_test="department"]').simulate('change', department);
    component.find('[data_test="bio"]').simulate('change', bio);
    component.find('[data_test="submitButton"]').simulate('click');
    component.find('form').simulate('submit', {
      preventDefault() {},
    });
    expect(handleSubmitSpy).toReturn();
  });

  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.profileMainState);
    component.setProps({ profile: mockData.props.profile });
    const address = { target: { name: 'address', value: 'Ki' } };
    const department = { target: { name: 'department', value: 'Fi' } };
    const bio = { target: { name: 'bio', value: 'Work ' } };
    component.find('[data_test="address"]').simulate('change', address);
    component.find('[data_test="department"]').simulate('change', department);
    component.find('[data_test="bio"]').simulate('change', bio);
  });

  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.profileMainState);
    component.setProps({ profile: mockData.emptyProfile });
  });

  it('Should return initial data', () => {
    const stores = testStore(mockData.profileMainState);
    expect(shallow(
      <Profile spinner={null} store={stores} />,
    )).toMatchSnapshot();
  });

  it('Should return the initial State', () => {
    const initialState = {
      viewProfile: {
        profile: null,
        profileError: null,
      },
      updateProfile: {
        message: null,
        updateProfileError: null,
        imageURL: null,
        imageURLError: null,
        spinner: null,
        spinnnerError: null,
      },
      allUsers: {
        users: null,
        usersError: null,
      },
    };
    expect(mapStatetoProps(initialState).profile).toEqual(null);
  });
});
