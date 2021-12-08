import Head from "next/head";
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ul>
        <li>
          <Link href={`/dynamic-items/5`}>
            <a>Dynamic Items Fallback: false 5</a>
          </Link>
        </li>
        <li><Link href={`/dynamic-items/8`}>
          <a>Dynamic Items Fallback: false 8</a>
        </Link>
        </li>
        <li><Link href={`/dynamic-items-fallback-true/5`}>
          <a>Dynamic Items Fallback: True 5</a>
        </Link>
        </li>
        <li><Link href={`/dynamic-items-fallback-true/8`}>
          <a>Dynamic Items Fallback: True 8</a>
        </Link>
        </li>
        <li>
          <Link href={`/dynamic-items-single-url-csr`}>
            <a>Just Dogs</a>
          </Link>
        </li>
      </ul>
    </main>
  </div>
);

export default Home;
