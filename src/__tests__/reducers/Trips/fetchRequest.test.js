import requestsReducers from '../../../redux/reducers/tripReducers/requestsReducers';
import initialState from '../../../redux/store/initialState';


describe('Requests reducers test', () => {
  it('Should fetch requests successfully', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_REQUESTS_SUCCESS',
      payload: {
        message: 'Updated your password successful',
        data: [],
      },
    });
    expect(newState).toEqual({
      requestCommentsData: {},
      requestsData: { message: 'Updated your password successful', data: [] },
      requestsError: {},
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,

    });
  });
  it('Should create comment successfully', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'CREATE_COMMENT_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      postCommentData: {
        message: 'Updated your password successful',
      },
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,
    });
  });
  it('Should handle create comment error', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'CREATE_COMMENT_ERROR',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      postCommentError: {
        message: 'Updated your password successful',
      },
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,
    });
  });
  it('Should handle update input', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'UPDATE_COMMENT_INPUT',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      postCommentInput: {
        message: 'Updated your password successful',
      },
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,
    });
  });
  it('should handle delete comment error', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'DELETE_COMMENT_ERROR',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      deleteCommentError: {
        message: 'Updated your password successful',
      },
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,
    });
  });
  it('Should handle delete comment success', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'DELETE_COMMENT_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      deleteCommentSuccess: {
        message: 'Updated your password successful',
      },
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,
    });
  });
  it('Should handle fetch single request success', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_SINGLE_REQUEST_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: { message: 'Updated your password successful' },
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,

    });
  });
  it('Should handle fetch comment success', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_COMMENTS_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      requestCommentsData: { message: 'Updated your password successful' },
      requestsData: [],
      requestsError: {},
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,

    });
  });
  it('Should handle fetch requests error', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_REQUESTS_ERROR',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      requestCommentsData: { },
      requestsData: [],
      requestsError: { message: 'Updated your password successful' },
      singleRequestData: {},
      paginatedRequest: [],
      paginationEnd: 5,
      paginationStart: 0,

    });
  });
  it('Should handle pagination', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'PAGINATION',
      payload: { data: [], paginationEnd: 0, paginationStart: 0 },
    });
    expect(newState).toEqual({
      paginatedRequest: undefined,
      paginationEnd: 0,
      paginationStart: 0,
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: {},
    });
  });
});
