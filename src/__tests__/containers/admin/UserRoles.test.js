import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { UserRoles, mapStateToProps } from '../../../containers/admin/UserRoles';
import {
  defaultProps,
  updateDefaultProps,
  emptyDataComponent,
} from '../../../__mocks__/admin/admin';
import rootReducer from '../../../redux/reducers/index';

describe('Expect to render', () => {
  const wrapper = shallow(<UserRoles {...defaultProps} />);
  it('should render successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should simulate on componentDidMount', () => {
    const didUpdate = jest.spyOn(wrapper.instance(), 'componentDidUpdate');
    wrapper.instance().componentDidUpdate();
    expect(didUpdate).toHaveBeenCalledWith();
  });
});
describe('Onchange search ', () => {
  it('should map state to props', () => {
    const initialState = {};
    expect(mapStateToProps(initialState).adminState).toBeDefined();
  });
});
