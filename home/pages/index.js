import Head from "next/head";

import Header from "../components/Header.jsx";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      Hosting some stuff, but sharing just the header above;
    </main>
  </div>
);

export default Home;
