import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  ResendEmail,
  mapStateToProps,
} from '../../containers/user/resendEmail';
import { resendEmailProps, spinnerProps, mainState } from '../../__mocks__/auth/resendEmailMock';
import rootReducer from '../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<ResendEmail {...resendEmailProps} store={store} />);
  return wrapper;
};

describe('Resend Email test suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mainState);
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    component.find('[data-test="email"]').simulate('change', 'test@user.com');
    component.find('[data-test="resendEmail-form"]').simulate('submit', {
      preventDefault() { },
    });
    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });
  it('should render spinner', () => {
    const wrapper = mount(<ResendEmail {...spinnerProps} />);
    expect(wrapper.find('[data-test="resendEmail-spinner"]').length).toBe(1);
  });
  it('should map state to props', () => {
    const initialState = {
      auth: {
        resendEmail: { spinner: null },
      },
    };
    expect(mapStateToProps(initialState).stateObject.auth).toBeDefined();
  });
});
