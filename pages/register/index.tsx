import type { NextPage } from 'next';
import Head from 'next/head';

import Register from 'components/pages/Register';

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Register />
    </>
  );
};

export default NotFound;
