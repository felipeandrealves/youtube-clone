import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeModule } from 'modules/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Youtube Clone</title>
      </Head>

      <HomeModule />
    </>
  );
};

export default Home;
