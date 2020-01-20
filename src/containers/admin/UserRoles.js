import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllUsers from './allUsers';
import {
  paginationAction, getRolesAction, newRoleInput, assignRole,
} from '../../redux/actions/admin/adminAction';
import { searchResults } from '../../redux/actions/search/searchAction';
import getAllUsers from '../../redux/actions/getAllUsersActions';
import { handleFilter } from '../../helpers/filter';

export class UserRoles extends Component {
  componentDidMount() {
    this.props.searchResults();
    this.props.getAllUsers();
    this.props.getRolesAction();
  }

  componentDidUpdate() {
    this.props.adminState.admin.payload && this.props.getAllUsers();
    this.props.adminState.admin.payload = undefined;
  }


  render() {
    const options = this.props.adminState.admin.allRoles
      && this.props.adminState.admin.allRoles.data;
    const data = this.props.adminState.allUsers.users
      && this.props.adminState.allUsers.users.data;
    const searchData = this.props.adminState.search.payload;

    const userSearch = [
      <div className="searchOption">
        <input
          data-test="dataFilter-test"
          className="search"
          id="searchInput"
          type="text"
          onChange={(e) => {
            const newData = handleFilter(e, data, 'email');
            this.props.searchResults(newData);
            return handleFilter(e, data, 'email');
          }}
          placeholder="search by email"
        />
        ,
      </div>,
    ];

    return (
      <>
        <AllUsers
          userSearch={userSearch}
          data-test="userRoles-test"
          handleChange={this.props.assignRole}
          options={options}
          users={searchData || data}
        />
      </>
    );
  }
}
export const mapStateToProps = (state) => ({
  adminState: state,
});
export default connect(mapStateToProps, {
  getAllUsers,
  getRolesAction,
  newRoleInput,
  assignRole,
  paginationAction,
  searchResults,
})(UserRoles);
