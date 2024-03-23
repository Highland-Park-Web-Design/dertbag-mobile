import axios from 'axios';
import {REACT_APP_API_URL} from '@env';
import {getData} from './store';

const instance = axios.create({
  baseURL: 'http://192.168.1.28:4006/',
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

// Endpoint to get Stores
export const GetStores = async () => {
  return await instance.get('store');
};

// Endpoint to get Store by ID
export const GetSingleStores = async id => {
  return await instance.get(`store/${id}`);
};

// Endpoint to get Product
export const GetProductList = async () => {
  return await instance.get('product');
};

// Endpoint to get Product by ID
export const GetProductByID = async id => {
  return await instance.get(`product/${id}`);
};

// Endpoint to get User details
export const GetUserDetails = async () => {
  return await instance.get(`user/profile`);
};

// Endpoint to Update User details
export const UpdateUserDetails = async data => {
  return await instance.put(`user/update-profile`, data);
};
