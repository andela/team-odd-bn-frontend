import React from 'react';
import { PaginationStyle, Paginate } from '../../helpers/Paginate';

const htmlCollection = [{
  type: 'div',
  key: null,
  ref: null,
  className: 'trip',
  style: {},
  props: { className: 'trip', children: 'A' },
  children: [{
    type: 'div',
    key: null,
    ref: null,
    className: 'trip',
    style: {},
    props: { className: 'trip', children: 'A' },
  }, {
    type: 'div',
    key: null,
    ref: null,
    className: 'trip',
    style: {},
    props: { className: 'trip', children: 'A' },
  }],
},
{
  type: 'div',
  key: null,
  ref: null,
  className: 'trip',
  style: {},
  props: { className: 'trip', children: 'A' },
  children: [{
    type: 'div',
    key: null,
    ref: null,
    className: 'trip',
    style: {},
    props: { className: 'trip', children: 'A' },
  }, {
    type: 'div',
    key: null,
    ref: null,
    className: 'trip',
    style: {},
    props: { className: 'trip', children: 'A' },
  }],
},
{
  type: 'div',
  key: null,
  ref: null,
  className: 'trip',
  style: {},
  props: { className: 'trip', children: 'A' },
  children: [{
    type: 'div',
    key: null,
    ref: null,
    className: 'trip',
    style: {},
    props: { className: 'trip', children: 'A' },
  }, {
    type: 'div',
    key: null,
    ref: null,
    className: 'trip',
    style: {},
    props: { className: 'trip', children: 'A' },
  }],
},
];

describe('Test pagination ', () => {
  it('handle pagination styles', () => {
    const cc = PaginationStyle(htmlCollection, 2);
    console.log('======', cc);

    expect(cc).toEqual(undefined);
  });
  it('test pagination function', () => {
    const cc = Paginate([1, 2, 3, 4, 5, 6], 2);
    expect(cc).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
});
