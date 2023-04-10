import { ReactElement, useState } from 'react';
import { Button } from '@ui/buttons';
import Head from 'next/head';
import Link from 'next/link';
import { axiosInstance } from 'src/config/axiosInstance';
import { Layout } from 'src/layouts';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const [me, setMe] = useState('');
  const handleMe = async () => {
    try {
      const { data } = await axiosInstance.get('/users/me');
      setMe(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="container  mx-auto h-60 bg-gray-50">
        <h1>{me}</h1>
        <Button onClick={handleMe}>Submit</Button>

        <Link href="/login">login</Link>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
