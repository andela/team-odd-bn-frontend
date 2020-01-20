/* eslint-disable no-unused-expressions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plusDivs } from '../../helpers/carousel';
import verifyToken from '../../helpers/verifyToken';
import trashIcon from '../../assets/images/trash.png';
import PopUp from '../../components/PopUp';
import popUpAction from '../../redux/actions/popUpAction';
import { Paginate } from '../../helpers/Paginate';
import { changePageNo } from '../../redux/actions/PaginationAction';
import {
  deleteCommentAction, fetchRequestCommentsAction,
  fetchRequestsAction,
  editRequestAction,
  paginationAction,
  editTripsAction,
} from '../../redux/actions/tripsActions/fetchRequests';


class RequestView extends Component {
  render() {
    const {
      id,
      commentId,
      deleteCommentAction,
      fetchRequestCommentsAction,
      popUpAction,
    } = this.props;
    return (
      <div className="popupContainer">
        <div className="popupMessage">Are you sure you want to delete?</div>
        <div className="popupButtons">
          <div>
            <button
              type="button"
              onClick={async () => {
                popUpAction({
                  currentPopUp: 'deleteComment',
                  deleteComment: 'none',
                });
                await deleteCommentAction(commentId);
                await fetchRequestCommentsAction(id);
              }}
              id="delete"
            >
                  delete
            </button>
          </div>
          <div>
            <button
              type="button"
              id="cancel"
              onClick={async () => {
                popUpAction({
                  currentPopUp: 'deleteComment',
                  deleteComment: 'none',
                });
              }}
            >
                  cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const actions = {
  deleteCommentAction,
  fetchRequestCommentsAction,
  fetchRequestsAction,
  paginationAction,
  popUpAction,
  editTripsAction,
  editRequestAction,
  changePageNo,
};

export default connect(null, actions)(RequestView);
