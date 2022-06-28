import axios from 'axios';
import { appConfig } from 'src/config';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: appConfig.baseUrl,
});
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const accessToken = Cookies.get('token');
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
);
export default axiosInstance;
