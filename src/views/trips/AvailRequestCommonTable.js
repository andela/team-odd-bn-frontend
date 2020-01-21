import React, { Component } from 'react';
import CommonAvailRequest from './CommonAvailRequest';
import CommonRequests from './CommonRequests';

class RequestView extends Component {
  render() {
    const {
      trips, comments, navs, tableHeads, entities,approveRequest,params
    } = this.props;

    return (
      <div className="tableMainContainer">
        <div className="tableContainer">
          {trips && comments && (
            <CommonAvailRequest
              trips={trips}
              comments={comments}
              approveRequest={approveRequest}
              params={params}
            />
          )}

          {navs && tableHeads && entities && (
            <CommonRequests
              navs={navs}
              tableHeads={tableHeads}
              entities={entities}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RequestView;
