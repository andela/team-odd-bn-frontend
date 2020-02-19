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
    const {
      searchResults, searchInput, getAllUsers, getRolesAction,
    } = this.props;
    searchResults();
    searchInput();
    getAllUsers();
    getRolesAction();
  }

  componentDidUpdate() {
    const { adminState, getAllUsers } = this.props;
    const { search, admin, allUsers } = adminState;
    search.payload = undefined;
    admin.payload && getAllUsers();
    admin.payload = undefined;
    if (allUsers.users && search.payload) {
      const p = allUsers.users
      && allUsers.users.data;
      const e = {
        target: {
          value: document.getElementById('searchInput').value,
        },
      };

      search.payload = handleFilter(e, p);
    }
  }


  render() {
    const {
      adminState, searchResults, searchInput, assignRole,
    } = this.props;
    const options = adminState.admin.allRoles
      && adminState.admin.allRoles.data;
    const data = adminState.allUsers.users
      && adminState.allUsers.users.data;

    searchData = adminState.search.payload;
    const userInput = adminState.search.input;
    const userSearch = [
      <div className="searchOption">
        <input
          data-test="dataFilter-test"
          className="search"
          id="searchInput"
          type="text"
          onChange={(e) => {
            const newData = handleFilter(e, data);
            searchResults(newData);
            searchInput(e.target.value.trim());
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
          handleChange={assignRole}
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
