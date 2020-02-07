import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllUsers from './allUsers';
import {
  paginationAction, getRolesAction, newRoleInput, assignRole,
} from '../../redux/actions/admin/adminAction';
import { searchResults, searchInput } from '../../redux/actions/search/searchAction';
import getAllUsers from '../../redux/actions/getAllUsersActions';
import { handleFilter } from '../../helpers/filter';

let searchData = '';
export class UserRoles extends Component {
  componentDidMount() {
    this.props.searchResults();
    this.props.searchInput();
    this.props.getAllUsers();
    this.props.getRolesAction();
  }

  componentDidUpdate() {
    this.props.adminState.search.payload = undefined;
    this.props.adminState.admin.payload && this.props.getAllUsers();
    this.props.adminState.admin.payload = undefined;
    if (this.props.adminState.allUsers.users && this.props.adminState.search.payload) {
      const p = this.props.adminState.allUsers.users
      && this.props.adminState.allUsers.users.data;
      const e = {
        target: {
          value: document.getElementById('searchInput').value,
        },
      };

      this.props.adminState.search.payload = handleFilter(e, p);
    }
  }


  render() {
    const options = this.props.adminState.admin.allRoles
      && this.props.adminState.admin.allRoles.data;
    const data = this.props.adminState.allUsers.users
      && this.props.adminState.allUsers.users.data;

    searchData = this.props.adminState.search.payload;
    const userInput = this.props.adminState.search.input;
    const userSearch = [
      <div className="searchOption">
        <input
          data-test="dataFilter-test"
          className="search"
          id="searchInput"
          type="text"
          onChange={(e) => {
            const newData = handleFilter(e, data);
            this.props.searchResults(newData);
            this.props.searchInput(e.target.value.trimLeft());
            return handleFilter(e, data);
          }}
          placeholder="Search"
        />
        { userInput && (
        <div className="search-results-counter">
          {searchData && searchData.length}
          {' '}
Result(s) found
        </div>
        )}
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
  searchInput,
})(UserRoles);
