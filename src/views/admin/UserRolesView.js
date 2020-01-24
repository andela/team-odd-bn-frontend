import React from 'react';
import dotenv from 'dotenv';
import '../../assets/css/authentication.scss';
import UserRoles from '../../containers/admin/UserRoles';
import Dashboard from '../Dashboard/sidebar/index';

dotenv.config();

const UserRolesView = () => (
  <Dashboard data-testid="userRoles-View">
    <UserRoles />
  </Dashboard>
);
export default UserRolesView;
