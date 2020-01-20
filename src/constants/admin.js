import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleFilter } from '../helpers/filter';
import { checkPrevilege } from '../helpers/checkPrevilege';
import usersIcon from '../assets/images/users.png';

export const tableHeads = [
  { className: 'fNameNav', attribute: 'First name', key: 'firstName' },
  { className: 'lNameNav', attribute: 'Last name', key: 'lastName' },
  { className: 'emailNav', attribute: 'Email', key: 'email' },
  { className: 'role', attribute: 'Role', key: 'role' },
  { className: 'EditRoleNav', attribute: 'Edit role', key: 'editRole' },
];
export const userRoleNav = (data) => {
  let newData;
  const roleNavs = [
    {
      className: 'tableHeader',
      attribute: <h2>Assign Roles</h2>,
      key: 'tableHeader',
    },
  ];
  return { roleNavs, newData };
};

export const usersNav = () => checkPrevilege(1) && (
<div>
  <img src={usersIcon} alt="Users icon" />
  <span>Users</span>
</div>
);
export const mapStateToProps = (state) => ({
  admin: state.allUsers.users,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
});

export default connect(mapStateToProps, {})(userRoleNav);
