import axios from 'axios';
import {baseURL} from '../constants/config';

const axiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer 8U7dPDoiozxF26WNLAdJdo2S9KN7wwg58Dub0v9D',
  },
});

const errorHandler = async error => {
  return Promise.reject({...error});
};

axiosInstance.interceptors.response.use(undefined, error =>
  errorHandler(error),
);

export default axiosInstance;
