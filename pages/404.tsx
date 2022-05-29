import { NextPage } from "next";
import Head from "next/head";

const ErrorPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 Error</title>
        <meta name="description" content="Error page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Erro</p>
    </div>
  );
};

export default ErrorPage;
