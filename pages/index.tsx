import type { NextPage } from 'next';
import Head from 'next/head';

import Landing from 'components/pages/Landing';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Google Analytics Playground</title>
        <meta
          content="Starter kit for Next.js project using Typescript and Tailwind CSS"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Landing />
    </>
  );
};

export default Home;
