import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Requests from '../../../views/trips/RequestsView';
import { requestViewData } from '../../../__mocks__/trips/requests';

let wrapper;

describe('Test Signup page ', () => {
  it('Test snapshot using the initial state', () => {
    wrapper = mount(

      <Router>
        <Requests data={requestViewData} />
      </Router>,

    );
    expect(wrapper).toMatchSnapshot();
  });
});
