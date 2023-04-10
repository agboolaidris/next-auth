import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getAccessToken, setAccessToken } from 'src/contexts/useAuthStore';

export const axiosInstance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getAccessToken();
    if (token) {
      const { exp } = jwt_decode<any>(token);
      if (Date.now() >= exp * 1000) {
        const { data } = await axios.post('/api/auth/refresh', null, {
          withCredentials: true,
        });
        config.headers.Authorization = `Berear ${data.accessToken}`;
        setAccessToken(data.accessToken);
      }
    }

    return config;
  },
  (error) => {
    console.error(error, 'error');
    return Promise.reject(error);
  }
);
