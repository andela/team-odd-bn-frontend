import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import SubmitButton from '../../components/SubmitButton';
import apiCall from '../../helpers/apiCall';

describe('First React component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<SubmitButton />)).toMatchSnapshot();
  });
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('it Should dispatch signup success', async () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<SubmitButton handleSubmit={mockFn} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockFn.mock.calls).toBeDefined();
  });
});
