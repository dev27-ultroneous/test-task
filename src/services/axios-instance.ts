import axios, {
  AxiosHeaders,
  InternalAxiosRequestConfig,
} from 'axios';

import { apiRoutes } from '.';


import { BASE_URL, getLocalStorageItem, removeLocalStorageItem } from '@utils/helper';
import { ROUTES } from '@/utils/constants';

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    if (config.url === apiRoutes.login) {
      return {
        ...config,
        headers: {
          ...config.headers,
        } as AxiosHeaders,
      };
    }
    const session = getLocalStorageItem('session');
    if (!session) {
      throw new Error("Access token is required")
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        ...(session ? { Authorization: `Bearer ${session}` } : {}),
      } as AxiosHeaders,
    };
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response): any {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { response: { status = null, data = null } = {} } = error;
    if (status === 401) {
      removeLocalStorageItem('token');
      window.location.replace(ROUTES.LOGIN);
      return Promise.reject(data);
    }
    return Promise.reject(data);
  },
);

export default axiosInstance;
