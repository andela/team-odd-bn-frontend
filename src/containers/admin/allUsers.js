import React from 'react';
import CommonTable from '../../views/trips/CommonTable';
import SelectOption from '../../components/SelectOption';
import Status from '../../components/Status';
import { userRoleNav, tableHeads } from '../../constants/admin';

const allUsers = ({
  data, options, handleChange, paginationEnd,
  paginationStart,
  paginatedRequest,
  paginationAction,
}) => {
  const entities = paginatedRequest ? paginatedRequest.map((user) => [
    { className: 'firstName', attribute: user.firstName, key: 'firstName' },
    { className: 'LastName', attribute: user.lastName, key: 'lastName' },
    { className: 'Email', attribute: user.email, key: 'email' },
    { className: 'UserRole', attribute: user.role && user.role.type, key: 'roleId' },
    { className: 'EditRole', attribute: <SelectOption handleChange={handleChange} email={user.email} options={options} classname="selectOption" />, key: 'action' },
  ]) : [];

  return (
    <CommonTable
      data={data}
      paginationAction={paginationAction}
      paginationEnd={paginationEnd}
      paginationStart={paginationStart}
      paginatedRequest={paginatedRequest}
      navs={userRoleNav}
      tableHeads={tableHeads}
      entities={entities}
    />
  );
};


export default allUsers;
