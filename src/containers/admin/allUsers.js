import React from 'react';
import { connect } from 'react-redux';
import CommonTable from '../../views/trips/CommonTable';
import SelectOption from '../../components/SelectOption';
import Status from '../../components/Status';
import { userRoleNav, tableHeads } from '../../constants/admin';
import { Paginate } from '../../helpers/Paginate';

const allUsers = ({
  options,
  handleChange,
  admin,
  pageNo,
  itemsPerPage,
}) => {
  const entities = admin && { ...Paginate(admin.data, itemsPerPage) }[pageNo].map((user, index) => [
    { className: 'firstName', attribute: user.firstName, key: `firstName${index}` },
    { className: 'LastName', attribute: user.lastName, key: `lastName${index}` },
    { className: 'Email', attribute: user.email, key: `email${index}` },
    { className: 'UserRole', attribute: user.role && user.role.type, key: `roleId${index}` },
    { className: 'EditRole', attribute: <SelectOption handleChange={handleChange} email={user.email} classname="selectOption" options={options} />, key: `action${index}` },
  ]);

  return (
    <CommonTable
      data={admin && Paginate(admin.data, itemsPerPage)}
      navs={userRoleNav}
      tableHeads={tableHeads}
      entities={entities}
    />
  );
};

export const mapStateToProps = (state) => ({
  admin: state.allUsers.users,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
});


export default connect(mapStateToProps, null)(allUsers);
