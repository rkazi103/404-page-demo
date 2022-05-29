import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Main page</title>
        <meta name="description" content="Main page of the app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Main Page</p>
    </div>
  );
};

export default Home;
