import React from 'react';
import { showDivs, plusDivs } from '../../helpers/carousel';

const htmlCollection = [{
  type: 'div',
  key: null,
  ref: null,
  className: 'trip',
  style: {},
  props: { className: 'trip', children: 'A' },
},
{
  type: 'div',
  key: null,
  ref: null,
  className: 'trip',
  style: {},
  props: { className: 'trip', children: 'A' },
},
{
  type: 'div',
  key: null,
  ref: null,
  className: 'trip',
  style: {},
  props: { className: 'trip', children: 'A' },
}];

describe('Signup Tests ', () => {
  it('Should handle signup success', () => {
    const cc = plusDivs(1, htmlCollection);
    expect(cc).toEqual(undefined);
  });
});
