import React from 'react';
import { connect } from 'react-redux';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import Status from '../../components/Status';
import { navs, tableHeads } from '../../constants/trips';
import { Paginate } from '../../helpers/Paginate';

const RequestsView = ({
  requestsData,
  pageNo,
  itemsPerPage,
}) => {
  const paginatedData = requestsData.data && { ...Paginate(requestsData.data, itemsPerPage) };
  const entities = requestsData.data && paginatedData[pageNo].map((request) => [
    { className: 'trip-type', attribute: request.tripType.tripType, key: 'tripType' },
    { className: 'statuses', attribute: <Status className={request.status.status} status={request.status.status} />, key: 'status' },
    { className: 'createdAt', attribute: request.createdAt.slice(0, 10), key: 'createdAt' },
    { className: 'action', attribute: <Action background="#34c6f3" url={`/requests/${request.id}`} action="View" />, key: 'action' },
  ]);

  return (
    <CommonTable
      data={requestsData.data && Paginate(requestsData.data, itemsPerPage)}
      navs={navs}
      tableHeads={tableHeads}
      entities={entities}
    />
  );
};
export const mapStateToProps = (state) => ({
  requestsData: state.trips.requests.requestsData,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
});


export default connect(mapStateToProps, null)(RequestsView);
