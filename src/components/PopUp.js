import React, { Component } from 'react';
import dotenv from 'dotenv';
import '../assets/css/signup.scss';
import '../assets/css/signin.scss';
import propTypes from 'prop-types';

dotenv.config();

class SubmitButton extends Component {
  render() {
    const {
      deleteCommentAction, fetchRequestCommentsAction, commentId, tripRId, display, style,
    } = this.props;

    return (
      <div
        className="confirmPopup"
        style={{
          display: style,
        }}
      >
        <div className="popupContainer">
          <div className="popupMessage">Are you sure you want to delete?</div>
          <div>
            <div>
              <button
                type="button"
                onClick={async () => {
                  await deleteCommentAction(commentId);
                  await fetchRequestCommentsAction(tripRId);
                  display({
                    display: 'none',
                  });
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
                  tdisplay({
                    display: 'none',
                  });
                }}
              >
      cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SubmitButton;
