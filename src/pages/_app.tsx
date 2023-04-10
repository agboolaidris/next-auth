import { ReactElement, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { setAccessToken } from 'src/contexts/useAuthStore';

import 'tailwindcss/tailwind.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post('/api/auth/refresh', null, {
          withCredentials: true,
        });
        setAccessToken(data.accessToken);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return getLayout(<Component {...pageProps} />);
}
