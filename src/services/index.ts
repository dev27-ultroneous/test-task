import { ROUTES } from "@/utils/constants";

const login = {
  login: '/auth/login',
  getUser: '/auth/me',
};

export const apiRoutes = {
  ...login,
};

export const publicPath = [ROUTES.LOGIN];
