import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import {
  VerifyEmail,
  mapStateToProps,
} from '../../containers/user/email/verifyEmail';
import { verifyEmailProps, spinnerProps, mainState } from '../../__mocks__/auth/verifyEmailMock';
import rootReducer from '../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<VerifyEmail {...verifyEmailProps} store={store} />);
  return wrapper;
};

describe('Resend Email test suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mainState);
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });
  it('should render spinner', () => {
    const wrapper = mount(
      <Router>
        <VerifyEmail {...spinnerProps} />
      </Router>,
    );

    expect(wrapper.find('[data-test="verifyEmail-spinner"]').length).toBe(1);
  });
  it('should map state to props', () => {
    const initialState = {
      auth: {
        verifyEmail: { spinner: null },
      },
    };
    expect(mapStateToProps(initialState).stateObject.auth).toBeDefined();
  });
});
