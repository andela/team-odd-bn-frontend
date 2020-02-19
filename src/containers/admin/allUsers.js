import React from 'react';
import { connect } from 'react-redux';
import CommonTable from '../../views/trips/CommonTable';
import SelectOption from '../../components/SelectOption';
import { userRoleNav, tableHeads } from '../../constants/admin';

const allUsers = ({
  options,
  handleChange,
  users,
  userSearch,
  search,

}) => {
  const searchedData = search.payload;

  const entities = users && (users.length ? ((searchedData || users).map((user, index) => [
    { className: 'firstName', attribute: user.firstName, key: `firstName${index}` },
    { className: 'LastName', attribute: user.lastName, key: `lastName${index}` },
    { className: 'Email', attribute: user.email, key: `email${index}` },
    { className: 'UserRole', attribute: user.role && user.role.type, key: `roleId${index}` },
    { className: 'EditRole', attribute: <SelectOption handleChange={handleChange} email={user.email} classname="selectOption" options={options} />, key: `action${index}` },
  ])) : []);


  return (
    <CommonTable
      userSearch={userSearch}
      navs={users && userRoleNav(users).roleNavs}
      tableHeads={tableHeads}
      entities={entities}
    />
  );
};

export const mapStateToProps = (state) => ({
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
  search: state.search,
});


export default connect(mapStateToProps, null)(allUsers);
