import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import {
  fetchRequestsAction,
  editRequestAction,
  paginationAction,
  editTripsAction,
} from '../../redux/actions/tripsActions/fetchRequests';
import popUpAction from '../../redux/actions/popUpAction';
import { getTripAction } from '../../redux/actions/tripsActions/onewayActions';
import { changePageNo } from '../../redux/actions/PaginationAction';
import { Paginate } from '../../helpers/Paginate';
import { newTrip } from '../../constants/trips';

class Requests extends Component {
  async componentDidMount() {
    await this.props.getTripAction();
  }

  render() {
    const {
      singleRequestData,
      editTripsAction,
      cities,
      editRequestAction,
      id,
      changePageNo,
      fetchRequestsAction,
      pageNo,
    } = this.props;
    const { data } = singleRequestData;
    const { trips, ...rest } = data || { trips: [] };
    const tripChunks = data && Paginate(trips, 1);
    const paginatedTrips = data && { ...tripChunks };
    const currentPage = data && paginatedTrips[pageNo];
    return (
      <div className="editPopupContainer">
        <div className="saveEditedRequests">
          <button
            type="button"
            id="save"
            onClick={async () => {
              trips && (await editRequestAction(id, { itinerary: trips }));
              await fetchRequestsAction(id);
              this.props.popUpAction({
                currentPopUp: 'editTrip',
                editTrip: 'none',
              });
            }}
          >
            save changes
          </button>
          <button
            type="button"
            id="cancel"
            onClick={() => {
              this.props.popUpAction({
                currentPopUp: 'editTrip',
                editTrip: 'none',
              });
            }}
          >
            cancel
          </button>
        </div>
        {data
          && currentPage && currentPage.map((trip, index) => (
            <div key={index} className="inputFields">
              <div className="editRequestFields">
                <div className="label">Origin</div>
                <div>
                  <select
                    value={currentPage[0].originId}
                    name="originId"
                    id="originId"
                    onChange={(e) => trips
                      && editTripsAction(
                        { data: trips },
                        {
                          tripIndex: pageNo,
                          name: e.target.name,
                          value: e.target.value,
                        },
                        rest,
                      )}
                  >
                    {cities
                      && cities.map((city, index) => (
                        <option name="originId" key={city.id} value={city.id}>
                          {city.city}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div key={`${index}nd`} className="editRequestFields">
                <div className="label">Destination</div>
                <div>
                  <select
                    value={currentPage[0].destinationId}
                    name="destinationId"
                    id="destinationId"
                    onChange={(e) => editTripsAction(
                      { data: trips },
                      {
                        tripIndex: pageNo,
                        name: e.target.name,
                        value: e.target.value,
                      },
                      rest,
                    )}
                  >
                    {cities
                      && cities.map((city) => (
                        <option
                          name="destinationId"
                          key={city.id}
                          value={city.id}
                        >
                          {city.city}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div key={`${index}nth`} className="editRequestFields">
                <div className="label">Start date</div>
                <div>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={currentPage[0].startDate}
                    onChange={(e) => editTripsAction(
                      { data: trips },
                      {
                        tripIndex: pageNo,
                        name: e.target.name,
                        value: e.target.value,
                      },
                      rest,
                    )}
                  />
                </div>
              </div>
              <div key={`${index}rd`} className="editRequestFields">
                <div className="label">Return date</div>
                <div>
                  <input
                    type="date"
                    onChange={(e) => editTripsAction(
                      { data: trips },
                      {
                        tripIndex: pageNo,
                        name: e.target.name,
                        value: e.target.value,
                      },
                      rest,
                    )}
                    id="returnDate"
                    name="returnDate"
                    value={currentPage[0].returnDate}
                  />
                </div>
              </div>
              <div key={`${index}th`} className="editRequestFields">
                <div className="label">reason</div>
                <div>
                  <textarea
                    type="text"
                    onChange={(e) => editTripsAction(
                      { data: trips },
                      {
                        tripIndex: pageNo,
                        name: e.target.name,
                        value: e.target.value,
                      },
                      rest,
                    )}
                    name="reason"
                    value={currentPage[0].reason}
                  />
                </div>
              </div>
              <div key={`${index}stnd`} className="corasselPopUpButtons">
                <div className="pageArrows">
                  <button
                    id="page1"
                    type="button"
                    onClick={() => changePageNo(pageNo - 1 < 0 ? 0 : pageNo - 1)}
                  >
                    <a href={`#${pageNo - 1}`}> &#60;&#60;</a>
                  </button>
                </div>
                <div className="pageButtons">
                  {tripChunks
                    && tripChunks.map((trip, index) => (
                      <div className="" key={index}>
                        <button
                          id="page2"
                          type="button"
                          onClick={() => changePageNo(index)}
                        >
                          {index}
                        </button>
                      </div>
                    ))}
                </div>
                <div className="pageArrows">
                  <button
                    id="page3"
                    type="button"
                    onClick={() => changePageNo(
                      pageNo === tripChunks.length - 1 ? pageNo : pageNo + 1,
                    )}
                  >
                    <a href={`#${pageNo}`}> &#62;&#62;</a>
                  </button>
                </div>
              </div>
            </div>
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  singleRequestData: state.trips.requests.singleRequestData,
  cities: state.trips.tripRequests.getCity,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
});
const actions = {
  fetchRequestsAction,
  paginationAction,
  popUpAction,
  editTripsAction,
  getTripAction,
  editRequestAction,
  changePageNo,
};

export default connect(mapStateToProps, actions)(Requests);
