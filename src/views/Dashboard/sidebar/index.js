import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopSide from './TopSide'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import SideDrawer from '../../../components/Sidebar/SideDrawer/SideDrawer'
import Backdrop from '../../../components/Sidebar/Backdrop/Backdrop'
import profileActions from '../../../redux/actions/profileActions'
import NotificationPanel from './NotificationPanel'
import '../../../assets/css/notification.scss'

export class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideDrawerOpen: false,
    }
  }

  componentDidMount() {
    const { getCurrentUserinfo } = this.props
    getCurrentUserinfo(this.props.viewProfile)
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen,
    }))
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    const { sideDrawerOpen } = this.state
    const { children } = this.props

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <> 
        <TopSide drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        <div className="both-side">
        <NotificationPanel display={this.state.display} />
          <LeftSide />
          <RightSide RightSideContent={children} />
        </div>
        {backdrop}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.viewProfile.profile,
    profileError: state.profileError,
    notification: state.notification,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUserinfo: () => dispatch(profileActions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
