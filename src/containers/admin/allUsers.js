import React from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import CommonTable from '../../views/trips/CommonTable';
import SelectOption from '../../components/SelectOption';
import Status from '../../components/Status';
import { userRoleNav, tableHeads } from '../../constants/admin';
import { Paginate } from '../../helpers/Paginate';

const allUsers = ({
  options,
  handleChange,
  users,
  pageNo,
  itemsPerPage,
  userSearch,
  search,

}) => {
  const searchedData = search.payload;
  const paginatedData = users && {
    ...Paginate(searchedData || users, itemsPerPage),
  };
  // console.log('----->', users && Object.entries(paginatedData));

  const entities = users && (searchedData || paginatedData[pageNo]).map((user, index) => [
    { className: 'firstName', attribute: user.firstName, key: `firstName${index}` },
    { className: 'LastName', attribute: user.lastName, key: `lastName${index}` },
    { className: 'Email', attribute: user.email, key: `email${index}` },
    { className: 'UserRole', attribute: user.role && user.role.type, key: `roleId${index}` },
    { className: 'EditRole', attribute: <SelectOption handleChange={handleChange} email={user.email} classname="selectOption" options={options} />, key: `action${index}` },
  ]);


  return (
    <CommonTable
      userSearch={userSearch}
      data={users && Paginate(users, itemsPerPage)}
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
