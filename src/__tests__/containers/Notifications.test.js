import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import dotenv from 'dotenv';
import { Notifications, mapStateToProps } from '../../containers/notifications/Notifications';
import rootReducer from '../../redux/reducers/index';
import mockData from '../../__mocks__/fileMock';
import 'jest-localstorage-mock';

dotenv.config();

const middlewares = [thunk];
let store;

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

const setUp = (initialState = {}) => {
  store = testStore(initialState);
  const wrapper = shallow(
    <Notifications {...mockData.notificationProps} store={store} />,
  );
  return wrapper;
};

describe('Notification Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.notificationsMainState);
    component.setProps({ notifications: mockData.notificationProps.notifications });
  });

  it('Should return initial data', () => {
    const stores = testStore(mockData.notificationsMainState);
    localStorage.setItem('token', process.env.TESTING_TOKEN);
    expect(shallow(
      <Notifications spinner={null} store={stores} />,
    )).toMatchSnapshot();
  });

  it('Should return the initial State', () => {
    const initialState = {
      notifications: {
        notifications: {
          allNotifications: null,
          allNotificationError: null,
        },
        newNotification: null,
      },
      markOneAsRead: {
        markOne: null,
        markOneError: null,
      },
      markAsRead: {
        markAll: null,
        markAllError: null,
      },
    };
    expect(mapStateToProps(initialState).allNotifications).toEqual(null);
  });
});

describe('Should simulate mark as read', () => {
  const component = shallow(<Notifications {...mockData.notificationProps} />);
  // localStorage.setItem('token', process.env.TESTING_TOKEN);
  // component.find('.links').simulate('click');
  it('Should simulate mark as read', () => {
    const handleMarkAsRead = jest.spyOn(component.instance(), 'handleMarkAsRead');
    component.instance().handleMarkAsRead(0);
    expect(handleMarkAsRead).toHaveBeenCalledWith(0);
  });
});
