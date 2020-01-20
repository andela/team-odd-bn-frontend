import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CommonRequests from '../../../views/trips/CommonRequests';
import {
  entities,
  navs,
  tableHeads,
  init,
} from '../../../__mocks__/trips/requests';


const mockStore = configureStore([]);
let wrapper;
let store;

describe('Test common Requests', () => {
  it('Test Common Requests functionality', () => {
    store = mockStore(init);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <CommonRequests data={[[{ a: 'b' }], [{ b: 'a' }]]} entities={entities} navs={navs} tableHeads={tableHeads} />
        </Router>
      </Provider>,
    );
    const page1 = wrapper.find('#page1');
    // const page2 = wrapper.find('#page2');
    const page3 = wrapper.find('#page3');
    page1.simulate('click');
    // page2.simulate('click');
    page3.simulate('click');
    expect(jest.fn().mock.calls).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
