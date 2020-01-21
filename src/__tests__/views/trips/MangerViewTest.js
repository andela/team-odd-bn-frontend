import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ManagerView from '../../../views/trips/ManagerView';
import { ManagerViewData } from '../../../__mocks__/trips/requests';

let wrapper;

describe('Manager View Test Suite ', () => {
  it('Test snapshot using the initial state', () => {
    wrapper = mount(

      <Router>
        <ManagerView data={ManagerViewData} />
      </Router>,

    );
    expect(wrapper).toMatchSnapshot();
  });
});
