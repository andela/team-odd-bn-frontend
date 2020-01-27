import React from 'react';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import Status from '../../components/Status';
import { navs, tableHeads } from '../../constants/trips';
import verifyToken from '../../helpers/verifyToken';

const RequestsView = ({
  data, paginationEnd,
  paginationStart,
  paginatedRequest,
  paginationAction,
}) => {
  const entities = paginatedRequest ? paginatedRequest.map((request) => [
    { className: 'trip-type', attribute: request.tripType.tripType, key: 'tripType' },
    { className: 'statuses', attribute: <Status className={request.status.status} status={request.status.status} />, key: 'status' },
    { className: 'createdAt', attribute: request.createdAt.slice(0, 10), key: 'createdAt' },
    { className: 'action', attribute: <Action background="#34c6f3" url={`/requests/${request.id}`} action="View" />, key: 'action' },
  ]) : [];

  return (
    <CommonTable
      data={data}
      paginationAction={paginationAction}
      paginationEnd={paginationEnd}
      paginationStart={paginationStart}
      paginatedRequest={paginatedRequest}
      navs={navs}
      tableHeads={tableHeads}
      entities={entities}
    />
  );
};


export default RequestsView;
