import React from 'react';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import { searchNavs, searchTableHeads } from '../../constants/trips';

const RequestsView = ({ getStatsInput, tripStatsCounter }) => {
  let data;
  if (getStatsInput.tripType === 1) {
    data = tripStatsCounter.onewayTripStats && tripStatsCounter.onewayTripStats.userTrips;
  }
  if (getStatsInput.tripType === 2) {
    data = tripStatsCounter.roundTripStats && tripStatsCounter.roundTripStats.userTrips;
  }
  if (getStatsInput.tripType === 3) {
    data = tripStatsCounter.multiTripStats && tripStatsCounter.multiTripStats.userTrips;
  }

  const entities = data ? data.map((request) => [
    { className: 'tripType', attribute: request.originId, key: 'tripType' },
    { className: 'createdAt', attribute: request.destinationId, key: 'createdAt' },
    { className: 'createdAt', attribute: request.createdAt.slice(0, 10), key: 'date' },
    { className: 'action', attribute: <Action background="#34c6f3" url={`/requests/${request.tripRequestId}`} action="View" />, key: 'action' },
  ]) : [];

  return <CommonTable navs={searchNavs} tableHeads={searchTableHeads} entities={entities} />;
};


export default RequestsView;
