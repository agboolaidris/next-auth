import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getAccessToken, setAccessToken } from 'src/contexts/useAuthStore';

export const axiosInstance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let refreshSubscribers: any[] = [];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token: any) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post('/api/auth/refresh', null, {
          withCredentials: true,
        });

        const token = response.data.accessToken;
        setAccessToken(token);
        originalRequest.headers.Authorization = `Bearer ${token}`;

        // Retry the original request
        refreshSubscribers.forEach((subscriber) => subscriber(token));
        refreshSubscribers = [];
        return axiosInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token = getAccessToken();
//     if (token) {
//       const { exp } = jwt_decode<any>(token);
//       if (Date.now() >= exp * 1000) {
//         const { data } = await axios.post('/api/auth/refresh', null, {
//           withCredentials: true,
//         });
//         config.headers.Authorization = `Berear ${data.accessToken}`;
//         setAccessToken(data.accessToken);
//       }
//     }

//     return config;
//   },
//   (error) => {
//     console.error(error, 'error');
//     return Promise.reject(error);
//   }
// );
