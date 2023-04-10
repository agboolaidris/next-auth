import axios from 'axios';
import { getAccessToken } from 'src/contexts/useAuthStore';

export const axiosInstance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getAccessToken();
    if (token) {
      const { data } = await axios.post('/api/auth/refresh', null, {
        withCredentials: true,
      });
      console.log(data);
      config.headers.Authorization = `Berear ${getAccessToken()}`;
      console.log(getAccessToken());
    }

    return config;
  },
  (error) => {
    console.error(error, 'error');
    return Promise.reject(error);
  }
);
