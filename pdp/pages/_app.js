import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout title="Header">
      <Component {...pageProps} />
    </Layout>
  )
}