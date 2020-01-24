import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
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
export const userRoleNav = [
  {
    className: 'tableHeader',
    attribute: <h2>Assign Roles</h2>,
    key: 'tableHeader',
  },
  {
    className: 'search',
    attribute: <input data-test="dataFilter-test" id="searchInput" type="text" onChange={(e) => { handleFilter(e, 'Email'); }} placeholder="search by email" />,
    key: 'search',
  },
];

export const usersNav = () => (
  checkPrevilege(1) && (
    <div>
      <img src={usersIcon} alt="Users icon" />
      <span>Users</span>
    </div>

  )
);
