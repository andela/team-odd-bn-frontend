import { toast } from 'react-toastify';
import dotenv from 'dotenv';
import apiCall from '../../helpers/apiCall';
import {
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_ERROR,
  SPINNER_STATUS,
} from '../actionTypes/profileActionTypes';

dotenv.config();

export const updateSpinnerStatus = (value) => ({
  type: SPINNER_STATUS,
  spinner: value,
});

const updateProfile = (data) => async (dispatch) => {
  const API_URL = '/users/profile-settings';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const updateMyProfile = await apiCall.put(API_URL, data, { headers: HEADERS_REQUEST });
    dispatch(updateSpinnerStatus(false));
    toast.success('Profile updated Successfully');
    await dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: updateMyProfile.data.message,
    });
  } catch (error) {
    dispatch(updateSpinnerStatus(false));
    toast.error(error.response.data.message[0]);
    return dispatch({
      type: UPDATE_PROFILE_ERROR,
      payload: error.response.data,
    });
  }
};

export const uploadImage = (file) => async (dispatch) => {
  try {
    const { IMAGE_URI } = process.env;
    const formData = new FormData();
    const timeStamp = Date.now() / 1000;
    formData.append('file', file);
    formData.append('upload_preset', process.env.UPLOAD_PRESET);
    formData.append('api_key', process.env.CLOUDINARY_API_KEY);
    formData.append('timestamp', timeStamp);

    const { data: response } = await apiCall.post(IMAGE_URI, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    dispatch({
      type: UPLOAD_IMAGE_SUCCESS,
      payload: response.secure_url,
    });
  } catch (error) {
    return dispatch({
      type: UPLOAD_IMAGE_ERROR,
      payload: error.response.data,
    });
  }
};

export default updateProfile;
