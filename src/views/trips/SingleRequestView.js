import React from 'react';
import CommonTable from './CommonTable';

const RequestsView = ({ data }) => <CommonTable trips={data && data.trips} comments={data && data.comments && data.comments.data || []} />;

export default RequestsView;
