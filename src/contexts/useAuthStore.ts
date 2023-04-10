// import { create } from 'zustand';

// export const useAuthStore = create((set) => ({
//   accessToken: 'acccess',
//   increasePopulation: () =>
//     set((state) => ({ accessToken: state.accessToken })),
// }));

let accessToken = '';

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;
