import axios from 'axios';
import {REACT_APP_API_URL} from '@env';

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

export const RegisterUser = async user => {
  return await instance.post('auth/signup', user);
};
export const LoginUser = async user => {
  return await instance.post('auth/login', user);
};
