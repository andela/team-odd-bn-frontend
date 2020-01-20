import React from 'react';
import CommonTable from './CommonTable';

const RequestsView = ({
  data,
  params,
  approveRequest,
  updateCommentInputAction,
  fetchRequestCommentsAction,
  deleteCommentAction,
  postCommentsAction,
  input,
  tripRequestId,

}) => (
  <CommonTable
    approveRequest={approveRequest}
    params={params}
    tripRequestId={tripRequestId}
    input={input}
    postCommentsAction={postCommentsAction}
    updateCommentInputAction={updateCommentInputAction}
    trips={data && data.trips}
    comments={data && data.comments && data.comments.data || []}
    deleteCommentAction={deleteCommentAction}
    fetchRequestCommentsAction={fetchRequestCommentsAction}

  />
);

export default RequestsView;
