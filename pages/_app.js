import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import Footer from './components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Raknarin - Clothing </title>
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

export default MyApp
