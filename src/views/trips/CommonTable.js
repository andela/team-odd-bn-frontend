import React, { Component } from 'react';
import CommonSingleRequest from './CommonSingleRequest';
import CommonRequests from './CommonRequests';

class RequestView extends Component {
  render() {
    const {
      trips, comments, navs, tableHeads, entities,
    } = this.props;

    return (
      <div className="tableMainContainer">
        <div className="tableContainer">
          {trips && comments && (
            <CommonSingleRequest
              trips={trips}
              comments={comments}
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
