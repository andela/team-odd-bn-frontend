import React from 'react';
import { connect } from 'react-redux';
import CommonTable from './CommonTable';
import Action from '../../components/Action';
import {
  searchResults,
  searchKey,
} from '../../redux/actions/search/searchAction';
import { approvalNavs, approvalTableHeads } from '../../constants/trips';
import { Paginate } from '../../helpers/Paginate';
import { handleFilter } from '../../helpers/filter';

const AvailRequestsView = ({
  availRequests,
  pageNo,
  itemsPerPage,
  search,
  searchKey,
  searchResults,
}) => {
  const searchedData = search.payload;
  const managerData = availRequests && availRequests.data;
  const data = managerData;

  const entities = managerData
    && (managerData.length ? (searchedData || managerData).map((request) => [
      { attribute: request.user && request.user.firstName, key: 'firstName' },
      { attribute: request.user && request.user.lastName, key: 'lastName' },
      { attribute: request.tripType.tripType, key: 'tripType' },
      { attribute: request.createdAt.slice(0, 10), key: 'created-at' },
      {
        attribute: (
          <Action
            background="#34c6f3"
            url={`/trips/approval/${request.id}`}
            action="View"
          />
        ),
        key: 'action',
      },
    ]) : []);
  const userSearch = [
    <div className="searchOption">
      <select
        className="search"
        defaultValue=""
        onChange={(e) => {
          searchKey(e.target.value);
        }}
      >
        <option value="" disabled>
          Search by
        </option>
        <option value="createdAt">Date requested</option>
        <option value="tripType">Trip type</option>
        <option value="firstName">First name</option>
        <option value="lastName">Last name</option>
        <option value="lastName">Any</option>
      </select>
      <input
        data-test="dataFilter-test"
        className="search"
        id="searchInput"
        type="text"
        onChange={(e) => {
          const newData = handleFilter(e, data, search.key || 'manager.trips.any');
          searchResults(newData);
        }}
        placeholder="Search trips"
      />
    </div>,
  ];
  return (
    <CommonTable
      data={
        managerData && Paginate(searchedData || managerData, itemsPerPage)
      }
      navs={approvalNavs}
      tableHeads={approvalTableHeads}
      entities={entities}
      userSearch={userSearch}
    />
  );
};

export const mapStateToProps = (state) => ({
  availRequests: state.trips.availRequests.allRequests,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
  search: state.search,
});

export default connect(mapStateToProps, { searchResults, searchKey })(
  AvailRequestsView,
);
