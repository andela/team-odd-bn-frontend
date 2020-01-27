import React from 'react';
import { connect } from 'react-redux';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import { approvalNavs, approvalTableHeads } from '../../constants/trips';
import { Paginate } from '../../helpers/Paginate';

const AvailRequestsView = ({ availRequests, pageNo, itemsPerPage }) => {
  const paginatedData = availRequests && availRequests.data;

  const entities = paginatedData
  && { ...Paginate(paginatedData, itemsPerPage) }[pageNo].map((request) => [
    { attribute: request.user && request.user.firstName, key: 'firstName' },
    { attribute: request.user && request.user.lastName, key: 'lastName' },
    // { attribute: request.tripType.tripType, key: 'tripType' },
    // { attribute: request.createdAt.slice(0, 10), key: 'created-at' },
    { attribute: <Action background="#34c6f3" url={`/trips/approval/${request.id}`} action="View" />, key: 'action' },
  ]);

  return (
    <CommonTable
      data={paginatedData && Paginate(paginatedData, itemsPerPage)}
      navs={approvalNavs}
      tableHeads={approvalTableHeads}
      entities={entities}
    />
  );
};


export const mapStateToProps = (state) => ({
  availRequests: state.trips.availRequests.allRequests,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
});


export default connect(mapStateToProps, null)(AvailRequestsView);
