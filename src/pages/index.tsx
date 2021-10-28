import Head from 'next/head';
import Dashboard from '../layout/dashboard';

const Home = () => (
  <Dashboard>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p>
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>
  </Dashboard>
);

export default Home;
