import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import dotenv from 'dotenv';
import verifyToken from '../helpers/verifyToken';
import ProtectRoutes from '../Routers/protectRoutes';
import generateToken from '../helpers/generateToken';
import mockData from '../__mocks__/fileMock';

// mock browser route
import rrd from 'react-router-dom';

rrd.BrowserRouter = ({ children }) => <div>{ children }</div>;


dotenv.config();

const { jwtTokenMocks } = mockData;
const { JWT_KEY } = process.env;

describe('Verify user token', () => {
  let wrapper;
  it('Expect protect components to render ', () => {
    wrapper = shallow(<ProtectRoutes {...jwtTokenMocks} />);
    expect(wrapper.props().token).toBe('I am token');
    expect(wrapper.props().error).toEqual({ message: 'Invalid token' });
  });

  it('Expect token to pass', () => {
    const randomToken = generateToken({ name: 'John' }, JWT_KEY);
    const result = verifyToken(randomToken);
    expect(result.name).toEqual('John');
  });
});


describe('Expect to check all tokens', () => {
  const wrapper = render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <ProtectRoutes {...jwtTokenMocks} />
    </MemoryRouter>,
  );

  it('Expect token to pass', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
