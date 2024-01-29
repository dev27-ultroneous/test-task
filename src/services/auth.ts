import { apiRoutes } from '.';

import axiosInstance from './axios-instance';

export const loginWithUsername = async (username:string, password:string) => {
  const { data } = await axiosInstance.post(apiRoutes.login,{username,password},{});
  return data;
};

export const getUserDetails = async () => {
  const { data } = await axiosInstance.get(apiRoutes.getUser);
  return data;
};

