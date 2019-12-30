import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ForgotPassword, mapStateToProps } from '../../containers/user/password/forgotPassword';
import { forgotProps, spinnerProps, mainState } from '../../__mocks__/auth/resetPasswordMock';
import rootReducer from '../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <ForgotPassword {...forgotProps} store={store} />,
  );
  return wrapper;
};

describe('Forgot password test suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mainState);
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    component.find('[data-test="email"]').simulate('change', 'test@user.com');
    component.find('[data-test="forgotPassword-form"]').simulate('submit', {
      preventDefault() { },
    });
    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });
  it('should render spinner', () => {
    const wrapper = mount(<ForgotPassword {...spinnerProps} />);
    expect(wrapper.find('[data-test="forgotPassword-spinner"]').length).toBe(1);
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
