import React from 'react';
import CommonTable from './CommonTable';

const RequestsView = ({ data, approveRequest, params }) => <CommonTable trips={data && data.trips} params={params} approveRequest={approveRequest} comments={data && data.comments && data.comments.data || []} />;

export default RequestsView;
