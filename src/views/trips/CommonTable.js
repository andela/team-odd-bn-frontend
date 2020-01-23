import React, { Component } from 'react';
import CommonSingleRequest from './CommonSingleRequest';
import CommonRequests from './CommonRequests';

class RequestView extends Component {
  render() {
    const {
      params,
      approveRequest,
      trips,
      comments,
      navs,
      tableHeads,
      entities,
      input,
      updateCommentInputAction,
      postCommentsAction,
      tripRequestId,
      deleteCommentAction,
      fetchRequestCommentsAction,
      paginationEnd,
      paginationStart,
      paginatedRequest,
      paginationAction,
      data,
    } = this.props;

    return (
      <div className="tableMainContainer">
        <div className="tableContainer">
          {trips && comments && (
            <CommonSingleRequest

              tripRequestId={tripRequestId}
              updateCommentInputAction={updateCommentInputAction}
              postCommentsAction={postCommentsAction}
              trips={trips}
              approveRequest={approveRequest}
              comments={comments}
              params={params}
              input={input}
              deleteCommentAction={deleteCommentAction}
              fetchRequestCommentsAction={fetchRequestCommentsAction}

            />
          )}

          {navs && tableHeads && entities && (
            <CommonRequests
              data={data}
              paginationAction={paginationAction}
              navs={navs}
              tableHeads={tableHeads}
              entities={entities}
              paginationEnd={paginationEnd}
              paginationStart={paginationStart}
              paginatedRequest={paginatedRequest}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RequestView;
