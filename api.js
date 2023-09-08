import axios from 'axios';
import {REACT_APP_API_URL} from '@env';
import {getData} from './store';

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async config => {
    const user = await getData('user');
    config.headers['Authorization'] = `Bearer ${user?.token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const RegisterUser = async user => {
  return await instance.post('auth/signup', user);
};

export const LoginUser = async user => {
  return await instance.post('auth/login', user);
};

export const RequestReset = async user => {
  return await instance.post('auth/forgot-password', user);
};

export const VerifyOTP = async otpData => {
  return await instance.post('auth/verify-otp', otpData);
};

export const ResetPasswordWithOTP = async resetData => {
  return await instance.post('auth/reset-password', resetData);
};

// Endpoint to Edit Loggedin Password
export const ChangeLoggedinPassword = async changeData => {
  return await instance.post('auth/change-password', changeData);
};

// Endpoint to Delete User
export const DeleteUser = async () => {
  return await instance.delete('user/delete-profile');
};

// Endpoint to Get User Profile
export const GetUser = async () => {
  return await instance.get('user/profile');
};

// Endpoint to send feedback
export const SendFeedback = async data => {
  return await instance.post('feedback', data);
};
