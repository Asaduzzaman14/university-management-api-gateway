import axios, { AxiosInstance } from 'axios';
import { error } from 'console';
import config from '../config';

const httpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return error;
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const AuthService = httpService(config.authServiceUrl);
const CoreService = httpService(config.coreServiceUrl);

export { httpService, AuthService, CoreService };
