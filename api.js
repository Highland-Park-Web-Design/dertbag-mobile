import axios from 'axios';
import {REACT_APP_API_URL} from '@env';

const instance = axios.create({
  baseURL: REACT_APP_API_URL || 'https://dertbag-server.onrender.com/',
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'},
});

export const RegisterUser = async user => {
  return await instance.post('auth/signup', user);
};
