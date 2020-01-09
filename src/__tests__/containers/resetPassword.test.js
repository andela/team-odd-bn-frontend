import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  PasswordReset,
  mapStateToProps,
} from '../../containers/user/password/resetPassword';
import {
  props,
  mainState,
  spinnerProps,
  redirectProps,
} from '../../__mocks__/auth/resetPasswordMock';
import rootReducer from '../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <PasswordReset {...props} store={store} />,
  );
  return wrapper;
};

describe('Reset password test suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mainState);
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    component.find('[data-test="password"]').simulate('change', '$Qwerty123');
    component.find('[data-test="resetPassword-form"]').simulate('submit', {
      preventDefault() { },
    });
    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });
  it('should render spinner', () => {
    const wrapper = mount(<PasswordReset {...spinnerProps} />);
    expect(wrapper.find('[data-test="resetPassword-spinner"]').length).toBe(1);
  });
  it('should redirect the user to login after password reset', () => {
    const wrapper = mount(
      <BrowserRouter>
        <PasswordReset {...redirectProps} />
      </BrowserRouter>,
    );
    expect(wrapper.find('[data-test="login-redirect"]').length).toBe(1);
  });
  it('should map state to props', () => {
    const initialState = {
      auth: {
        resetPassword: { spinner: null },
      },
    };
    expect(mapStateToProps(initialState).stateObject.auth).toBeDefined();
  });
});
