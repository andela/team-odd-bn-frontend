import React from 'react';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import { approvalNavs, approvalTableHeads } from '../../constants/trips';

const AvailRequestsView = ({ data }) => {

  const entities = data ? data.map((request) => {
    return [
      { attribute: request.user && request.user.firstName, key: 'user' },
      { attribute: request.user && request.user.lastName, key: 'user' },
      { attribute: request.tripType.tripType, key: 'tripType' },
      { attribute: request.createdAt.slice(0, 10), key: 'created-at' },
      { attribute: <Action background="#34c6f3" url={`/trips/approval/${request.id}`} action="View" />, key: 'action' },
    ];
  }) : [];

  return <CommonTable navs={approvalNavs} tableHeads={approvalTableHeads} entities={entities} />;
};


export default AvailRequestsView;
