import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleRequestView from '../../views/trips/SingleRequestView';
import Dashboard from '../../views/Dashboard/sidebar';
import {
  fetchSingleRequestsAction,
  fetchRequestCommentsAction,
  updateCommentInputAction,
  postCommentsAction,
  deleteCommentAction,
} from '../../redux/actions/tripsActions/fetchRequests';
import verifyToken from '../../helpers/verifyToken';
import tokenExist from '../../helpers/tokenExist';
import approveRequest from '../../redux/actions/tripsActions/approveRequestAction';
import Spinner from '../../components/Spinner';

class Requests extends Component {
  async componentDidMount() {
    const {
      fetchSingleRequestsAction,
      fetchRequestCommentsAction,
    } = this.props;
    const { tripRequestId } = this.props.match.params;
    await fetchSingleRequestsAction(tripRequestId);
    await fetchRequestCommentsAction(tripRequestId);
    if (this.props.profileError.error
      || this.props.profileError.message === 'You have provided an invalid token') {
      return this.props.history.push('/signin');
    }
  }

  render() {
    const {
      updateCommentInputAction,
      postCommentsAction, fetchRequestCommentsAction,
      approveRequest,
      deleteCommentAction, stateObject,
    } = this.props;

    const {
      singleRequestData,
      requestCommentsData,
      postCommentInput,
      postCommentData,
      requestsSpinnerStatus,

    } = stateObject;
    const { approveRequestMessage } = this.props.availRequests;
    return (
      <>
        {requestsSpinnerStatus ? (
          <Spinner />
        ) : (
          ''
        )}
        <Dashboard>
          <SingleRequestView
            tripRequestId={this.props.match.params.tripRequestId}
            data={{ comments: requestCommentsData }}
            updateCommentInputAction={updateCommentInputAction}
            input={postCommentInput}
            postCommentsAction={postCommentsAction}
            deleteCommentAction={deleteCommentAction}
            fetchRequestCommentsAction={fetchRequestCommentsAction}
            approveRequest={approveRequest}
            params={this.props.match.params}
          />
        </Dashboard>
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  stateObject: state.trips.requests,
  availRequests: state.trips.availRequests,
});

const actions = {
  fetchRequestCommentsAction,
  fetchSingleRequestsAction,
  approveRequest,
  updateCommentInputAction,
  postCommentsAction,
  deleteCommentAction,
};

export default connect(mapStateToProps, actions)(Requests);
