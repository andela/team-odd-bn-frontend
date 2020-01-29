import React from 'react';
import { Link } from 'react-router-dom';
import StatsNav from '../components/GetStatsNav';

export const tableHeads = [
  { className: 'tripTypeNav', attribute: 'Trip Type', key: 'tripType' },
  { className: 'status', attribute: 'Status', key: 'status' },
  { className: 'createdAtNav', attribute: 'Requested On', key: 'Requested On' },
  { className: 'actionNav', attribute: 'Action', key: 'action' },
];
export const navs = [
  {
    className: 'tableHeader',
    attribute:
  <div className="navRequests">
    <div className="travelRequestHeaders"><h2>My Travel Requests</h2></div>
    <div className="newTrip">
      <Link className="add-newTrip-Link" to="/trips/oneway">Add New Trip</Link>
    </div>
  </div>,
    key: 'tableHeader',
  },

];

export const approvalNavs = [
  { className: 'tableHeader', attribute: <h2>Travel Requests For Approval</h2>, key: 'tableHeader' },

];
export const approvalTableHeads = [
  { attribute: 'First Name', key: 'firstname' },
  { attribute: 'Last Name', key: 'lastname' },
  { attribute: 'Trip Type', key: 'tripType' },
  { attribute: 'Requested On', key: 'requested-on' },
  { attribute: 'Action', key: 'action' },
];

export const searchTableHeads = [

  { className: 'tripTypeNav', attribute: 'Origin', key: 'tripType' },
  { className: 'createdAtNav', attribute: 'Destination', key: 'createdAt' },
  { className: 'status', attribute: 'Date', key: 'status' },
  { className: 'actionNav', attribute: 'Action', key: 'action' },
];
export const searchNavs = [
  { className: 'tableHeader', attribute: <StatsNav />, key: 'tableHeader' },
];
export const newTrip = {
  originId: '',
  destinationId: '',
  reason: '',
  startDate: '',
  returnDate: '',
};
