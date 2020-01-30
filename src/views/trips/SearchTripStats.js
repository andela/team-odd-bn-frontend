import React from 'react';
import { connect } from 'react-redux';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import { searchNavs, searchTableHeads } from '../../constants/trips';
import { Paginate } from '../../helpers/Paginate';

const RequestsView = ({ getStats, pageNo, itemsPerPage }) => {
  const { getStatsInput, tripStatsCounter } = getStats;

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
  const paginatedData = data && Paginate(data, itemsPerPage);
  const currentPageItems = paginatedData
  && paginatedData.length > 0
    ? { ...paginatedData }[pageNo]
    : [];

  const entities = data && data.map((request) => [
    { className: 'tripType', attribute: request.originId, key: 'tripType' },
    { className: 'createdAt', attribute: request.destinationId, key: 'createdAt' },
    { className: 'createdAt', attribute: request.createdAt && request.createdAt.slice(0, 10), key: 'date' },
    { className: 'action', attribute: <Action background="#34c6f3" url={`/requests/${request.tripRequestId}`} action="View" />, key: 'action' },
  ]);

  return (
    <CommonTable
      data={paginatedData}
      navs={searchNavs}
      tableHeads={searchTableHeads}
      entities={entities || []}
    />
  );
};


export const mapStateToProps = (state) => ({
  getStats: state.trips.getStats,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
});


export default connect(mapStateToProps, null)(RequestsView);
