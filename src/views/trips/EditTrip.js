import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import Pagination from 'custom_react_pages';
import {
  fetchRequestsAction,
  editRequestAction,
  paginationAction,
  editTripsAction,
} from '../../redux/actions/tripsActions/fetchRequests';
import popUpAction from '../../redux/actions/popUpAction';
import { getTripAction } from '../../redux/actions/tripsActions/onewayActions';
import { changePageNo } from '../../redux/actions/PaginationAction';
import prev from '../../assets/images/prev_icon.png';
import next from '../../assets/images/next_icon.png';

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

    return (
      <div className="editPopupContainer">

        {data !== undefined && (
          <Pagination
            activePageStyle={{ backgroundColor: '#00b9f2', color: 'white' }}
            itemsPerPage={1}
            next={<img src={next} />}
            prev={<img src={prev} />}
            data={trips || []}
            pageName="Trip"
            pageButtons={10}
            onePage={(item, index) => (
              <div key={index} className="inputFields">
                <div className="saveEditedRequests">
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
            &times;
                  </button>
                </div>
                <>
                  <div className="editRequestFields">
                    <div className="label">Origin</div>
                    <div>
                      <select
                        value={item.originId}
                        name="originId"
                        id="originId"
                        onChange={(e) => trips && editTripsAction(
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
                        value={item.destinationId}
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
                        value={item.startDate}
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
                        value={item.returnDate}
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
                        value={item.reason}
                      />
                    </div>
                  </div>
                </>
                <div className="saveEditedRequests">
                  <button
                    type="button"
                    id="save"
                    onClick={async () => {
                      trips && await editRequestAction(id, { itinerary: trips });
                      await fetchRequestsAction(id);
                      this.props.popUpAction({
                        currentPopUp: 'editTrip',
                        editTrip: 'none',
                      });
                    }}
                  >
            save changes
                  </button>
                </div>
              </div>

            )}
          />
        )}
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
