import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import ToolTip from '../components/Sidebar/ToolTip'
import BackDrop from '../components/Sidebar/Backdrop/Backdrop'
import DrawerToggleButton from '../components/Sidebar/SideDrawer/DrawerToggleButton'
import SideDrawerDefault from '../components/Sidebar/SideDrawer/SideDrawer'
import { SideDrawer } from '../components/Sidebar/SideDrawer/SideDrawer'
import LeftSideDefault from '../views/Dashboard/sidebar/LeftSide'
import { LeftSide } from '../views/Dashboard/sidebar/LeftSide'
import RightSide from '../views/Dashboard/sidebar/RightSide'
import TopLeftSide from '../views/Dashboard/sidebar/TopLeftSide'
import { TopRightSide } from '../views/Dashboard/sidebar/TopRightSide'
import TopRightSideDefault from '../views/Dashboard/sidebar/TopRightSide'
import TopSide from '../views/Dashboard/sidebar/TopSide'
import SidebarDefault from '../views/Dashboard/sidebar/index'
import { Sidebar } from '../views/Dashboard/sidebar/index'
import getProfile from '../redux/actions/profileActions'
import { updateSpinnerStatus } from '../redux/actions/profileActions'
import apiCall from '../helpers/apiCall'
import ProfileReducers from '../redux/reducers/ProfileReducers'
import fileMock from '../__mocks__/fileMock'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let wrapper
let wrapperInstance
let store
let initialState

const { sidebarProps, userProfileMockData, signoutProps } = fileMock

describe('Expect tooltip to display', () => {
  const toolTipData = ToolTip('I am tooltip')
  it('Should display tooltip message', () => {
    expect(toolTipData.props.children).toBe('I am tooltip')
  })
})

describe('Expect Backdrop to be clickable', () => {
  wrapper = shallow(<BackDrop {...sidebarProps} />)
  it('Should display tooltip message', () => {
    expect(wrapper).toBeTruthy()
  })
})

describe('Expect SideDrawer to open', () => {
  wrapper = shallow(<DrawerToggleButton {...sidebarProps} />)
  it('Should SideDrawer to pop in', () => {
    expect(wrapper).toBeTruthy()
  })
})

describe('Expect LeftSide to render', () => {
  wrapper = shallow(<LeftSide {...sidebarProps} />)
  it('Should LeftSide side dispay without problems', () => {
    expect(wrapper).toBeTruthy()
  })
})

describe('Expect RightSide to render', () => {
  wrapper = shallow(<RightSide />)
  it('Should RightSide side dispay without problems', () => {
    expect(wrapper).toBeTruthy()
  })
})

describe('Expect TopLeftSide to render', () => {
  wrapper = shallow(<TopLeftSide {...sidebarProps} />)
  it('Should TopLeftSide side dispay without problems', () => {
    expect(wrapper).toBeTruthy()
  })
})

describe('Expect TopSide to render', () => {
  wrapper = shallow(<TopSide {...sidebarProps} />)
  it('Should TopSide side dispay without problems', () => {
    expect(wrapper).toBeTruthy()
  })
})

describe('Expect SideDrawer to render', () => {
  const wrapper4 = shallow(<SideDrawer {...sidebarProps} />)

  it('Expect side drawer nav to render without problem', () => {
    expect(wrapper4).toMatchSnapshot()
  })

  it('Expect side drawer nav to render all lifecycle without problem', () => {
    const prevPropsData = wrapper4.instance().props.prevProps
    wrapper4.instance().UNSAFE_componentWillReceiveProps(prevPropsData)
    expect(wrapper4.instance().props.prevProps).toEqual(sidebarProps.prevProps)
  })
})

describe('Expect to mock user profile info', () => {
  beforeEach(() => {
    moxios.install(apiCall)
  })

  afterEach(() => {
    moxios.uninstall(apiCall)
  })

  it('Should test spinner loading status', () => {
    store = mockStore({})
    store.dispatch(updateSpinnerStatus(false))
    expect(store.getActions()).toEqual([
      userProfileMockData.spinnerStatusAction(false),
    ])
  })

  it('Should user profile info be mocked', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith(userProfileMockData.successResponse)
    })

    store = mockStore({})
    await store.dispatch(getProfile()).then(async () => {
      const calledActions = store.getActions()
      expect(calledActions[0].type).toBe('SPINNER_STATUS')
      expect(calledActions[1].type).toBe('FETCH_PROFILE_SUCCESS')
    })
  })

  it('Should user profile fetching info fail', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.reject(userProfileMockData.errorResponse)
    })

    store = mockStore({})
    await store.dispatch(getProfile()).catch(async error => {
      const calledActions = store.getActions()
      expect(calledActions).toEqual([
        { type: 'SPINNER_STATUS', spinner: false },
      ])
    })
  })
})

describe('Expect profile action reducer to render', () => {
  it('Should spinner actions tested in reducer', () => {
    const spinnerSiwtchCase = ProfileReducers(
      {},
      userProfileMockData.spinnerStatusAction('spinner loading')
    )
    expect(spinnerSiwtchCase).toEqual({ spinner: 'spinner loading' })
  })

  it('Should successfully fetch reducer work', () => {
    const expectedData =
      userProfileMockData.successResponse.profileInformation.data
    const fetchSuccesfulyReducer = ProfileReducers(
      {},
      userProfileMockData.successfulyProfileReducer(expectedData)
    )
    expect(fetchSuccesfulyReducer).toEqual({ profile: expectedData })
  })

  it('Should fail to fetch user profile reduce', () => {
    const expectedData = userProfileMockData.errorResponse
    const fetchSuccesfulyReducer = ProfileReducers(
      {},
      userProfileMockData.failedProfileReducer(expectedData)
    )
    expect(fetchSuccesfulyReducer).toEqual({ profileError: expectedData })
  })
})

describe('Expect TopRightSide to render', () => {
  const wrapper5 = shallow(<TopRightSide {...sidebarProps} />)
  it('Expect TopRightSide to render without problem', () => {
    expect(wrapper5).toMatchSnapshot()
  })

  it('Expect TopRightSide to have props', () => {
    expect(wrapper5.instance().props.show).toEqual(true)
    expect(wrapper5.instance().props.sideDrawerOpen).toEqual(true)
    expect(wrapper5.instance().props.firstName).toEqual('John')
    expect(wrapper5.instance().props.lastName).toEqual('Doe')
    expect(wrapper5.instance().props.state).toMatchObject({
      viewProfile: { profile: 'data' },
      profileError: 'error',
    })
  })

  it('Expect TopRightSide to render all lifecycle without problem', () => {
    const prevPropsData = wrapper5.instance().props.prevProps
    wrapper5.instance().UNSAFE_componentWillReceiveProps(prevPropsData)
    expect(wrapper5.instance().props.prevProps).toEqual(sidebarProps.prevProps)
  })
})

describe('Expect sidebar main page to render', () => {
  const wrapper2 = shallow(<Sidebar {...sidebarProps} />)
  wrapperInstance = wrapper2.instance()

  it('Should backdrop clickable to remove sidebar on screen', () => {
    wrapperInstance.backdropClickHandler()
  })

  it('Should toggle open and close by updating on state', () => {
    wrapperInstance.drawerToggleClickHandler()
  })

  it('Should main sidebar has state and props', () => {
    expect(wrapperInstance.props.state.sideDrawerOpen).toBeTruthy()
    expect(wrapperInstance.props.state.children).toBeTruthy()
  })
})

describe('Expect to cover common map state to props ', () => {
  let wrapper6
  let store2
  let wrapper7

  const customProps = {
    mapStateToProps: jest.fn(),
    mapDispatchToProps: jest.fn(),
    state: sidebarProps.state,
    profileActions: jest.fn(),
    getCurrentUserinfo: jest.fn(),
    signoutUser: jest.fn(),
    history: {
      push: jest.fn(),
    },
  }
  beforeEach(() => {
    initialState = sidebarProps.state
    store2 = mockStore(initialState)
    wrapper6 = shallow(<SidebarDefault store={store2} {...customProps} />)
    wrapper7 = shallow(<TopRightSideDefault store={store2} {...customProps} />)
  })

  it('Should have initial profile user', () => {
    expect(wrapper6.props().children.props.profile).toBe('data')
    expect(wrapper6.props().children.props.profileError).toBe('error')
  })

  it('Should disaptch user profile data', () => {
    const dispatchProfileAction = store2.dispatch({
      type: 'FETCH_PROFILE_SUCCESS',
      payload: 'new user info',
    })
    wrapper6.props().children.props.getCurrentUserinfo(dispatchProfileAction)
    expect(store2.getActions()).toEqual([dispatchProfileAction])
  })

  it('Should TopRightSide map state to props covered', () => {
    expect(wrapper7.props().children.props.profile).toBe('data')
    expect(wrapper7.props().children.props.profileError).toBe('error')
  })
})

describe('Expect sidebar logout to logout successfully', () => {
  const wrapper5 = shallow(<SideDrawer {...signoutProps} />)
  it('Expect to logout by clicking a button', async () => {
    const signout = wrapper5.find('.signout')
    signout.simulate('click')
    expect(signout.text()).toBe('Logout')
  })
})

describe('Expect Left side logout work', () => {
  const wrapper5 = shallow(<LeftSide {...signoutProps} />)
  it('Expect to logout by clicking a button', async () => {
    const signout = wrapper5.find('.signout')
    signout.simulate('click')
    expect(signout.text()).toBe('Logout')
  })
})
