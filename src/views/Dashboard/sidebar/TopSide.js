import React, { Component } from 'react';
import TopLeftSide from './TopLeftSide';
import TopRightSide from './TopRightSide';

// eslint-disable-next-line react/prefer-stateless-function
class TopSide extends Component {
  render() {
    const { drawerClickHandler } = this.props;
    return (
      <div className="top-side">
        <TopLeftSide drawerClickHandler={drawerClickHandler} />
        <div className="leaveSpaceBetweenTop-LeftAndTop-RightHeader" />
        <TopRightSide />
      </div>
    );
  }
}

export default TopSide;
