import profileReducer from '../../redux/reducers/ProfileReducers';
import updateProfileReducer from '../../redux/reducers/updateProfileReducer';
import getAllUsersReducer from '../../redux/reducers/getAllUsersReducers';
import ProfileReducer from '../../redux/reducers/ProfileReducers';

import {
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_ERROR,
  SPINNER_STATUS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
} from '../../redux/actionTypes/profileActionTypes';

describe('View Profile Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = profileReducer(undefined, {});
    expect(initialState).toEqual({
      profile: null,
      profileError: null,
    });
  });

  it('Should handle FETCH_PROFILE_SUCCESS ', () => {
    const successAction = {
      type: FETCH_PROFILE_SUCCESS,
      payload: {
        message: 'Fetched Profile successfully!',
      },
    };
    const returnedState = profileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      profile: successAction.payload,
      profileError: null,
    });
  });

  it('Should handle FETCH_PROFILE_ERROR ', () => {
    const successAction = {
      type: FETCH_PROFILE_ERROR,
      payload: {
        message: 'Unable to fetched profile!',
      },
    };
    const returnedState = profileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      profile: null,
      profileError: successAction.payload,
    });
  });

  it('Should handle UPDATE_PROFILE_SUCCESS ', () => {
    const successAction = {
      type: UPDATE_PROFILE_SUCCESS,
      payload: 'Update profile successfully!',
    };
    const returnedState = updateProfileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      message: successAction.payload,
      updateProfileError: null,
      imageURL: null,
      imageURLError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle UPDATE_PROFILE_ERROR ', () => {
    const successAction = {
      type: UPDATE_PROFILE_ERROR,
      payload: 'Unable to update profile!',
    };
    const returnedState = updateProfileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      message: null,
      updateProfileError: successAction.payload,
      imageURL: null,
      imageURLError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle UPLOAD_IMAGE_SUCCESS ', () => {
    const successAction = {
      type: UPLOAD_IMAGE_SUCCESS,
      payload: 'Image upload succesfully!',
    };
    const returnedState = updateProfileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      message: null,
      updateProfileError: null,
      imageURL: successAction.payload,
      imageURLError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle UPLOAD_IMAGE_ERROR ', () => {
    const successAction = {
      type: UPLOAD_IMAGE_ERROR,
      payload: 'Unable to upload image!',
    };
    const returnedState = updateProfileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      message: null,
      updateProfileError: null,
      imageURL: null,
      imageURLError: successAction.payload,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle SPINNER_STATUS ', () => {
    const successAction = {
      type: SPINNER_STATUS,
      payload: 'Loading!',
    };
    const returnedState = updateProfileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      message: null,
      updateProfileError: null,
      imageURL: null,
      imageURLError: null,
      spinner: successAction.payoad,
      spinnnerError: null,
    });
  });

  it('Should handle SPINNER_STATUS ', () => {
    const successAction = {
      type: SPINNER_STATUS,
      payload: 'Loading!',
    };
    const returnedState = ProfileReducer(undefined, successAction);
    expect(returnedState).toEqual({
      profile: null,
      profileError: null,
      spinner: successAction.payoad,
    });
  });

  it('Should handle GET_ALL_USERS_SUCCESS ', () => {
    const successAction = {
      type: GET_ALL_USERS_SUCCESS,
      payload: {
        message: 'Users retrieved successfully!',
      }
    };
    const returnedState = getAllUsersReducer(undefined, successAction);
    expect(returnedState).toEqual({
      users: successAction.payload,
      usersError: null,
    });
  });

  it('Should handle GET_ALL_USERS_ERROR ', () => {
    const successAction = {
      type: GET_ALL_USERS_ERROR,
      payload: {
        message: 'Unable to retrieved users!',
      },
    };
    const returnedState = getAllUsersReducer(undefined, successAction);
    expect(returnedState).toEqual({
      users: null,
      usersError: successAction.payload,
    });
  });
});
