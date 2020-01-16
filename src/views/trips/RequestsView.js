import React from 'react';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import Status from '../../components/Status';
import { navs, tableHeads } from '../../constants/trips';

const RequestsView = ({ data }) => {
  const entities = data ? data.map((request) => [
    { className: 'tripId', attribute: request.id, key: 'tripId' },
    { className: 'tripType', attribute: request.tripType.tripType, key: 'tripType' },
    { className: 'createdAt', attribute: request.createdAt.slice(0, 10), key: 'createdAt' },
    { className: 'status', attribute: <Status className={request.status.status} status={request.status.status} />, key: 'status' },
    { className: 'action', attribute: <Action background="#34c6f3" url={`/requests/${request.id}`} action="View" />, key: 'action' },
  ]) : [];

  return <CommonTable navs={navs} tableHeads={tableHeads} entities={entities} />;
};


export default RequestsView;
