import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import Footer from './components/Footer'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Raknarin - Clothing </title>
      </Head>
      <Layout>
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

export default MyApp
