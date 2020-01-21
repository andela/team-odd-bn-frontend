import React from 'react';

export const tableHeads = [
  { className: 'tripIdNav', attribute: 'Trip Id', key: 'tripId' },
  { className: 'tripTypeNav', attribute: 'Trip Type', key: 'tripType' },
  { className: 'createdAtNav', attribute: 'Created At', key: 'createdAt' },
  { className: 'status', attribute: 'Status', key: 'status' },
  { className: 'actionNav', attribute: 'Action', key: 'action' },
];
export const navs = [
  { className: 'tableHeader', attribute: <h2>My Travel Requests</h2>, key: 'tableHeader' },
  { className: 'search', attribute: <input type="text" placeholder="search by date" />, key: 'search' },
];

export const approvalNavs = [
  { className: 'tableHeader', attribute: <h2>Travel Requests For Approval</h2>, key: 'tableHeader' },
  { className: 'search', attribute: <input type="text" placeholder="search by date" />, key: 'search' },
];
export const approvalTableHeads = [
  { attribute: 'First Name', key: 'firstname' },
  { attribute: 'Last Name', key: 'lastname' },
  { attribute: 'Trip Type', key: 'tripType' },
  { attribute: 'Created At', key: 'created-at' },
  { attribute: 'Action', key: 'action' },
];
